import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {ProductCardContainer} from './product-card.styles';
import { useContext } from 'react';
import { cartContext } from '../../context/cart.context';


import React from 'react'

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(cartContext)
    const {name, price,  imageUrl} = product

    const AddProductToCart = () => addItemToCart(product)

    
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