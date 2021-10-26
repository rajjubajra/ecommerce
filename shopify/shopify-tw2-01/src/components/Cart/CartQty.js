import {useSelector} from 'react-redux';


function CartQty() {

  const quantity = useSelector(state => state.reducerFetchCheckout.checkout_data.lineItems.length);

  console.log("Quantity : ",quantity);

  return (
    <div>
      Bag Items: {quantity}
    </div>
  )
}

export default CartQty
