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



function App() {
	return (
		<BrowserRouter>
			{/* <Navbar/> */}
			<Routes>	
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/conditions" element={<Conditions />} />

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
