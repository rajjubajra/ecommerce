import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Product from './Product';


function App() {

  
 
  return (
    <div>
      shopify shop <Link to="/">Products List</Link>
      <BrowserRouter>
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