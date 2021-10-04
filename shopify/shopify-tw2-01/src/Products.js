import {useState} from 'react';
import ShopProvider from './context/shopContext';
import Items from './components/Items';
import Item from './components/Item';

function Products() {

  const [productId, setProductId] = useState('');

  //console.log(productId);

  return (
    <div>
    <ShopProvider>
      <Items setProductId={setProductId} />
      <Item productId={productId} setProductId={setProductId} />
    </ShopProvider>  
    </div>
  )
}

export default Products
