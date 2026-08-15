import React, { useState } from "react";
import type { UserTypes } from "../types/user";
import { addUsers } from "../Services/user/api";

interface AddUserProps {
  users: UserTypes[];
  setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>;
}

const AddUser: React.FC<AddUserProps> = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState<Omit<UserTypes, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const [error, setError] = useState<string | null>("");

  const handleAddUserBtn = async () => {
    try {
      const addNewUser = await addUsers(newUser);

      setUsers([...users, addNewUser]);

      setNewUser({
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });
    } catch (err) {
      setError("Failed To Data Add.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white border border-slate-200 shadow-md rounded-2xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-slate-800">Add New User</h1>

        <p className="text-xs text-slate-500 mt-1">
          Enter user details below to create a new profile.
        </p>
      </div>

      {/* Error */}
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                name: e.target.value,
              })
            }
            placeholder="e.g. John Doe"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Username
          </label>

          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              @
            </span>

            <input
              type="text"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  username: e.target.value,
                })
              }
              placeholder="johndoe"
              className="w-full pl-8 pr-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                email: e.target.value,
              })
            }
            placeholder="john@example.com"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleAddUserBtn}
          type="button"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 text-sm"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
