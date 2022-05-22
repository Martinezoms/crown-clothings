import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CheckoutItem } from '../../components'

import './Checkout.scss'

const Checkout = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='checkout__container'>
      {cartItems.length > 0 ? cartItems.map(item => (<CheckoutItem key={item.id} {...item} />)) : <h3>Nothing to checkout</h3>}
    </div>
  )
}

export default Checkout