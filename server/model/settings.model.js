import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
	platformEnabled: {
		type: Boolean,
		default: false,
	},
});

export const Settings = mongoose.model("Settings", settingsSchema);
