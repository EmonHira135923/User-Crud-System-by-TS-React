import React, { useEffect, useState } from "react";
import type { UserTypes } from "../types/user";
import { getUsers } from "../Services/user/api";
import ShowUserData from "./ShowUserData";

const UserList: React.FC = () => {
  const [users, setUser] = useState<UserTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUser(data);
        setError(null);
      } catch (error) {
        setError("Your Data is not Fetching");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>LOading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Eroor Fouund</h1>
      </div>
    );
  }

  console.log("Users Found Here: ", users);

  return (
    <div>
      <h1>User List. {users.length} </h1>
      <div>
        {users.map((user) => (
          <ShowUserData user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
