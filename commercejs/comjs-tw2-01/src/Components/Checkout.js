import {useState, useEffect} from 'react';
import { commerce } from '../lib/commerce';


function Checkout({cartItems}) {


  const [token, setToken] = useState({});

  console.log("Checkout Token", token);


  /** GENERATE CHECKOUT TOKEN */
  /**
   *  Generates a checkout token
   *  https://commercejs.com/docs/sdk/checkout#generate-token
   */
  const genrateCheckoutToken = () => {
        
    if(cartItems.total_items > 0){

      commerce.checkout.generateToken(cartItems.id, {type: 'cart'})
      .then((token) => {
        setToken(token);
      }) 
    }

  }

  useEffect(()=>{
    genrateCheckoutToken();
  },[])


  return (
    <div>
      Checkout Page
    </div>
  )
}

export default Checkout
