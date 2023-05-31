import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo} from '../Assets/crown.svg';
import './navigation.styles.scss'
import { userContext } from '../context/user.context';
import { cartContext } from '../context/cart.context';
import { signOutUser } from '../utils/firebase/firebase.utils';

function NavigationBar () {
  const {currentUser} = useContext(userContext);
  const {isCartOpen} = useContext(cartContext);
 

  // console.log(currentUser)
    return (
      <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to = '/'>
        <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
        <Link className='nav-link' to = '/shop'>
        Shop
        </Link>
        {currentUser ? (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) : (<Link className='nav-link' to = '/auth'>
        Sign In
        </Link>) }
        <CartIcon/>
        </div>
       {isCartOpen &&<CartDropDown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavigationBar;