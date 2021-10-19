import {useEffect, useState} from 'react';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';
import {actionFetchAllProduct} from './redux/action';
import {useDispatch} from 'react-redux';

function Products() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionFetchAllProduct());
  },[dispatch])

  return (
    <div>
      <h1>Shopify : REDUX </h1>
      <div>
        <Items />
      </div>
      <div>
      
      </div>
      

    </div>
  )
}

export default Products