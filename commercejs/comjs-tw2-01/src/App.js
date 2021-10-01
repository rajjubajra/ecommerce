import Products from './Products/Products';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <div>
      <h1>Comerce Js</h1>
      <BrowserRouter>
        <Products />  
      </BrowserRouter>
    </div>
  )
}

export default App
