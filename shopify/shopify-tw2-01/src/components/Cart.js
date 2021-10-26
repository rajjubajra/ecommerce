import {useEffect, useState} from 'react';
import Loading from './Loading';
import {TiDeleteOutline} from 'react-icons/ti';
import {GrFormAdd} from 'react-icons/gr';
import {BiMinus} from 'react-icons/bi';
import {useSelector, useDispatch} from 'react-redux';



function Cart() {

const checkout = useSelector(state => state.reducerFetchCheckout.checkout_data);

console.log("CART",checkout);
console.log("cart items", checkout.lineItems);


    return (
      <div className="w-full flex flex-col p-4 my-3 border-2 border-gray-300">
        ORDER BOX
      </div>
    )
}

export default Cart