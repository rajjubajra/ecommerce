import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Cart({cartItems, handleAddToCart, handleRemoveFromCart, handleEmptyCart}) {

  const [totalItem, setTotalItem] = useState(0);

    useEffect(()=>{
      setTotalItem(cartItems.total_items);
    },[cartItems.total_items])


  console.log("CART-items",cartItems);
  console.log("Total item", cartItems.total_items);
  console.log("TotalItem", totalItem);

  

  
  return (
    <div>
      {totalItem > 0 
      ? <div>
        {
          cartItems.line_items.map((item)=>{
            return <div>
              <div>{item.product_name} | Qty: {item.quantity} | Rate: {item.price.formatted_with_symbol}
                <div onClick={()=> handleAddToCart(item.product_id, -1)}> 
                  - minus item</div>
                <div onClick={()=> handleRemoveFromCart(item.id)}>
                  Remove Item</div>
              </div>
            </div>
          })
        }
        <div>Total Items:{totalItem}</div>
        <div>Sub Total: {cartItems.subtotal.formatted_with_symbol}</div>
        <div><Link to="/checkout">Checkout</Link></div>
        <div onClick={()=>handleEmptyCart()}>Empty Cart</div>
        </div>
      : <div>Cart is empty</div>
      }
    </div>
  )
}

export default Cart
