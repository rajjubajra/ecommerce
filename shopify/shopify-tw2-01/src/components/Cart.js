import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';


function Cart() {

  const [lineItems, setLineItems] = useState([]);

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

  console.log(checkout);
  console.log(checkout && checkout.lineItems);

  useEffect(()=>{
      checkout && !undefined && setLineItems(checkout.lineItems);
  },[checkout])

console.log(!undefined && lineItems);

    return (
      <div>
        {lineItems === !undefined && lineItems.map((item)=>{
        return <div>
            <h3>{item.title}</h3>
            <div>
              <img 
                className="w-24" 
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