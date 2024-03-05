'use client';

import { memo } from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import cn from 'classnames';

import styles from './styles.module.css';

interface BreadcrumbsProps {
  categories: string[];
}

function Breadcrumb({ categories }: BreadcrumbsProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') as string;
  const cleanCategories = [...new Set(categories?.concat(search))]?.filter(
    Boolean,
  );

  return (
    <nav className={styles.breadcrumbWrapper}>
      <Link className={styles.breadcrumbItem} href="/">
        Inicio
      </Link>
      {cleanCategories?.map((category, index) => (
        <div
          key={category}
          className={cn(styles.breadcrumbItem, styles.breadcrumbItemMap, {
            [styles.breadcrumbMapLastItem]:
              index === cleanCategories.length - 1,
          })}
        >
          <AiOutlineRight className={styles.arrowIcon} />
          <Link
            className={cn(styles.breadcrumbItem, {
              [styles.breadcrumbLastItem]: index === cleanCategories.length - 1,
            })}
            href={`/items?search=${encodeURIComponent(category)}`}
          >
            {category}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default memo(Breadcrumb);
