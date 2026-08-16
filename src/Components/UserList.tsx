import React from "react";
import type { UserTypes } from "../types/user";
import ShowUserData from "./ShowUserData";

interface UserListProps {
  users: UserTypes[];
  loading: boolean;
  error: string | null;
  setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserList: React.FC<UserListProps> = ({
  users,
  loading,
  error,
  setError,
  setUsers,
}) => {
  // Loading State
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-16">
          <div className="flex items-center gap-3 bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full shadow-sm border border-indigo-100">
            <svg
              className="animate-spin h-5 w-5 text-indigo-600"
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
            <span className="font-semibold text-sm">Loading users…</span>
          </div>
        </div>
      </div>
    );
  }

  // Error State
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
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Title Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-slate-200 gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500">
            Team Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            User Directory
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Browse through active user profiles and contact details
          </p>
        </div>

        <span className="self-start sm:self-auto bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200">
          Total Users: {users.length}
        </span>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {users.map((user) => (
          <ShowUserData
            setUsers={setUsers}
            user={user}
            key={user.id}
            setError={setError}
          />
        ))}
      </div>
    </section>
  );
};

export default UserList;
