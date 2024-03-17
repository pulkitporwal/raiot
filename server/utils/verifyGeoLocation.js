function calculateDistance(lat1, lon1, lat2, lon2) {
	const earthRadius = 6371000; // Earth radius in meters
	const phi1 = (lat1 * Math.PI) / 180;
	const phi2 = (lat2 * Math.PI) / 180;
	const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
	const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

	const a =
		Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
		Math.cos(phi1) *
			Math.cos(phi2) *
			Math.sin(deltaLambda / 2) *
			Math.sin(deltaLambda / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const distance = earthRadius * c;
	return distance;
}

function verifyGeoLocation(req, res, next) {
	try {
		const { userLatitude, userLongitude } = req.body; // Assuming the latitude and longitude of user's location are provided in the request body
		const clubLatitude = 40.712828; /* Get club's latitude from database or hardcoded value */
		const clubLongitude =
			-74.005975; /* Get club's longitude from database or hardcoded value */
		const range = 20; // Range in meters

		// Calculate distance between user's location and club's location
		const distance = calculateDistance(
			userLatitude,
			userLongitude,
			clubLatitude,
			clubLongitude
		);

		// Determine if user is present based on calculated distance
		const isPresent = distance <= range;

		// Add presence information to request object for later middleware or route handler
		req.userPresence = isPresent;

		next(); // Move to the next middleware or route handler
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
}

export { verifyGeoLocation };
