import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import './product-card.styles.scss';
import { useContext } from 'react';
import { cartContext } from '../../context/cart.context';


import React from 'react'

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(cartContext)
    const {name, price,  imageUrl} = product

    const AddProductToCart = () => addItemToCart(product)

    
  return (
    <div className='product-card-container'>
        <img src={imageUrl}/>
        <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddProductToCart}>Add to Cart</Button>
    </div>
  )
  }

export default ProductCard