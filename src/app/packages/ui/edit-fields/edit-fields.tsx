import React, { useState } from 'react';
import styles from './EditFields.module.scss';

interface EditFieldsProps {
  title: string;
  value: string;
}

export const EditFields: React.FC<EditFieldsProps> = ({ title, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.editFieldContainer}>
      <label className={styles.title}>
        {title}:
      </label>
      <input
        type="text"
        className={styles.inputField}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};
