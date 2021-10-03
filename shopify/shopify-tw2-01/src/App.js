import {useState, useEffect} from 'react';
import Client from 'shopify-buy';

function App() {




  useEffect(()=>{
    // Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'yw-t-shirt.myshopify.com',
  storefrontAccessToken: '182c7505e65d013f21c7fd8a1015ef27'
});

    // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
    });


  },[])


  return (
    <div>
      shopify shop
    </div>
  )
}

export default App
