import { useContext } from "react"
import { cartContext } from "../../context/cart.context"
const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(cartContext)
  return (
    <div>
        <h1>Check out Page</h1>
        <div>
            {cartItems.map((item) => {
            return <div key={item.id}>
                <h2>{item.name}</h2>
                <span>{item.quantity}</span>
                <br/>
                <span onClick={() => addItemToCart  (item)}>Increament</span>
                <br/>
                <span onClick={() => removeItemFromCart(item)}>Decreament</span>
            </div>
            })}
        </div>
    </div>
  )
}

export default Checkout