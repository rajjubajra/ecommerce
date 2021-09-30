import React, {useState, useEffect} from 'react';
import Item from './Item';
import { commerce } from '../lib/commerce';



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
        products.length > 0 && 
        products.map((item,index) => {
          const {image:{url:image, image_dimensions:{width, height}}} = item;
          const {name,price:{formated_with_symbol:rate}} = item;
          return <div>
              <div>Name: {name}</div>
              <div>Price: {rate}</div>
                        
              </div>
        })
      }
    </div>
  )
}

export default Products
