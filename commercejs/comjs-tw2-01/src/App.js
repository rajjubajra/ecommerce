import Products from './Products/Products';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {



  return (
    <div>
      <h1>Comerce Js</h1>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Products />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
