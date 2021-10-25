import {useEffect, useState} from 'react';
//import {ShopContext} from '../context/shopContext';
import Loading from '../components/Loading';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';
import {useSelector, useDispatch} from 'react-redux';
import {actionUpdateCart} from '../redux/action';



function Cart() {

const dispatch = useDispatch();

//const { checkout, addItemToCheckout, removeItemFromCheckout } = useContext(ShopContext)

const checkout = useSelector(state => state.reducerFetchCheckout.checkout_data);

console.log(checkout);
console.log(checkout && checkout === !undefined && checkout.lineItems);

const [lineItems, setLineItems] = useState([]);
const [totalAmount, setTotalAmount] = useState(0);
const [currency, setCurrency] = useState('');
const [length, setLength] = useState(0);

/** 
 * state checkout line items
 * state total Amount of the Checkout items
*/

useEffect(()=>{
  checkout && checkout !== undefined && setLineItems(checkout.lineItems);
  checkout && checkout !== undefined && setTotalAmount(checkout.totalPriceV2);
},[checkout]);


/** State Currency Code */
useEffect(()=>{
  totalAmount !== undefined && setCurrency(totalAmount.currencyCode);
},[totalAmount])

/** item length */
useEffect(()=>{
  lineItems !== undefined && lineItems.length < 1 && setLength(lineItems.length);
},[lineItems])


// console.log("Line items", lineItems !== undefined && lineItems.length );
// console.log("checkoutData", checkout !== undefined && checkoutData);
// console.log("checkoutData", checkout !== undefined && totalAmount);
// console.log("checkoutData", checkout !== undefined && currency);
//console.log("LENGTH",length);

const removeItemFromCheckout = () => ("test remove"); 

    lineItems !== undefined 
    && lineItems.length < 1 
    && <Loading />
    return (
      <div className="w-full flex flex-col p-4 my-3 border-2 border-gray-300">
        <h2 className="text-xl">Your Bag Items: {length}</h2>
        {lineItems !== undefined && lineItems.length > 0 
        ? lineItems.map((item)=> {
          
          const {variant:{price:rate, id:pid}, quantity: qty, title} = item;
          const amt = rate * qty;
          console.log("product id", pid, "checkoutid", checkout.id);
          
        return <div className="grid grid-cols-12 my-2">
             {/** IMAGE DIV */}
            <div className="col-span-3">
                <img  className="w-56 mt-1" 
                      src={item.variant.image.src}  
                      alt={item.variant.image.altText} />
            </div>

            {/** DESCRIPTION DIV */}
            <div className="col-span-9">
              <div>
              <div className={`cursor-pointer relative w-full text-right`}>
                  <div className="w-4" 
                  title="Remove"
                  onClick={ () => removeItemFromCheckout(checkout.id, item.id)}>
                    <TiDeleteOutline />
                  </div>
                </div>

                <h3 className="text-xl mb-1">{title}</h3>
                
                
                <div className="grid grid-flow-row w-full text-sm">
                  <div>Description: {item.variant.title}</div>
                  <div className="grid grid-cols-2">
                    <div>Quantity: {qty} </div>
                    <div className="flex flex-row">
                        <div
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkout.id, pid, 1))} >
                        <GrFormAdd />
                        </div>
                        { qty > 1 ?
                        <div 
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkout.id, pid, -1))} >
                        <BiMinus />
                        </div>
                        : <div 
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkout.id, pid, -1))} >
                        <BiMinus />
                        </div>
                        }
                    </div>
                  </div>
                    
                  <div>Rate: {currency} {rate}</div>
                  <div>Amount: {currency} {amt.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        })
        : <div>
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