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
      className={
        isActive ? `${styles.card} ${styles.card_active}` : `${styles.card}`
      }
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={styles.title}>
        {user.name.firstname} {user.name.lastname}
      </div>
      <div className={styles.text}>{user.email}</div>
      <div className={styles.text}>{user.phone}</div>
    </div>
  );
};
