import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			index: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
		},
		fullName: {
			type: String,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default: "https://res.cloudinary.com/dguabhsld/image/upload/v1713431955/i4gi9xftnyn0uz3w9px5.png"
		},
		userType: {
			type: String,
			default: "Normal User",
		},
		banUserToIssueComponent: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) return next();

		this.password = await bcrypt.hash(this.password, 10);
		return next();
	} catch (error) {
		return next(error);
	}
});

userSchema.methods.comparePassword = async function (password) {
	return (await bcrypt.compare(password, this.password)) || false;
};

export const User = mongoose.model("User", userSchema);
