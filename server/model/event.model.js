import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
	{
		eventName: {
			type: String,
			required: true,
		},
		eventDescription: {
			type: String,
			required: true,
		},
		eventDetail: {
			type: String,
			required: true,
		},
		expireOn: {
			type: Date,
			required: true,
		},
		thumbnail: {
			type: String,
		},
		banner: {
			type: String,
		},
		prize: {
			type: String,
		},
		location: {
			type: String,
		},
		attachedDocument: {
			type: String,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Event = mongoose.model("Event", eventSchema);
	