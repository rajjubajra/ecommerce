import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';


function Cart() {

  const [lineItems, setLineItems] = useState([]);

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

//  console.log(checkout);
//  console.log(checkout && checkout.lineItems);

  useEffect(()=>{
      checkout && !undefined && setLineItems(checkout.lineItems);
  },[checkout])

console.log(!undefined && lineItems);

    lineItems === undefined && <Loading />
    return (
      <div className="w-full flex flex-col">
        <h2 className="text-xl">Cart</h2>
        {lineItems === !undefined && lineItems.map((item)=>{
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
        })}
      </div>
    )
}

export default Cart