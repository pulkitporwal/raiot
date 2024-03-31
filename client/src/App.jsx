import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Conditions from "./pages/Conditions";
import Terms from "./pages/Terms";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar.jsx"
import MarkAttendance from "./pages/MarkAttendance.jsx";

function App() {
	return (
		<BrowserRouter>
		{/* <Navbar/> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/conditions" element={<Conditions />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/mark-attendance" element={<MarkAttendance />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
