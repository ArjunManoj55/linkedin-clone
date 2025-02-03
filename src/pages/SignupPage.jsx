import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/login");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Join LinkedIn</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="p-2 border rounded w-64" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded w-64" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded w-64" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-64">
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
