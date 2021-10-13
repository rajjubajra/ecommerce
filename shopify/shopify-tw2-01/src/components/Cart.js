import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';


function Cart() {



const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

console.log(checkout);
console.log(checkout && checkout === !undefined && checkout.lineItems);

const [lineItems, setLineItems] = useState([]);
const [checkoutData, setCheckoutData] = useState('');
const [totalAmount, setTotalAmount] = useState(0);
const [currency, setCurrency] = useState('');

useEffect(()=>{
  checkout && checkout !== undefined && setLineItems(checkout.lineItems);
  checkout && checkout !== undefined && setCheckoutData(checkout);
  checkout && checkout !== undefined && setTotalAmount(checkout.totalPriceV2);
},[checkout])


console.log("Line items", lineItems !== undefined && lineItems.length );
console.log("checkoutData", checkout !== undefined && checkoutData);
console.log("checkoutData", checkout !== undefined && totalAmount);


    lineItems !== undefined 
    && lineItems.length < 1 
    && <Loading />
    return (
      <div className="w-full flex flex-col p-2 my-3">
        <h2 className="text-xl">Cart</h2>
        {lineItems !== undefined && lineItems.length > 0 
        ? lineItems.map((item)=> {

          const {variant:{price: rate}, quantity: qty, title} = item;
          const amt = rate * qty;

          
        return <div className="flex flex-col">
            <h3 className="text-xl py-1 mb-1">{title}</h3>
            <div className="flex flex-row flex-wrap">
                <div>
                <img
                  className="md:w-1/2 w-full mt-1" 
                  src={item.variant.image.src}  
                  alt={item.variant.image.altText} />
                </div>
                <div className="grid grid-flow-row gap-2 w-full">
                  <p>Description: {item.variant.title}</p>
                  <p>Quantity: {qty}</p>
                  <p>Rate:{currency} {rate}</p>
                  <p>Amount:{currency} {amt.toFixed(2)}</p>

                </div>
            </div>
          </div>
        })
        : <div className="text-xl p-2">Cart is empty</div> 
        }
        <div>Total Amount:{checkout !== undefined && totalAmount.amount}</div>
      </div>
    )
}

export default Cart