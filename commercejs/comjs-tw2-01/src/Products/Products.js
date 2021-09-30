import React, {useState, useEffect} from 'react';
import Item from './Item';
import { commerce } from '../lib/commerce';



function Products() {


  const [ ndata, setNdata] = useState([]);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
    async function fetchProducts(){
      await commerce.products.list().then((products) => {
      setNdata({products:products.data});
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }


  useEffect(()=>{
      fetchProducts();
  },[])

  console.log(ndata);
  console.log(ndata.length);
  console.log(ndata.products.length);
  //console.log(ndata.products.products);

  return (
    <div>
      <p>Product page</p>
      {
        ndata.products.length > 0 ? 
        ndata.products.map((item) => {
          const {image:{url:image, image_dimensions:{width, height}}} = item;
          const {name,price:{formated_with_symbol:rate}} = item;
          return <div>
                  <Item 
                  image={image} 
                  price={rate} 
                  name={name}
                  width={width}
                  height={height}
                  />
              </div>
        })
        : "loading...."
      }
    </div>
  )
}

export default Products
