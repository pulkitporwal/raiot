import { Router } from "express";

const router = Router();

import { updateInformation } from "../controller/user.controller.js";
import verifyJWT from "../utils/verifyJWT.js";
import { upload } from "../utils/multer.js";
router
  .route("/update-information")
  .post(
    verifyJWT,
    upload.fields([{ name: "avatar", maxCount: 1 }]),
    updateInformation
  );

import { fetchMembers } from "../controller/user.controller.js";
router.route("/fetch-members").get(verifyJWT, fetchMembers);

import { updateMembers } from "../controller/user.controller.js";
router.route("/update-members").post(verifyJWT, updateMembers);

export default router;
