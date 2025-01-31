import PropTypes from "prop-types";

const LoginForm = ({ email, password, setEmail, setPassword, handleSubmit }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      {/* LinkedIn Logo */}
      <div className="flex justify-center mb-6">
        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="LinkedIn Logo" className="w-32" />
      </div>

      {/* Login Form */}
      <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Phone</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
          Sign in
        </button>

        {/* Forgot Password Link */}
        <p className="text-center text-sm">
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
        </p>
        
        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          New to LinkedIn?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">Join now</a>
        </p>
      </form>
    </div>
  );
};

/* 🔹 Define Prop Types */
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
