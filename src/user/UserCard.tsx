import { User } from "../types";
import { useState } from "react";
import styles from "./userCard.module.scss";
interface Props {
  user: User;
}
export const UserCard: React.FC<Props> = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={isActive ? "card card-active" : "card"}
      onClick={() => {
        setIsActive(true);
      }}
    >
      <div className="title">
        {user.name.firstname} {user.name.lastname}
      </div>
      <div className="card__text">{user.email}</div>
      <div className="card__text">{user.phone}</div>
    </div>
  );
};
