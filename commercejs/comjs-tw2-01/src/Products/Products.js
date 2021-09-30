import React, {useState, useEffect} from 'react';
import Item from './Item';
import { commerce } from '../lib/commerce';


const items = [
  {
    "id": "1",
    "name": "Product one",
  },
  {
    "id": "2",
    "name": "Product Two",
  }
]



function Products() {


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
      <p>Product page</p>
      {
        items.length > 0 && 
        items.map((prd) => {
          return <div>
            <p>{prd.id} : {prd.name}</p>
          </div>
        })


      }
    </div>
  )
}

export default Products
