import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';
import Button from '../components/button/button.component'
import React from 'react'
import { useContext } from 'react';
// import { cartContext } from '../context/cart.context';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart-item/cart-item.component';

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)
  // const {cartItems} = useContext(cartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
        <CartItems>
        { cartItems.length ?
          (cartItems.map((item) =>(
          <CartItem key={item.id} cartItem={item} />))
          ) : ( 
            <EmptyMessage>Your Cart is Empty</EmptyMessage>
          )}
        
        </CartItems>
        <Button onClick= {goToCheckoutHandler} >checkout</Button>

    </CartDropdownContainer>
  )
}

export default CartDropDown