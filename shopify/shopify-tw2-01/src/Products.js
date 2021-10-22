import {useEffect, useState} from 'react';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';
import {actionFetchAllProduct} from './redux/action';
import {useDispatch} from 'react-redux';
import {actionCreateCheckoutId} from './redux/action';

function Products() {

  const dispatch = useDispatch();

  

  useEffect(()=>{
    dispatch(actionCreateCheckoutId());
    dispatch(actionFetchAllProduct());
  },[dispatch])

  return (
    <div>
      <Items />
    </div>
  )
}

export default Products