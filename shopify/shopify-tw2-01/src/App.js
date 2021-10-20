import {BrowserRouter, Switch } from 'react-router-dom';
import Products from './Products';


function App() {



  return (
    <div>
      shopify shop
      <BrowserRouter>
        <Switch>
          <Products />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App