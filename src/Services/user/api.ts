import type { UserTypes } from "../../types/user";

export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<UserTypes[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed To Fetch Users.");
  }
  return res.json();
};
