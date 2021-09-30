import {useEffect, useState} from 'react'
import Client from 'shopify-buy';


function Home() {


  useEffect(()=>{

       // Initializing a client to return content in the store's primary language
        const client = Client.buildClient({
          domain: 'yw-t-shirt.myshopify.com',
          storefrontAccessToken: 'e8ab66a219c55d65e78772ab05429e6d-1632907679'
        });

        // Fetch all products in your shop
        client.product.fetchAll().then((products) => {
          // Do something with the products
          console.log(products);
        });
  },[])


    


  return (
    <div>
      Home page
    </div>
  )
}

export default Home
