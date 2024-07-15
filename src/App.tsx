import { useEffect, useState } from "react";
import { User } from "./types";
import { UserCard } from "./user/UserCard";
import style from "./app.module.scss";

export function App() {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  return (
    <div className={style.app}>
      <div className={style.title}>Users</div>

      <input
        className={style.search}
        placeholder="Search"
        onChange={(e) => {
          setInputText(e.target.value.toString().toLowerCase());
        }}
      />

      <div className={style.content}>
        {allUsers.map((user) => (
          <UserCard key={user.id} user={user} inputText={inputText} />
        ))}
      </div>
    </div>
  );
}
