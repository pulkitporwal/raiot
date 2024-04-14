import { Component } from "../model/component.model.js";

export const addComponent = async (req, res) => {
	try {
		const { componentId, componentName } = req.body;
		console.log(req.userData.userType);

		if (
			!(
				req.userData.userType == "Super Admin" ||
				req.userData.userType == "Admin" ||
				req.userData.userType == "Developer"
			)
		) {
			return res.status(300).json({
				success: false,
				message: "You Don't have Authority to add the components",
			});
		}

		const isExisted = await Component.findOne({ componentId });

		if (isExisted) {
			return res.status(300).json({
				success: false,
				message: "Component Already Existed with given ID",
			});
		}

		const newComponent = await Component.create({
			componentId,
			componentName,
		});

		return res.status(201).json({
			success: true,
			message: "Component Added successfully",
			newComponent,
		});
	} catch (error) {
		console.error("Error while adding component:", error);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

export const removeComponent = async (req, res) => {
    try {
        const { componentId } = req.body;

        if (
            !(
                req.userData.userType == "Super Admin" ||
                req.userData.userType == "Admin" ||
                req.userData.userType == "Developer"
            )
        ) {
            return res.status(403).json({
                success: false,
                message: "You don't have authority to remove the components",
            });
        }

        const existingComponent = await Component.findOneAndDelete({ componentId });

        if (!existingComponent) {
            return res.status(404).json({
                success: false,
                message: "Component doesn't exist with the given ID",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Component removed successfully",
            removedComponent: existingComponent,
        });
    } catch (error) {
        console.error("Error while removing component:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};