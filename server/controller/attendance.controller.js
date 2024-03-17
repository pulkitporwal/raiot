import { Settings } from "../model/settings.model.js";
import { Attendance } from "../model/attendance.model.js";

const markAttendance = async (req, res) => {
	try {
		const { platformEnabled } = await Settings.findOne({});

		if (!platformEnabled) {
			return res.status(403).json({
				success: false,
				message:
					"You cannot submit attendance now. Tell the Admin to enable the option",
			});
		}

		const { userData } = req;
		const { currentLatitude, currentLongitude, feedback } = req.body;

		const attendanceMarked = await Attendance.create({
			userId: userData._id,
			present: req.userPresence,
			latitude: currentLatitude,
			longitude: currentLongitude,
			feedback,
		});

		res.status(200).json({
			success: true,
			message: "Attendance marked successfully",
			attendanceMarked,
		});
	} catch (error) {
		console.log("Something went wrong while Marking Attendance", error);
		res.status(500).json({
			success: false,
			message: "Server Error while marking attendance",
		});
	}
};

export { markAttendance };
