import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';


function Cart() {



const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

console.log(checkout);
console.log(checkout && checkout === !undefined && checkout.lineItems);

const [lineItems, setLineItems] = useState([]);

useEffect(()=>{
  checkout && checkout !== undefined && setLineItems(checkout.lineItems);
},[checkout])

  console.log("Line items", lineItems !== undefined && lineItems.length );

    lineItems !== undefined 
    && lineItems.length < 1 
    && <Loading />
    return (
      <div className="w-full flex flex-col p-2 my-3">
        <h2 className="text-xl">Cart</h2>
        {lineItems !== undefined && lineItems.length > 0 
        ? lineItems.map((item)=> {

          const {variant:{price: rate}, quantity: qty, title} = item;

        return <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="flex flex-row">
                <div>
                <img
                  className="w-40" 
                  src={item.variant.image.src}  
                  alt={item.variant.image.altText} />
                </div>
                <div className="grid grid-flow-row gap-2 w-full">
                  <p>Description: {item.variant.title}</p>
                  <p>Quantity: {qty}</p>
                  <p>Rate: {rate}</p>
                  <p>Amount: {(rate * qty).toFixed(2)}</p>
                </div>
            </div>
            
          </div>
        })
        : <div className="text-xl p-2">Cart is empty</div> 
        }
      </div>
    )
}

export default Cart