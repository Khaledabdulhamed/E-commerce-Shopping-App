import {CheckOutItemContainer,
   ImageContainer, 
  Name, 
  Quantity, 
  Price,
   Arrow,
    Value,
     RemoveButton} from './checkout-item.styles'
     import { useDispatch, useSelector } from 'react-redux'
     import { selectCartItems } from '../../store/cart/cart.selector'
     import { Dispatch } from 'react'
     import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem))
  const addItemHandlre = () => dispatch(addItemToCart(cartItems,cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem))
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
        <Arrow onClick={addItemHandlre}>
        &#10095;
        </Arrow>
        </Quantity>
        <Price>{cartItem.price}</Price>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
    

  )
}

export default CheckoutItem