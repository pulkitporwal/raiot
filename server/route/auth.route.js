import { Router } from "express";

const router = Router();

import { signup } from "../controller/auth.controller.js";
router.route("/signup").post(signup);

import { signin } from "../controller/auth.controller.js";
router.route("/signin").post(signin);

import { signout } from "../controller/auth.controller.js";
import verifyJWT from '../utils/verifyJWT.js'
router.route("/signout").post(verifyJWT,signout);

export default router;
