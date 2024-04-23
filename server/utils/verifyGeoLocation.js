import { fetchSettings } from "../utils/fetchSettings.js";

// Distance calculation function
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

// Middleware to verify user's presence based on their geo-location
async function verifyGeoLocation(req, res, next) {
  try {
    // Convert latitude and longitude from strings to numbers
    const userLatitude = parseFloat(req.body.currentLatitude);
    const userLongitude = parseFloat(req.body.currentLongitude);
    const settings = await fetchSettings();

    const clubLatitude = settings.clubLatitude; // Get club's latitude from database or hardcoded value
    const clubLongitude = settings.clubLongitude; // Get club's longitude from database or hardcoded value
    const range = 3; // Range in meters


    // Check if latitude and longitude are valid numbers
    if (isNaN(userLatitude) || isNaN(userLongitude)) {
      return res.status(400).json({ message: "Invalid latitude or longitude" });
    }

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

// Export middleware function
export { verifyGeoLocation };
