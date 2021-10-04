import {useState} from 'react';
import Items from './components/Items';

function Products() {

  const [productId, setProductId] = useState('');

  console.log(productId);

  return (
    <div>

      <Items setProductId={setProductId} />
      
    </div>
  )
}

export default Products
