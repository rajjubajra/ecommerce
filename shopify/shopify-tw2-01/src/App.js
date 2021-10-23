import {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import {useDispatch, useSelector} from 'react-redux';
import {actionFetchCheckout} from './redux/action';


function App() {

  const dispatch = useDispatch();

  const chekcoutId = useSelector( state => state.reducerCreateCheckout.checkout_id );

  useEffect(()=>{
      dispatch(actionFetchCheckout(chekcoutId));
  },[dispatch, chekcoutId])
  
  return (
    <div>
      <BrowserRouter>
      Shopify shop <Link to="/">Products List</Link>
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