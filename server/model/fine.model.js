import mongoose, { Schema } from "mongoose";

const fineSchema = new mongoose.Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "users",
		},
		issuedComponentId: {
			type: Schema.Types.ObjectId,
			ref: "issuedcomponents",
		},
		fineAmount: {
			type: Number,
			required: true,
		},
		isFineWaived: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Fine = mongoose.model("Fine", fineSchema);
