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

          const {item:{variant:{price}, quantity, title}} = item;

        return <div className="flex flex-col">
            <h3>{title}</h3>
            <div>
              <img 
                className="w-40" 
                src={item.variant.image.src}  
                alt={item.variant.image.altText} />
            </div>
            <div className="flex flex-row flex-wrap w-full">
              <p>Description: {item.variant.title}</p>
              <p>Quantity: {quantity}</p>
              <p>Rate: {price}</p>
              <p>Amount: {price * quantity}</p>
            </div>
          </div>
        })
        : <div className="text-xl p-2">Cart is empty</div> 
        }
      </div>
    )
}

export default Cart