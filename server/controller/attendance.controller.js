import { Settings } from "../model/settings.model.js";
import { Attendance } from "../model/attendance.model.js";
import { fetchSettings } from "../utils/fetchSettings.js";

const markAttendance = async (req, res) => {
	try {
		const settings = await fetchSettings();

		if (!settings.platformEnabled) {
			return res.status(403).json({
				success: false,
				message:
					"You cannot submit attendance now. Tell the Admin to enable the option",
			});
		}

		const { userData } = req;
		const { currentLatitude, currentLongitude, feedback } = req.body;

		// Get the start and end of the current day
		const todayStart = new Date();
		todayStart.setHours(0, 0, 0, 0);
		const todayEnd = new Date();
		todayEnd.setHours(23, 59, 59, 999);

		// Check if the user has already marked attendance for the current day
		const existingAttendance = await Attendance.findOne({
			userId: userData._id,
			date: { $gte: todayStart, $lte: todayEnd },
		});

		if (existingAttendance) {
			return res.status(403).json({
				success: false,
				message: "You have already marked attendance for today",
			});
		}

		// Create new attendance record
		const attendanceMarked = await Attendance.create({
			userId: userData._id,
			present: req.userPresence,
			latitude: currentLatitude,
			longitude: currentLongitude,
			feedback,
			date: new Date(), // Set the date field to the current date and time
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

const myAttendances = async (req, res) => {
	const user = req.cookies.accessToken;

    console.log(user)

	
};

export { markAttendance, myAttendances };
