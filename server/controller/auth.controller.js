import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
    const { userName, email, fullName, password, confirmPassword } = req.body;

    console.log(req.body);

    if (!userName || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Format of Fields

    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password and Confirm Password should match.",
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "A user with this email already exists.",
            });
        }

        // Check if the username already exists
        const existingUsername = await User.findOne({ userName });

        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: "Username is already taken.",
            });
        }

        const newUser = await User.create({
            email,
            fullName,
            userName, // Ensure userName is set here
            password,
        });

        newUser.password = undefined;

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser,
        });
    } catch (error) {
        console.error("Error while creating user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const signin = async (req, res) => {
    const { userNameOrEmail, password } = req.body;

    if (!userNameOrEmail || !password) {
        return res.status(400).json({
            success: false,
            message: "Both username/email and password are required",
        });
    }

    try {
        const user = await User.findOne({
            $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found with the provided credentials",
            });
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = jwt.sign(
            { userName: user.userName, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res
            .cookie("accessToken", token, { httpOnly: true, secure: true })
            .status(200)
            .json({
                success: true,
                message: "User signed in successfully",
                userInfo: user,
            });
    } catch (error) {
        console.error("Error while signing in:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const signout = async (req, res) => {
    try {
        return res
            .status(200)
            .clearCookie("accessToken", { httpOnly: true })
            .json({
                success: true,
                message: "User signed out successfully",
            });
    } catch (error) {
        console.error("Error while signing out:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export { signup, signin, signout };
