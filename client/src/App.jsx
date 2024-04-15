import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Conditions from "./pages/Conditions";
import Terms from "./pages/Terms";
import ProtectedRoute from "./components/ProtectedRoute";
import MarkAttendance from "./pages/MarkAttendance.jsx";
import Teams from "./pages/Teams.jsx";
import FAQ from "./pages/FAQ.jsx";
import Event from "./pages/Event.jsx";
import EventInformation from "./pages/EventInformation.jsx";



function App() {
	return (
		<BrowserRouter>
			<Routes>	
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/conditions" element={<Conditions />} />
				<Route path="/events" element={<Event />} />
				<Route path="/event/:eventId" element={<EventInformation />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route
						path="/mark-attendance"
						element={<MarkAttendance />}
					/>
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
