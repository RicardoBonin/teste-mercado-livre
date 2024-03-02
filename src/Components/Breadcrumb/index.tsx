import { memo } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function Breadcrumb() {
  return (
    <nav className={styles.breadcrumbWrapper}>
      <Link href="/">Início</Link>
    </nav>
  );
}

export default memo(Breadcrumb);
