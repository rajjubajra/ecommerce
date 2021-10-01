import Products from './Products/Products';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <div>
      <h1>Comerce Js</h1>
      <BrowserRouter>
        <Switch>
          <Products />  
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
