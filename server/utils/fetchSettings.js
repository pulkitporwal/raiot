import mongoose from "mongoose";
import { Settings } from "../model/settings.model.js";

export const fetchSettings = async () => {
	const settings = await Settings.findOne({});

	return settings;
};
