import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://192.168.146.96:5173"];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	})
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(cookieParser());

import authRouter from "./route/auth.route.js";
app.use("/api/auth", authRouter);

import attendanceRouter from "./route/attendance.route.js";
app.use("/api/attendance", attendanceRouter);

import componentRouter from "./route/component.route.js";
app.use("/api/component", componentRouter);

import issueComponentsRouter from "./route/issuedComponents.route.js";
app.use("/api/issue-components", issueComponentsRouter);

import eventRouter from "./route/event.route.js";
app.use("/api/event", eventRouter);

import userRouter from "./route/user.route.js";
app.use("/api/user", userRouter);

import settingsRouter from "./route/settings.route.js";
app.use("/api/settings", settingsRouter);

export default app;
