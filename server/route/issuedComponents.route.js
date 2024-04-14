import express from "express";

const router = express.Router();

import verifyJWT from "../utils/verifyJWT.js";
import { issueComponent } from "../controller/issuedComponents.controller.js";
router.route("/issue-component").post(verifyJWT, issueComponent);

import { returnIssuedComponent } from "../controller/issuedComponents.controller.js";
router.route("/return-issue-component").post(verifyJWT, returnIssuedComponent);

export default router;
