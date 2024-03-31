import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const allowedOrigins = [
    "http://localhost:5173"
]

app.use(cors({ origin: "*" , credentials: true }));
app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(cookieParser());

import authRouter from "./route/auth.route.js";
app.use("/api/auth", authRouter);

import attendanceRouter from "./route/attendance.route.js";
app.use("/api/attendance", attendanceRouter);

export default app;
