import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
// import { cartContext } from "../../context/cart.context"
import {Total, CheckOutContainer, CheckOutHeader, HeaderBlock} from './checkout.styles'
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
    // const {cartItems, cartTotal} = useContext(cartContext)
  return (
    <CheckOutContainer>
    <CheckOutHeader>
    <HeaderBlock>
    <span>Product</span>
    </HeaderBlock>
    <HeaderBlock>
    <span>Description</span>

    </HeaderBlock>
    <HeaderBlock>
    <span>Quantity</span>

    </HeaderBlock>
    <HeaderBlock>
    <span>Price</span>

    </HeaderBlock>
    <HeaderBlock>
    <span>Remove</span>

    </HeaderBlock>

    </CheckOutHeader>
            {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            })}
            <Total>Total: ${cartTotal}</Total>
    </CheckOutContainer>
  )
}

export default Checkout