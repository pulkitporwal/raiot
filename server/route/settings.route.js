import { Router } from "express";

const router = Router();

import { fetchSettings } from "../controller/settings.controller.js";
import verifyJWT from "../utils/verifyJWT.js";
router.route("/fetch-settings").get(verifyJWT, fetchSettings);

import { editSetting } from "../controller/settings.controller.js";
router.route("/edit-settings").post(verifyJWT, editSetting);

import { createSettings } from "../controller/settings.controller.js";
router.route("/create-settings").post(verifyJWT, editSetting);

export default router;
