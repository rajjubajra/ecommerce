import {useState, useEffect} from 'react'

function Cart({cartItems}) {

  const [totalItem, setTotalItem] = useState(0);

  useEffect(()=>{
    setTotalItem(cartItems.total_items);
      
  },[cartItems.total_items])

  
  return (
    <div>
      {totalItem > 0 
      ? <div>Total Items:{totalItem}</div>
      : <div>Cart is empty</div>
      }
    </div>
  )
}

export default Cart
