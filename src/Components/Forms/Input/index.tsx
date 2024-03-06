import { ChangeEvent, HTMLAttributes, KeyboardEvent, memo } from 'react';

import styles from './styles.module.css';

interface InputProps extends HTMLAttributes<HTMLElement> {
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  placeholder: string;
}

function Input({
  handlerChange,
  handleKeyDown,
  type,
  placeholder,
  value,
}: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={handlerChange}
      placeholder={placeholder}
      value={value}
      onKeyDown={handleKeyDown}
    />
  );
}

export default memo(Input);
