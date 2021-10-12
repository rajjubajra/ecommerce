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

  console.log("LIne items",  lineItems.length > 0 && lineItems[0]);

    checkout === !undefined 
    && checkout.lineItems.length < 1 
    && <Loading />
    return (
      <div className="w-full flex flex-col p-2 my-3">
        <h2 className="text-xl">Cart</h2>
        {checkout === !undefined && checkout.lineItems.length > 0 
        ? checkout.lineItems.map((item)=> {
        return <div className="flex flex-col">
            <h3>{item.title}</h3>
            <div>
              <img 
                className="w-40" 
                src={item.variant.image.src}  
                alt={item.variant.image.altText} />
            </div>
            <p>{item.variant.ttitle}</p>
            <p>{item.quantity}</p>
            <p>{item.variant.price}</p>
          </div>
        })
        : <div className="text-xl p-2">Cart is empty</div> 
        }
      </div>
    )
}

export default Cart