import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function CartQty() {

  const [bag, setBag] = useState(0);

  const quantity = useSelector(state => state.reducerFetchCheckout.checkout_data);

  console.log("Quantity : ",quantity);
  useEffect(()=>{
    quantity && quantity.length !== 0 && setBag(quantity.lineItems.length);
  },[quantity])

  return (
    <div>
      <Link to="/cart" className="cursor-pointer">Bag Items: {bag}</Link>
    </div>
  )
}

export default CartQty
