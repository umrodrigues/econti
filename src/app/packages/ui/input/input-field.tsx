import { useState } from "react";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: "text" | "email" | "password" | "number"; 
  placeholder?: string;
  icon?: "mail" | "password";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean; 
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
  readonly = false, 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputWithIcon}>
      {icon === "mail" && type === "email" && (
        <FiMail className={styles.icon} />
      )}
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        readOnly={readonly}
      />
      {type === "password" && !readonly && (
        <button type="button" onClick={togglePasswordVisibility} className={styles.toggleButton}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
};
