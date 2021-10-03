import {useState, useEffect} from 'react';
import Client from 'shopify-buy';


function Products() {

  const [productState, setProductState] = useState([]);

  useEffect(()=>{
    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
      domain: 'yw-t-shirt.myshopify.com',
      storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0'
    });

    // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
      setProductState(products);
    });

    // Fetch all collections, including their products
      client.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
        console.log(collections);
        console.log(collections[0].products);
      });
  },[])

  
  console.log("Product State", productState);

  return (
    <div>
      
    </div>
  )
}

export default Products