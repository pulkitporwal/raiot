import app from "./app.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database.config.js";

dotenv.config();

connectToDatabase().then(() => {
	app.listen(process.env.PORT || 30000, () => {
		console.log(`Server is listening on PORT ${process.env.PORT || 30000}`);
	});
});
