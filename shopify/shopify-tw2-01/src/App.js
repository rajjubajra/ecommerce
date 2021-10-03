import Products from "./Products";
import {BrowserRouter, Switch } from 'react-router-dom';



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