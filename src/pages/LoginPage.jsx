import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Redirect to home after login
  if (user) {
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Logo at the top-left */}
      <div className="absolute top-4 left-4">
        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
          alt="LinkedIn Logo"
          className="w-15"
        />
      </div>

      {/* Login Form with Redux Connection */}
      <div className="flex flex-col items-center">
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
        {isLoading && <p className="text-blue-600 mt-2">Logging in...</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;

