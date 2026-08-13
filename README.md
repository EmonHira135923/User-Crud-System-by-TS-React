1. Componets Folder Create
2. Home.tsx folder create and import in App.tsx
3. HeroUI Componets Setup ----> npm i @heroui/styles @heroui/react
4. App.css ----> @import "@heroui/styles
5. Services Folder Create
6. user Folder Create
7. api.ts folder create
8. types Folder Create
9. user.ts file create for declare types
10. All Of Types Declare Here. And, User Types Import From Here.

```
export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export interface UserTypes {
  id: number;
  name: string;
  username: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

```

11. App.css folder setup

```
@import "tailwindcss";
@import "@heroui/styles";
```

12.

```
Services Folder Create
user Folder Create
api.ts folder create
```

13. Api.ts folder for making fetch URL

```
import type { UserTypes } from "../../types/user";

export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<UserTypes[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed To Fetch Users.");
  }
  return res.json();
};

```

14. 2 File Create UserList and ShowUserData
15. UserList here data fetch by using Api.ts folder getUsers() then set in Usestate and set in data user 
16. Using Map then data singly handle and all of data show at Show UserData.tsx


