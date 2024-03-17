import { Router } from "express";

const router = Router();

import { markAttendance } from "../controller/attendance.controller.js";
import verifyJWT from "../utils/verifyJWT.js";
import {verifyGeoLocation} from "../utils/verifyGeoLocation.js";
router.route("/mark-attendance").post(verifyJWT, verifyGeoLocation, markAttendance);

export default router;
