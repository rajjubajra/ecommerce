import {useEffect, useState} from 'react';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';
import {actionFetchAllProduct} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

function Products() {

  const dispatch = useDispatch();

  const product = useSelector(state => state.reducerFetchAllProducts);

  console.log(product);

  const [productId, setProductId] = useState('');

  useEffect(()=>{
    dispatch(actionFetchAllProduct());
  },[dispatch])

  return (
    <div>
      <h1>Shopify : REDUX </h1>
    </div>
  )
}

export default Products