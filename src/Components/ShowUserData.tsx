import React from "react";
import type { UserTypes } from "../types/user";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Chip,
  Button,
  Divider,
  Link,
} from "@heroui/react";

export interface UserProps {
  user: UserTypes;
}

const ShowUserData: React.FC<UserProps> = ({ user }) => {
  return (
    <Card className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
      {/* Header with Avatar, Name, Username & ID */}
      <CardHeader className="flex justify-between items-start p-4 pb-2">
        <div className="flex gap-3 items-center">
          <Avatar
            isBordered
            color="primary"
            radius="full"
            size="md"
            src={`https://i.pravatar.cc/150?u=${user.id}`}
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
        <Chip
          color="primary"
          variant="flat"
          size="sm"
          className="font-semibold text-xs"
        >
          #{user.id}
        </Chip>
      </CardHeader>

      <CardBody className="px-4 py-3 text-xs text-slate-600 flex flex-col gap-3">
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
            <Chip
              size="sm"
              variant="dot"
              color="success"
              className="text-[10px] h-5"
            >
              {user.company.bs}
            </Chip>
          </div>
        </div>

        <Divider />

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
            <Link
              isExternal
              href={`https://${user.website}`}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              {user.website}
            </Link>
          </div>
        </div>

        <Divider />

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
          <Button
            size="sm"
            color="primary"
            variant="solid"
            className="w-full font-semibold shadow-md shadow-blue-500/20 rounded-xl"
          >
            View Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShowUserData;
