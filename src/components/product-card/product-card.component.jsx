import React from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {ProductCardContainer} from './product-card.styles';
// import { useContext } from 'react';
import { Dispatch } from 'react';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

// import { cartContext } from '../../context/cart.context';



const ProductCard = ({product}) => {
  const dispatch = useDispatch();
    // const {addItemToCart} = useContext(cartContext)
    const {name, price,  imageUrl} = product
    const cartItems = useSelector(selectCartItems)

    const AddProductToCart = () => dispatch(addItemToCart(cartItems, product))

    
  return (
    <ProductCardContainer>
        <img src={imageUrl}/>
        <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  )
  }

export default ProductCard