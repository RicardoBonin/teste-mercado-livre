import { Metadata } from 'next';

import styles from '@/styles/page.module.css';

export const metadata: Metadata = {
  title: 'Mercardo Livre',
  description: 'Mercardo Livre | O maior portal de vendas do brasil.',
};

export default async function Page() {
  return <main data-testid="main" className={styles.main} />;
}
