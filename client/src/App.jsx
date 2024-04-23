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
import IssueComponent from "./pages/IssueComponent.jsx";
import AddComponent from "./pages/AddComponent.jsx";
import ComponentList from "./pages/ComponentList.jsx";
import MyAttendance from "./pages/MyAttendance.jsx";
import IssueHistory from "./pages/IssueHistory.jsx";
import Members from "./pages/Members.jsx";
import AdvanceOptions from "./pages/AdvanceOptions.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import MyEvents from "./pages/MyEvents.jsx";

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
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          element={
            <ProtectedRoute
              userType={[
                "Admin",
                "Super Admin",
                "Developer",
                "Club Member",
                "Normal User",
              ]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-events" element={<MyEvents />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              userType={["Admin", "Super Admin", "Developer", "Club Member"]}
            />
          }
        >
          <Route path="/my-attendance" element={<MyAttendance />} />
          <Route path="/issue-component" element={<IssueComponent />} />
          <Route path="/issue-history" element={<IssueHistory />} />
          <Route path="/mark-attendance" element={<MarkAttendance />} />
        </Route>
        <Route
          element={
            <ProtectedRoute userType={["Admin", "Super Admin", "Developer"]} />
          }
        >
          <Route path="/add-component" element={<AddComponent />} />
          <Route path="/members" element={<Members />} />
          <Route path="/component-list" element={<ComponentList />} />
          <Route path="/add-event" element={<AddEvent />} />
        </Route>
        <Route
          element={<ProtectedRoute userType={["Super Admin", "Developer"]} />}
        >
          <Route path="/advance-options" element={<AdvanceOptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
