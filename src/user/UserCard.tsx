import { User } from "../types";
import { useMemo } from "react";
import styles from "./userCard.module.scss";

interface Props {
  user: User;
  inputText: string;
}
export const UserCard: React.FC<Props> = ({ user, inputText }) => {
  const userInformation: string[] = [
    user.name.firstname,
    user.name.lastname,
    `${user.name.firstname} ${user.name.lastname}`,
    user.email,
    user.phone,
  ];

  const isActive = useMemo(
    () =>
      userInformation.some((characteristic) => {
        return characteristic.includes(inputText) && inputText !== "";
      }),
    [inputText]
  );

  return (
    <div
      className={
        isActive ? `${styles.card} ${styles.card_active}` : `${styles.card}`
      }
    >
      <div className={styles.title}>
        {user.name.firstname} {user.name.lastname}
      </div>
      <div className={styles.text}>{user.email}</div>
      <div className={styles.text}>{user.phone}</div>
    </div>
  );
};
