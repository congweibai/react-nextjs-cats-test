import React from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

export default function Card({
  name,
  phone,
  email,
  image,
  id,
}: {
  name: string;
  phone: string;
  email: string;
  image: {
    url: string;
    alt: string;
  };
  id: number;
}) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`/cats/${id}`);
      }}
    >
      <div className={styles["card-header"]}>
        <img src={image.url} alt={image.alt} className={styles["card-img"]} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
