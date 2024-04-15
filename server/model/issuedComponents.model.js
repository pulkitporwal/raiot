import mongoose, { Schema } from "mongoose";

const issuedComponentsSchema = new mongoose.Schema(
	{
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
		isReturned: {
			type: Boolean,
			default: false,
		},
		returnVerification: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const issuedComponents = mongoose.model(
	"issuedComponents",
	issuedComponentsSchema
);
