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
