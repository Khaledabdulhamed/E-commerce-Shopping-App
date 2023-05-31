import { Routes, Route } from 'react-router-dom';
import Home from '../src/Routes/home/home.component';
import NavigationBar from './Navigation/NavigationBar.component';
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import Checkout from './Routes/checkout/checkout.component';








function App() {

  return (
    <Routes>
    <Route path='/' element = {<NavigationBar/>}>
       <Route index element= {<Home />} />
       <Route path='shop' element= {<Shop />} />
       <Route path='auth' element= {<Authentication />} />
       <Route path='checkout' element= {<Checkout />} />
    </Route>
    </Routes>
  );
}

export default App;
