import jwt from "jsonwebtoken";
export default async function (req, res, next) {
	const token = req.cookies.accessToken;

	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Unauthorised Access",
		});
	}

	const decodedData = await jwt.verify(
		token,
		process.env.JWT_SECRET,
		(err, userData) => {
			if (err)
				return res.status(403).json({ success: false, message: err });
			req.userData = userData;
			next();
		}
	);
}
