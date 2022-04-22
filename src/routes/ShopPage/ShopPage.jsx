import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext';
import { ShopItem } from '../../components';
import './ShopPage.scss';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop__container">
      <h3>Shopping center</h3>
      <div className="shop__items">
        {products.map((product) => (
          <div key={product.id}>
            <ShopItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
