'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

function Header() {
  const [value, setValue] = useState('');
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={42}
          height={32}
          alt="Logo do mercado livre"
        />
      </Link>
      <input
        type="text"
        onChange={handlerChange}
        placeholder="Nunca dejes de buscar"
      />
      <Link href={`/produtos-venda?${encodeURIComponent(value)}`}>Buscar</Link>
    </header>
  );
}

export default React.memo(Header);
