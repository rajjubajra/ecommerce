import {useState} from 'react';
import ShopProvider from './context/shopContext';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';

function Products() {

  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  console.log(productId);

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
