import './CheckoutItem.scss'

const CheckoutItem = ({ name, quantity, id, cartItems }) => {
  const increaseQuantity = () => {
    // const existingItem = cartItems.find(cartItem => cartItem.id === id)


    return cartItems.map(cartItem => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)

  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{quantity}</p>
      <br />
      <span onClick={increaseQuantity}>Increase</span>
    </div>
  )
}

export default CheckoutItem