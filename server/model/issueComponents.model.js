import mongoose, { Schema } from "mongoose";

const issueComponentsSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	componentId: {
		type: Schema.Types.ObjectId,
		ref: "Component",
		required: true,
	},
	issuedOn: {
		type: Date,
		default: Date.now(),
		required: true,
	},
	issuedTill: {
		type: Date,
		default: Date.now(),
		required: true,
	},
});
