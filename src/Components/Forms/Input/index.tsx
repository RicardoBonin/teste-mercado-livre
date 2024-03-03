import { ChangeEvent, HTMLAttributes, memo } from 'react';

import styles from './styles.module.css';

interface InputProps extends HTMLAttributes<HTMLElement> {
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

function Input({ handlerChange, type, placeholder }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={handlerChange}
      placeholder={placeholder}
    />
  );
}

export default memo(Input);