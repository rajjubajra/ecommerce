import React from 'react';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';
import {actionUpdateCart} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

function CartItem({image, alt, checkoutId, itemId, title, description, qty, pid, currency, rate, amount}) {

  const dispatch = useDispatch();

  const removeItemFromCheckout = () => ("test");

  return (
    <div className="grid grid-cols-12 my-2">
             {/** IMAGE DIV */}
            <div className="col-span-3">
                <img  className="w-56 mt-1" 
                      src={image}  
                      alt={alt} />
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
                    <div>Quantity: {qty} </div>
                    <div className="flex flex-row">
                        <div
                        className="cursor-pointer px-2" 
                        onClick={() => dispatch(actionUpdateCart(checkoutId, pid, 1))} >
                        <GrFormAdd />
                        </div>
                        { qty > 1 ?
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
                    
                  <div>Rate: {currency} {rate}</div>
                  <div>Amount: {currency} {amount.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CartItem
