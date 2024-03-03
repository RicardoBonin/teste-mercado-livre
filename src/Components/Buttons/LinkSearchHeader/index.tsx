import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

interface LinkSearchHeaderProps {
  value: string;
}

function LinkSearchHeader({ value }: LinkSearchHeaderProps) {
  return (
    <Link
      className={styles.linkSearchHeader}
      href={`/items?search=${encodeURIComponent(value)}`}
    >
      <Image
        src="/assets/logo-search.png"
        width={18}
        height={18}
        alt="Uma lupa com fundo transparente para o botão de buscar produtos."
      />
    </Link>
  );
}

export default memo(LinkSearchHeader);
