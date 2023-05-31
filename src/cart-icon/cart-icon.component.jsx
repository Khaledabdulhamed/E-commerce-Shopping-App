import {  useContext } from 'react';
import { ReactComponent as ShoppingICon } from '../Assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { cartContext } from '../context/cart.context';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(cartContext)
    const toggleIsCartOppen= () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOppen}>
        <ShoppingICon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>  
  )
}

export default CartIcon