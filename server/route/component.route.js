import { Router } from "express";

const router = Router();

import verifyJWT from "../utils/verifyJWT.js";
import { addComponent } from "../controller/component.controller.js";
router.route("/add-component").post(verifyJWT, addComponent);

import { removeComponent } from "../controller/component.controller.js";
router.route("/remove-component").post(verifyJWT, removeComponent);


export default router;
