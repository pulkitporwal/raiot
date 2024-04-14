import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
	componentId: {
		type: String,
		required: true,
		unique: true,
	},
	componentName: {
		type: String,
		required: true,
		index: true,
	},
	isIssued: {
		type: Boolean,
		default: false,
	},
});

export const Component = mongoose.model("Component", componentSchema);
