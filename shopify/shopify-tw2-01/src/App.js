import {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import {useDispatch, useSelector} from 'react-redux';
import {actionFetchCheckout} from './redux/action';
import Cart from './components/Cart';


function App() {

  const dispatch = useDispatch();

  const [checkoutId, setCheckoutId] = useState('');

  console.log(checkoutId);

  useEffect(()=>{
      setCheckoutId(localStorage.getItem("checkout"))
  },[])

  //const checkoutId = useSelector( state => state.reducerCreateCheckout.checkout_id );
  const checkoutdata = useSelector(state => state.reducerCreateCheckout.data);

  useEffect(()=>{
    checkoutId && dispatch(actionFetchCheckout(checkoutId));
  },[dispatch, checkoutId])

  return (
    <div>
      <Cart />
      <BrowserRouter>
      Shopify shop 
      <div>
        <Link to="/">Products List</Link>
      </div>
      <div>
      <div>
          <div 
            className="cursor-pointer py-2 px-4 my-5 border-gray-500"
            onClick={() => window.open(checkoutdata.webUrl, '_blank')} >
              Checkout
          </div>
        </div>
      </div>

        <Switch>
          <Route exact path="/" >
          <Products />
          </Route>
          <Route path="/item/:id" >
            <Product />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App