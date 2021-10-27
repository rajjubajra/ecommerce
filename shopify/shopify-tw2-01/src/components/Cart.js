import Loading from './Loading';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';
import {actionUpdateCart} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';




function Cart() {

const dispatch = useDispatch();
const checkout = useSelector(state => state.reducerFetchCheckout.checkout_data);

const removeItemFromCheckout = () => ("test");


console.log("CART",checkout);
console.log("cart items", checkout.lineItems);

    checkout.lineItems === undefined 
    && checkout.length === 0 
    && <Loading />
    return (
      <div>
        {
      checkout.lineItems !== undefined && checkout.lineItems.map(item => {
        const {variant:{image:{src, altText},title:description, id:pid, priceV2:{currencyCode, amount},price:rate}} = item;
        const {id:itemId, title, quantity,variableValues:{id:checkoutId}} = item;

        return <div className="grid grid-cols-12 my-2">
             {/** IMAGE DIV */}
            <div className="col-span-3">
                <img  className="w-56 mt-1" 
                      src={src}  
                      alt={altText} />
            </div>

            {/** DESCRIPTION DIV */}
            <div className="col-span-9">
              <div>
              <div className={`cursor-pointer relative w-full text-right`}>
                  <div className="w-4" 
                  title="Remove"
                  onClick={ () => removeItemFromCheckout(checkoutId, itemId)}>
                    <TiDeleteOutline />
                  </div>
                </div>

                <h3 className="text-xl mb-1">{title}</h3>
                
                
                <div className="grid grid-flow-row w-full text-sm">
                  <div>Description: {description}</div>
                  <div className="grid grid-cols-2">
                    <div>Quantity: {quantity} </div>
                    <div className="flex flex-row">
                        <div
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, pid, 1))} >
                        <GrFormAdd />
                        </div>
                        { quantity > 1 ?
                        <div 
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, pid, -1))} >
                        <BiMinus />
                        </div>
                        : <div 
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, pid, -1))} >
                        <BiMinus />
                        </div>
                        }
                    </div>
                  </div>
                    
                  <div>Rate: {currencyCode} {rate}</div>
                  <div>Amount: {currencyCode} {amount.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
      })
        }
    </div>
    )
}

export default Cart