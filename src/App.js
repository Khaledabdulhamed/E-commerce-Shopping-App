import { Routes, Route } from 'react-router-dom';
import Home from '../src/Routes/home/home.component';
import NavigationBar from './Navigation/NavigationBar.component';
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import Checkout from './Routes/checkout/checkout.component';
import { useDispatch } from 'react-redux';


import {useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import {setCurrentUser} from  './store/user/user.action'




function App() {
    
  const dispatch = useDispatch(); 

  useEffect(()=>{
    const  unsubscribe =  onAuthStateChangedListener((user)=>{
        if (user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    })
    return unsubscribe;
    }, [dispatch]);

  return (
    <Routes>
    <Route path='/' element = {<NavigationBar/>}>
       <Route index element= {<Home />} />
       <Route path='shop/*' element= {<Shop />} />
       <Route path='auth' element= {<Authentication />} />
       <Route path='checkout' element= {<Checkout />} />
    </Route>
    </Routes>
  );
}

export default App;
