import './cart-dropdown.styles.scss';
import Button from '../components/button/button.component'
import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart-item/cart-item.component';

const CartDropDown = () => {
  const {cartItems} = useContext(cartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item) =>(
          <CartItem key={item.id} cartItem={item} />))}
        
        </div>
        <Button onClick= {goToCheckoutHandler} >checkout</Button>

    </div>
  )
}

export default CartDropDown