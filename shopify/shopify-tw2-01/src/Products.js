import {useState, useContext} from 'react';
import ShopProvider, {ShopContext} from './context/shopContext';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';

function Products() {

  const [productId, setProductId] = useState('');
  const {isCartOpen, closeCart} = useContext(ShopContext);

  //console.log(productId);
  console.log("cart open",isCartOpen);
  console.log("cart close",closeCart)

  return (
    <div>
    <ShopProvider>
      <Items setProductId={setProductId} />
      <Item productId={productId} setProductId={setProductId} />
      <Cart />
    </ShopProvider>  
    </div>
  )
}

export default Products
