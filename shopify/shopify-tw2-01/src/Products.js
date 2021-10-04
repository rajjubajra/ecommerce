import {useState} from 'react';
import ShopProvider from './context/shopContext';
import Items from './components/Items';

function Products() {

  const [productId, setProductId] = useState('');

  console.log(productId);

  return (
    <div>
    <ShopProvider>
      <Items setProductId={setProductId} />
    </ShopProvider>  
    </div>
  )
}

export default Products
