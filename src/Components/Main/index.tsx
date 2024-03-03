import { HTMLAttributes, memo } from 'react';

import styles from './styles.module.css';

type MainType = HTMLAttributes<HTMLElement>;

function Main({ children }: MainType) {
  return <main className={styles.main}>{children}; </main>;
}

export default memo(Main);
