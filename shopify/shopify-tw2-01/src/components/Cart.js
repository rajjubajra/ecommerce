import Loading from './Loading';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';
import {actionUpdateCart} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';




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
        const {variant:{image:{src, altText},title:description, id:pid, priceV2:{currencyCode},price:rate}} = item;
        const {id:itemId, title, quantity,variableValues:{id:checkoutId}} = item;

        return <div className="grid grid-cols-12 my-2">
            
            {/** IMAGE DIV */}
            <div className="col-span-3">
                <img  className="w-56 mt-1 px-2" 
                      src={src}  
                      alt={altText} />
            </div>

            {/** DESCRIPTION DIV */}
            <div className="col-span-9">
              <div>
                <div className={`cursor-pointer relative w-full`}>
                  <div className="w-4 text-right" 
                  title="Remove"
                  onClick={ () => removeItemFromCheckout(checkoutId, itemId)}>
                    <TiDeleteOutline />
                  </div>
                </div>

                <h3 className="text-xl">{title}</h3>
                
                <div className="grid grid-flow-row w-full text-xs">
                  <div>Description: {description}</div>
                  <div className="grid grid-cols-2">
                    <div>Quantity: {quantity} </div>
                    <div className="flex flex-row">
                        <div
                        className="cursor-pointer p-1 border border-gray-200 mx-1" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId,itemId, 1))} >
                        <GrFormAdd />
                        </div>
                        { quantity > 1 ?
                        <div 
                        className="cursor-pointer p-1 border border-gray-200 mx-1" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, itemId, -1))} >
                        <BiMinus />
                        </div>
                        : <div 
                        className="cursor-pointer p-1 border border-gray-200 mx-1" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, itemId, -1))} >
                        <BiMinus />
                        </div>
                        }
                    </div>
                  </div>
                    
                  <div>Rate: {currencyCode}: {rate}</div>
                  <div>Amount: {currencyCode} : {(rate * quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>

          </div>
      })
    }
      <div 
      className="p-2 bg-gray-100 cursor-pointer text-center m-2" 
      onClick={() => window.open(checkout.webUrl, '_blank')}>
      Checkout
      </div>
    </div>
    )
}

export default Cart