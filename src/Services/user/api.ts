import type { UserTypes } from "../../types/user";

export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<UserTypes[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed To Fetch Users.");
  }
  return res.json();
};

export const addUsers = async (
  user: Omit<UserTypes, "id">,
): Promise<UserTypes> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Failed To Patch Data");
  }

  return res.json();
};

export const deleteUsers = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Users Not Deleted");
  }
};

export const updateUsers = async (
  id: number,
  user: Partial<UserTypes>,
): Promise<UserTypes> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Update User Done");
  }

  return res.json();
};
