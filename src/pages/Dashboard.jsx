import React from "react";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold">Welcome, {user.displayName}!</h2>
      <img src={user.photoURL} alt={user.displayName} className="w-20 h-20 rounded-full mt-3" />
      <p className="text-gray-600 mt-2">Email: {user.email}</p>

      <button
        onClick={logout}
        className="mt-5 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
