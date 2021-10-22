import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Product from './Product';


function App() {

  
 
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