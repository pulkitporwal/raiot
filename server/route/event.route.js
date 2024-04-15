import { Router } from "express";

const router = Router();

import verifyJWT from "../utils/verifyJWT.js";
import { addEvent } from "../controller/events.controller.js";
import { upload } from "../utils/multer.js";
router.route("/add-event").post(
	verifyJWT,
	upload.fields([
		{ name: "thumbnail", maxCount: 1 },
		{ name: "banner", maxCount: 1 },
	]),
	addEvent
);

import { markComplete } from "../controller/events.controller.js";
router.route("/mark-complete").post(verifyJWT,markComplete);

import { removeEvent } from "../controller/events.controller.js";
router.route("/remove-event").post(verifyJWT,removeEvent);

import { getAllEvents } from "../controller/events.controller.js";
router.route("/get-all-events").get(getAllEvents);

export default router;
