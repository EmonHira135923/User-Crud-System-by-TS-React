import { useEffect, useState } from "react";
import "./App.css";

import AddUser from "./Components/AddUser";
import Home from "./Components/Home";
import UserList from "./Components/UserList";

import type { UserTypes } from "./types/user";
import { getUsers } from "./Services/user/api";

function App() {
  const [users, setUsers] = useState<UserTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const data = await getUsers();

        setUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Home />

      <AddUser users={users} setUsers={setUsers} />

      <UserList users={users} setUsers={setUsers} loading={loading} error={error} setError={setError} />
    </div>
  );
}

export default App;
