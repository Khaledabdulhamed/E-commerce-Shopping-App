import {CheckOutItemContainer,
   ImageContainer, 
  Name, 
  Quantity, 
  Price,
   Arrow,
    Value,
     RemoveButton} from './checkout-item.styles'
import { useContext } from 'react'
import { cartContext } from '../../context/cart.context'
const CheckoutItem = ({cartItem}) => {
  const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(cartContext)
  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandlre = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  return (
    <CheckOutItemContainer>
        <ImageContainer> 
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
        </ImageContainer>
        <Name>{cartItem.name}</Name>
        <Quantity>
        <Arrow onClick={removeItemHandler}>
        &#10094;
        </Arrow>
        <Value> {cartItem.quantity} </Value>
        <div className='arrow' onClick={addItemHandlre}>
        &#10095;
        </div>
        </Quantity>
        <Price>{cartItem.price}</Price>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
    

  )
}

export default CheckoutItem