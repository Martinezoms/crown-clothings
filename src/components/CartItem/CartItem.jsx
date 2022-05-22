import './CartItem.scss';

const CartItem = ({ name, imageUrl, price }) => {
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
