import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';


function App() {

  const [products, setProducts] = useState([]);



  /**
   * Fetch products data from Chec and stores in the products data object.
  * https://commercejs.com/docs/sdk/products
  */
  function fetchProducts(){
    commerce.products.list().then((products) => {
      setProducts({ products: products.data });
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }



  useEffect(()=>{

        fetchProducts();

  },[])

  console.log(products);


  return (
    <div>
      A T shirt store - commerce js
    </div>
  )
}

export default App
