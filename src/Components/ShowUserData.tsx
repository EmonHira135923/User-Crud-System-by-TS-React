import React from "react";
import type { UserTypes } from "../types/user";

export interface UserProps {
  user: UserTypes;
}

const ShowUserData: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between">
      {/* Header with Avatar, Name, Username & ID */}
      <div className="flex justify-between items-start p-4 pb-2">
        <div className="flex gap-3 items-center">
          <img
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-base font-bold text-slate-800 leading-tight">
              {user.name}
            </h3>
            <span className="text-xs font-medium text-slate-400">
              @{user.username}
            </span>
          </div>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          #{user.id}
        </span>
      </div>

      {/* Body Section */}
      <div className="px-4 py-3 text-xs text-slate-600 flex flex-col gap-3">
        {/* Company Info */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-slate-800 font-semibold text-xs">
            <span>🏢</span>
            <span>{user.company.name}</span>
          </div>
          <p className="text-[11px] text-slate-500 italic pl-5">
            "{user.company.catchPhrase}"
          </p>
          <div className="mt-1 pl-5">
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
              className="text-xs font-semibold text-blue-600 hover:underline"
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

        {/* Profile Action Button */}
        <div className="pt-2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowUserData;
