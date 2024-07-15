import React from "react";
import { useEffect, useState } from "react";
import { User } from "./types";
import { UserCard } from "./user/UserCard";

export function App() {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);
  console.log(allUsers);
  return (
    <div>
      {allUsers.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
