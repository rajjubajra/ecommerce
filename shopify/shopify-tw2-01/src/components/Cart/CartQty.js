import {useSelector} from 'react-redux';


function CartQty() {

  const quantity = useSelector(state => state.reducerFetchCheckout);

  console.log("Quantity : ",quantity);

  return (
    <div>
      cart summary
    </div>
  )
}

export default CartQty
