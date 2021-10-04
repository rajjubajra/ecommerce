import {useState, useEffect} from 'react';
import Client from 'shopify-buy';


function Cart({checkoutId, lineItemsToAdd}) {


  const createCheckout = async() => {
    const checkout = await client.checkout.create();
  }


  useEffect(()=>{
    /** create checkout */
    /** check if localstorage has checkout_id saved */
    if(localStorage.ywshopify_checkout_id){
      fetchCheckout(localStorage.ywshopify_checkout_id)
    }else{
      createCheckout();
    }
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Cart