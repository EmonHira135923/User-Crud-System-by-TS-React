import React, { useEffect, useState } from "react";
import type { UserTypes } from "../types/user";
import { getUsers } from "../Services/user/api";
import ShowUserData from "./ShowUserData";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch user data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Loading Skeleton State
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full shadow-sm">
            <svg
              className="animate-spin h-5 w-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="font-semibold text-sm">Loading users...</span>
          </div>
        </div>
      </div>
    );
  }

  // Error Banner State
  if (error) {
    return (
      <div className="max-w-xl mx-auto my-8 p-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-lg">⚠️</span>
            <div>
              <h3 className="text-sm font-bold text-red-800">Error Occurred</h3>
              <p className="text-xs text-red-700 mt-0.5">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            User Directory
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Browse through active user profiles and contact details
          </p>
        </div>
        <span className="self-start sm:self-auto bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200">
          Total Users: {users.length}
        </span>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {users.map((user) => (
          <ShowUserData user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
};

export default UserList;
