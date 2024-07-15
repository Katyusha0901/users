import React from "react";
import { useEffect, useState } from "react";
import { User } from "./types";
import { UserCard } from "./user/UserCard";
import style from "./app.module.scss";
import { text } from "stream/consumers";

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
    <div className={style.app}>
      <div className={style.title}>Users</div>

      <input
        className={style.search}
        value="Search"
        onChange={(information) => information.target.value}
      />

      <div className={style.content}>
        {allUsers.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}
