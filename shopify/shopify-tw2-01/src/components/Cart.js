import {useContext} from 'react';
import {ShopContext} from '../context/shopContext';


function Cart() {

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

  console.log(checkout);

  if(checkout.lineItems){
    return (
      <div>
        {checkout.lineItems.map((item)=>{
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
}

export default Cart