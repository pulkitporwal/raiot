import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

export default async function authMiddleware(req, res, next) {
    try {
        // console.log("Request Cookies:", req.cookies.accessToken);
        const token = req.cookies.accessToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorised Access: No token provided",
            });
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);


        const userData = await User.findById(decodedData._id);
		userData.password = undefined;
		userData.accessToken = undefined;
        req.userData = userData;

        next();
    } catch (error) {
        console.error("Error in authentication middleware:", error.message);
        return res.status(401).json({
            success: false,
            message: "Unauthorised Access: Invalid token",
        });
    }
}
