import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from '../card/Card';
import styles from './Layout.module.css';
import { getProductsList } from '../../hooks/getProducts';
import React, { useState, useEffect } from 'react';
import { filterProducts } from 'common/hooks/searchHandler';
import { ascSorting, descSorting } from 'common/hooks/sortingProducts';

export default function Layouts({ children }: PropsWithChildren<any>) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [iconState, setIconState] = useState('');
  
  useEffect(() => {
    const productsList = getProductsList();
    setProducts(filterProducts(query, products, productsList));
  }, [query]);

  // TODO: Extract into an outside function
  // handler to manage sorting calls and icon states
  const ascSortingHandler = () => {
    setIconState("asc");
    setSortedProducts(ascSorting(products));
  }

  const descSortingHandler = () => {
    setIconState("desc");
    setSortedProducts(descSorting(products));
  }

  return (
    <div className={styles.main__container}>
      <div className={styles.container__search}>
        <div className={styles.box__search}>
          <FontAwesomeIcon icon={faSearch} className={`${styles.icon} ${styles.icon__input}`} />
          <input
            onChange={(e) => setQuery(e.currentTarget.value)}
            value={query}
            placeholder="Escribe aqui..."
            className={styles['input_field']}
            type={'text'}
          />
        </div>
        <div className={styles.box__sorting}>
          <FontAwesomeIcon 
            onClick={ascSortingHandler} 
            icon={faMinus} 
            className={`${iconState === 'desc' ? styles.icon__disabled : ''} ${styles.icon} margin__r_10`} 
          />
          <FontAwesomeIcon 
            onClick={descSortingHandler} 
            icon={faPlus} 
            className={`${iconState === 'asc' ? styles.icon__disabled : ''} ${styles.icon}`} 
          />
        </div>
      </div>
      <div className={styles.container__body}>
        {
          sortedProducts.length === 0 ? 
          products.map((productInfo) => {
            return <Card key={productInfo.id} product={productInfo} />;
          }) : 
          sortedProducts.map((productInfo) => {
            return <Card key={productInfo.id} product={productInfo} />;
          })
        }
      </div>
      <main>{children}</main>
    </div>
  );
}
