import React, { ChangeEvent, useState } from 'react';

import Input from '../Forms/Input';
import LinkSearchHeader from '../Buttons/LinkSearchHeader';

import styles from './styles.module.css';

function SearchProductHeader() {
  const [value, setValue] = useState('');
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.searchProductHeaderWrapper}>
      <Input
        type="text"
        handlerChange={handlerChange}
        placeholder="Nunca dejes de buscar"
      />
      <LinkSearchHeader value={value} />
    </div>
  );
}

export default React.memo(SearchProductHeader);
