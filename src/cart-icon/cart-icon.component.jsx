import {  useContext } from 'react';
import {ShoppingICon, ItemCount, CartIconContainer} from './cart-icon.styles';
import { cartContext } from '../context/cart.context';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(cartContext)
    const toggleIsCartOppen= () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOppen}>
        <ShoppingICon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>  
  )
}

export default CartIcon