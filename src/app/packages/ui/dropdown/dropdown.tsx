import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  options: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
};

export default function Dropdown({ options, placeholder = "Selecione...", onSelect }: DropdownProps) {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
        {isOpen ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li key={option} className={styles.item} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}