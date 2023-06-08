import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo} from '../Assets/crown.svg';
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles'
import { userContext } from '../context/user.context';
import { cartContext } from '../context/cart.context';
import { signOutUser } from '../utils/firebase/firebase.utils';

function NavigationBar () {
  const {currentUser} = useContext(userContext);
  const {isCartOpen} = useContext(cartContext);
 

  // console.log(currentUser)
    return (
      <Fragment>
        <NavigationContainer>
        <LogoContainer to = '/'>
        <CrwnLogo className='logo'/>
        </LogoContainer>
        <NavLinks>
        <NavLink to = '/shop'>
        Shop
        </NavLink>
        {currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) :
         (<NavLink to = '/auth'>
        Sign In
        </NavLink>) }
        <CartIcon/>
        </NavLinks>
       {isCartOpen &&<CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavigationBar;