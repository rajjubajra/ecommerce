import {useSelector} from 'react-redux';


function CartQty() {

  const quantity = useSelector(state => state.reducerFetchCheckout.checkout_data);

  console.log("Quantity : ",quantity);

  return (
    <div>
      Bag Items: 
    </div>
  )
}

export default CartQty
