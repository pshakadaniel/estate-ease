import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupLogin = ({ onSubmit }) => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(formValue);
    setFormError(errors);

    console.log("Validation errors:", errors);

    if (Object.keys(errors).length === 0) {
      console.log("Validation passed");

      if (isLogin) {
        toast.success("Logged in successfully!");
        console.log("Login data:", formValue);
      } else {
        toast.success("Signed up successfully!");
        console.log("Signup data:", formValue);
      }

      onSubmit({ ...formValue, isLogin }); // Call the parent function with login/signup flag
      setFormValue(initialValue); // Reset form values
    } else {
      console.log("Validation failed");
    }
  };

  const validate = (value) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (isLogin) {
      // Validation for login
      if (!value.username.trim()) {
        errors.username = "Username or Email is required";
      } else if (
        !emailRegex.test(value.username) &&
        value.username.includes("@")
      ) {
        errors.username = "Invalid username or email";
      }
    } else {
      // Validation for signup
      if (!value.username.trim()) {
        errors.username = "Username is required";
      } else if (value.username.includes(" ")) {
        errors.username = "Username should not contain spaces";
      }
      if (!value.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required";
      } else if (value.password !== value.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormValue(initialValue);
    setFormError({});
  };
  return (
    <div className="bg-black/80 backdrop-blur-md p-8 rounded-lg shadow-md max-w-md w-full flex items-center justify-center m-auto">
      {isLogin ? (
        <div className="text-start">
          <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                name="username"
                placeholder="username or email"
                value={formValue.username}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-200 bg-transparent/30 border backdrop-blur-md  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.username && (
                <p className="text-red-500 text-sm">{formError.username}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValue.password}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-200 bg-transparent/30 backdrop-blur-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.password && (
                <p className="text-red-500 text-sm">{formError.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="flex gap-2 mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={toggleForm}
              className="uppercase text-gray-400 font-medium hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="text-start">
          <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formValue.username}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-200 bg-transparent/30 backdrop-blur-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.username && (
                <p className="text-red-500 text-sm">{formError.username}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formValue.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-200 bg-transparent/30 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.email && (
                <p className="text-red-500 text-sm">{formError.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValue.password}
                onChange={handleChange}
                className="w-full px-4 py-2  text-gray-200 bg-transparent/30  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.password && (
                <p className="text-red-500 text-sm">{formError.password}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formValue.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2  text-gray-200 bg-transparent/30  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {formError.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formError.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="flex gap-2 mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={toggleForm}
              className="uppercase text-gray-400 font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
export default SignupLogin;
