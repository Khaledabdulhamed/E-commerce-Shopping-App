import './checkout-item.styles.scss'
import { useContext } from 'react'
import { cartContext } from '../../context/cart.context'
const CheckoutItem = ({cartItem}) => {
  const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(cartContext)
  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandlre = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  return (
    <div className='checkout-item-container'>
        <div className='image-container'> 
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
        &#10094;
        </div>
        <span className='value'> {cartItem.quantity} </span>
        <div className='arrow' onClick={addItemHandlre}>
        &#10095;
        </div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
    

  )
}

export default CheckoutItem