import { issuedComponents } from "../model/issuedComponents.model.js";
import { Component } from "../model/component.model.js";
import { fetchSettings } from "../utils/fetchSettings.js";
import { calculateDelayNumberOfDays } from "../utils/calculateDelayNumberOfDays.js";
import { Fine } from "../model/fine.model.js";

export const issueComponent = async (req, res) => {
	try {
		const { componentId, issuedTill } = req.body;
		const { _id: userId, banUserToIssueComponent } = req.userData;

		if (!(userId || componentId || issuedTill)) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		if (banUserToIssueComponent) {
			return res.status(403).json({
				success: false,
				message: "You are banned to Issue the Components",
			});
		}

		let componentToBeIssued = await Component.findOne(
			{ _id: componentId },
			{ isIssued: 1 }
		);

		if (componentToBeIssued.isIssued) {
			return res.status(300).json({
				success: false,
				message: "OOPS!! Component Already Issued",
			});
		}

		componentToBeIssued.isIssued = true;

		await componentToBeIssued.save();

		const issueComponentEntry = await issuedComponents.create({
			userId,
			componentId,
			issuedTill,
		});

		return res.status(500).json({
			success: true,
			message: "Component Issued Successfully",
			issueComponentEntry,
		});
	} catch (error) {
		console.error("Error while issuing component:\n", error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

export const returnIssuedComponent = async (req, res) => {
	try {
		const { issuingId } = req.body;
		const settings = await fetchSettings();

		if (!issuingId) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		const issuingDetails = await issuedComponents.findOne({
			_id: issuingId,
		});

		const component = await Component.findById(issuingDetails.componentId);

		if (!component.isIssued) {
			return res.status(400).json({
				success: false,
				message:
					"No Corresponding Entry of issuing regarding this component",
			});
		}

		if (component.isIssued) {
			if (Date.now() > issuingDetails.issuedTill) {
				const fineAmount =
					settings.finePerDay *
					calculateDelayNumberOfDays(issuingDetails.issuedTill);

				const fineEntry = await Fine.create({
					userId: req.userData._id,
					issuedComponentId: issuingDetails._id,
					fineAmount,
				});
			}
		}
		issuingDetails.isReturned = true;
		component.isIssued = false;

		await component.save();
		await issuingDetails.save();

		return res.status(200).json({
			success: true,
			message: "Component Returned Successfully",
		});
	} catch (error) {
		console.error("Error while returning issued component:\n", error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};
