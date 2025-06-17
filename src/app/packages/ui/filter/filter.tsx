import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Filter.module.scss";

type FilterProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function Filter({ placeholder = "Buscar...", onChange }: FilterProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <FaSearch className={styles.icon} />
    </div>
  );
}