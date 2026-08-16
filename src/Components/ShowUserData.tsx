import React, { useState } from "react";
import type { UserTypes } from "../types/user";
import { deleteUsers, updateUsers } from "../Services/user/api";

export interface UserProps {
  user: UserTypes;
  setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const ShowUserData: React.FC<UserProps> = ({ user, setUsers, setError }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<UserTypes>>({
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const deleteUser = async (id: number) => {
    try {
      await deleteUsers(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      setError("Failed To Delete User");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUsers(user.id, formData);
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? { ...u, ...formData } : u)),
      );
      setIsEditing(false);
    } catch (error) {
      setError("Update failed");
    }
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between">
        {/* Header with Avatar, Name, Username & ID */}
        <div className="flex justify-between items-start p-4 pb-3 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-3 items-center">
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={user.name}
              className="w-11 h-11 rounded-full border-2 border-indigo-500 object-cover"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {user.name}
              </h3>
              <span className="text-xs font-medium text-slate-400">
                @{user.username}
              </span>
            </div>
          </div>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
            #{user.id}
          </span>
        </div>

        {/* Body Section */}
        <div className="px-4 py-4 text-xs text-slate-600 flex flex-col gap-3">
          {/* Company Info */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold text-xs">
              <span>🏢</span>
              <span>{user.company.name}</span>
            </div>
            <p className="text-[11px] text-slate-500 italic pl-5">
              "{user.company.catchPhrase}"
            </p>
            <div className="mt-1.5 pl-5">
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {user.company.bs}
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">📧</span>
              <span className="font-medium text-slate-700 truncate">
                {user.email}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">📞</span>
              <span className="font-medium text-slate-700">{user.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">🌐</span>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-600 hover:underline"
              >
                {user.website}
              </a>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Address & Coordinates */}
          <div className="flex flex-col gap-1 text-slate-600">
            <div className="flex items-start gap-2">
              <span className="text-slate-400">📍</span>
              <div>
                <p className="font-semibold text-slate-700">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-slate-500">
                  {user.address.city} - {user.address.zipcode}
                </p>
              </div>
            </div>

            <div className="mt-1 pl-6 flex gap-2 text-[10px] font-mono text-slate-400">
              <span>Lat: {user.address.geo.lat}</span>
              <span>|</span>
              <span>Lng: {user.address.geo.lng}</span>
            </div>
          </div>

          <div className="pt-4 mt-1 border-t border-slate-100 flex gap-2">
            {/* Update Button opens Modal */}
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-2 px-3 rounded-xl shadow-sm shadow-indigo-500/20 transition-all duration-200 text-xs sm:text-sm"
            >
              Update
            </button>

            {/* Delete Button */}
            <button
              type="button"
              onClick={() => deleteUser(user.id)}
              className="flex-1 bg-white hover:bg-red-50 active:bg-red-100 text-red-600 font-semibold py-2 px-3 rounded-xl border border-red-200 transition-all duration-200 text-xs sm:text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Edit User Modal Overlay */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-indigo-500">
                  Edit Profile
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Update User Profile
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-semibold"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleUpdateSubmit}
              className="p-6 flex flex-col gap-4 text-xs"
            >
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website || ""}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl shadow-sm shadow-indigo-500/20 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowUserData;