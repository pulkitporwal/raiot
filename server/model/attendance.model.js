import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
			required: true,
		},
		present: {
			type: Boolean,
			default: false,
		},
		feedback: {
			type: String,
		},
		latitude: {
			type: String,
			required: true,
		},
		longitude: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Attendance = mongoose.model("Attendance", attendanceSchema);
