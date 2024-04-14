import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
	try {
		if (!localFilePath) {
			console.error("Local File Path is missing.");
			throw new Error("Local File Path is missing.");
		}

		const fileResponse = await cloudinary.uploader.upload(localFilePath, {
			resource_type: "auto",
		});

		fs.unlink(localFilePath, (err) => {
			if (err) {
				console.error("Error deleting local file:", err);
			} 
		});

		return fileResponse.url;
	} catch (error) {
		console.error("Error uploading file to Cloudinary:", error);

		if (localFilePath) {
			fs.unlink(localFilePath, (err) => {
				if (err) {
					console.error("Error deleting local file:", err);
				}
			});
		}

		return null;
	}
};
