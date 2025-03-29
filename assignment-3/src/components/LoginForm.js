import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg w-80 flex flex-col space-y-4">
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <label htmlFor="email" className="text-gray-700 font-medium">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 rounded w-full"
        required
      />

      <label htmlFor="password" className="text-gray-700 font-medium">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border p-2 rounded w-full"
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
