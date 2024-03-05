import { ChangeEvent, memo, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import Input from '../Forms/Input';
import LinkSearchHeader from '../Buttons/LinkSearchHeader';

import styles from './styles.module.css';

function SearchProductHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') as string;
  const [value, setValue] = useState(search);
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (pathname === '/') {
      setValue('');
    }

    if (search) {
      setValue(search);
    }
  }, [pathname, search]);

  return (
    <div className={styles.searchProductHeaderWrapper}>
      <Input
        type="text"
        handlerChange={handlerChange}
        placeholder="Nunca dejes de buscar"
        value={value}
      />

      <LinkSearchHeader value={value} />
    </div>
  );
}

export default memo(SearchProductHeader);
