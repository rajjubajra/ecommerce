import {useEffect, useState} from 'react';
import Client from 'shopify-buy';


function Item({productId}) {

  

  useEffect(()=>{
    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
      domain: 'yw-t-shirt.myshopify.com',
      storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0'
    });

    // Fetch a single product by ID
    //const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';
    client.product.fetch(productId).then((product) => {
      // Do something with the product
      console.log("SINGLE PRODUCT",product);
    });

    
  },[productId])



  return (
    <div>
      PRODUCT ITEM
      
    </div>
  )
}

export default Item;