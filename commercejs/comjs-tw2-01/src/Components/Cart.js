import {useState, useEffect} from 'react'

function Cart({cartItems}) {


  const [totalItem, setTotalItem] = useState(0);

    useEffect(()=>{
      setTotalItem(cartItems.total_items);
      
    },[cartItems.total_items])


  console.log("CART-items",cartItems);
  console.log("Total item", cartItems.total_items);
  console.log("TotalItem", totalItem);

  const CartList = (cartItems) => {
      cartItems.map((item)=>{
        return <div>
          <div>{item.product_name} | Qty: {item.quantity} | Rate: {item.price.formatted_with_symbol}</div>
        </div>
      })

  }

  
  return (
    <div>
      {totalItem > 0 
      ? <div>
        {CartList(cartItems)}
        <div>Total Items:{totalItem}</div>
        <div>Sub Total: {cartItems.subtotal.formatted_with_symbol}</div>

        </div>
      : <div>Cart is empty</div>
      }
    </div>
  )
}

export default Cart
