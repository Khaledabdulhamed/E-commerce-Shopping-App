import { createContext,useReducer } from "react";
import { act } from "react-dom/test-utils";


const addCartItem = (cartItems, productToAdd) =>{
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id ===productToAdd.id);

        if (existingItem){
            return cartItems.map((cartItem) => cartItem.id
             === productToAdd.id ? 
             {...cartItem, quantity: cartItem.quantity +1} : cartItem)    ;
        }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

        return cartItems.map((cartItem) => cartItem.id
         === cartItemToRemove.id ? 
         {...cartItem, quantity: cartItem.quantity - 1} : cartItem)    ;
    

}

const clearCartItem = (cartItems, cartItemToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

}


export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemtoCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',

}


const INITIAL_STATE = {
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
    cartItems: [],
}

const cartReducer = (state, action) =>{
const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload,
            }
        default:
        throw new Error(`unhandled type of ${type} in cart reducer`)
    }
}

export const CartProvider = ({children}) =>{

    const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE)




    const updateCartItemsReducer = (newCartItems) =>{
        const newCartCount = newCartItems.reduce(
            (total,cartItem) => total + cartItem.quantity, 0) 


         const newCartTotal = newCartItems.reduce(
            (total,cartItem) => total + cartItem.quantity * cartItem.price, 0) 

        dispatch({ type:CART_ACTION_TYPES.SET_CART_ITEMS,
         payload: {
            cartItems: newCartItems, 
            cartTotal: newCartTotal,
             cartCount: newCartCount} })
    }

    const addItemToCart = (productToAdd) =>{
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems)
    }
    const clearItemFromCart = (cartItemToClear) =>{
        const newCartItems= clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems)
    }
    const setIsCartOpen = (bool) =>{
        dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN,payload: bool})
    }
    const value =
     {isCartOpen,
    setIsCartOpen,
     addItemToCart, 
     cartItems, 
     cartCount,
     clearItemFromCart,
      removeItemFromCart,
      cartTotal
    }

    return(
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
}