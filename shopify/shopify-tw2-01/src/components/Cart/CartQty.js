import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';


function CartQty() {

  const [bag, setBag] = useState(0);

  const quantity = useSelector(state => state.reducerFetchCheckout.checkout_data);

  console.log("Quantity : ",quantity);
  useEffect(()=>{
    quantity && setBag(quantity.lineItems.length);
  },[quantity])

  return (
    <div>
      Bag Items: {bag}
    </div>
  )
}

export default CartQty
