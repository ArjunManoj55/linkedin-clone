import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { user } = useSelector((state) => state.user); // Get user from Redux state

  return (
    <Router>
      <Routes>
        {/* Redirect "/" to "/login" */}
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />

        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Route (Only logged-in users can access) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
