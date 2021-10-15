import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';


function Cart() {

const { isCartOpen, closeCart, checkout, addItemToCheckout, removeItemFromCheckout } = useContext(ShopContext)

console.log(checkout);
console.log(checkout && checkout === !undefined && checkout.lineItems);

const [lineItems, setLineItems] = useState([]);
const [totalAmount, setTotalAmount] = useState(0);
const [currency, setCurrency] = useState('');


/** 
 * state checkout line items
 * state total Amount of the Checkout items
*/
useEffect(()=>{
  checkout && checkout !== undefined && setLineItems(checkout.lineItems);
  checkout && checkout !== undefined && setTotalAmount(checkout.totalPriceV2);
},[checkout, lineItems]);


/** State Currency Code */
useEffect(()=>{
  totalAmount !== undefined && setCurrency(totalAmount.currencyCode);
},[totalAmount])


// console.log("Line items", lineItems !== undefined && lineItems.length );
// console.log("checkoutData", checkout !== undefined && checkoutData);
// console.log("checkoutData", checkout !== undefined && totalAmount);
// console.log("checkoutData", checkout !== undefined && currency);


    lineItems !== undefined 
    && lineItems.length < 1 
    && <Loading />
    return (
      <div className="w-full flex flex-col p-4 my-3 border-2 border-gray-300">
        <h2 className="text-xl">Cart</h2>
        {lineItems !== undefined && lineItems.length > 0 
        ? lineItems.map((item)=> {

          const {variant:{price:rate, id:pid}, quantity: qty, title} = item;
          const amt = rate * qty;
          console.log("product id", pid, "checkoutid", checkout.id);
          
        return <div className="flex flex-row flex-wrap">
            <div className="m-10">
              <div>
                <h3 className="text-xl py-1 mb-1">{title}</h3>
                <div className={`cursor-pointer relative`}>
                  <div 
                  title="Remove"
                  onClick={ () => removeItemFromCheckout(checkout.id, item.id)}>
                    <TiDeleteOutline />
                  </div>
                </div>
                <img
                  className="w-56 mt-1 p-2" 

                  src={item.variant.image.src}  
                  alt={item.variant.image.altText} />
                
                <div className="grid grid-flow-row gap-2 w-full">
                  <div>Description: {item.variant.title}</div>
                  <div className="grid grid-col-3 gap-2 my-2">
                    <p>Quantity: {qty} </p>
                    
                    <p 
                    className="cursor-pointer p-2 m-2" 
                    onClick={() => addItemToCheckout(pid, 1)} ><GrFormAdd /></p>
                    
                    { qty > 1 ?
                    <p 
                    className="cursor-pointer p-2 m-2" 
                    onClick={() => addItemToCheckout(pid, -1)} ><BiMinus /></p>
                    : <p 
                    className="cursor-pointer p-2 m-2" 
                    onClick={() => addItemToCheckout(pid, -1)} ><BiMinus /></p>
                    }
                  </div>
                  <div>Rate: {currency} {rate}</div>
                  <div>Amount: {currency} {amt.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        })
        : <div>
          closeCart()
          <div className="text-xl p-2">Cart is empty</div>
          </div> 
        }
        <div class="font-bold mt-2">Total Amount : {currency} {totalAmount !== undefined && totalAmount.amount}</div>
        <div>
          { checkout !== undefined && lineItems !== undefined && lineItems.length > 0
            && <div 
            className="cursor-pointer py-2 px-4 my-5 border-gray-500"
            onClick={() => window.open(checkout.webUrl, '_blank')} >
              Checkout
            </div>
          }
        </div>
      </div>
    )
}

export default Cart