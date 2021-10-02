import {useState, useEffect} from 'react';
import { commerce } from '../lib/commerce';
import CheckoutForm from './CheckoutForm';


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
    <div className="w-full max-w-screen-xl m-auto">
      <div className="md:w-1/2 m-auto">
        <h1>Checkout Page</h1>
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <div className="before:block before:content-['1'] before:bg-gray-500">
            Customer Information
          </div>
        </div>
        <div>
          <div className="before:block before:content-['2'] before:bg-gray-500">
            Shipping Address
          </div>  
        </div>
        <div>
          <div className="before:block before:content-['3'] before:bg-gray-500">
            Payment Details
          </div>
        </div>
      </div>
      
      <CheckoutForm />
    </div>
  )
}

export default Checkout
