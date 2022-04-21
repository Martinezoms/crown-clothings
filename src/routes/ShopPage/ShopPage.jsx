import React from 'react';
import { ShopItem } from '../../components';
import SHOP_DATA from '../../shopData.json';
import './ShopPage.scss';

const ShopPage = () => {
  return (
    <div className="shop__container">
      <h3>Shopping center</h3>
      <div className="shop__items">
        {SHOP_DATA.map((product) => (
          <div key={product.id}>
            <ShopItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
