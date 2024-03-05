'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SearchProductHeader from '../SearchProductHeader';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={54}
          height={32}
          alt="Logo do mercado livre"
        />
      </Link>

      <SearchProductHeader />
    </header>
  );
}

export default memo(Header);
