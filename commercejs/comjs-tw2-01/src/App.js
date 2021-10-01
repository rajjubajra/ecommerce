import Products from './Products/Products';
import {BrowserRouter, Switch, Link} from 'react-router-dom';


function App() {

  return (
    <div>
      <h1>Comerce Js</h1>
      <BrowserRouter>
        <Link to="/">Shop</Link>
        <Switch>
          <Products />  
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
