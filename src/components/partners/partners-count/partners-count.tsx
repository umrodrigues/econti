'use client';
import { useEffect, useState } from "react";
import styles from "./PartnersCount.module.scss";

export default function PartnersCount() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`${styles.container} ${visible ? styles.fadeIn : ""}`}>
      <span className={styles.blue}>+ DE 150&nbsp;&nbsp;</span>
      <span className={styles.black}>EMPRESAS ATENDIDAS</span>
    </div>
  );
}
