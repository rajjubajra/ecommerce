import {useEffect, useState} from 'react';
import Items from './components/Items';
import Item from './components/Item';
import Cart from './components/Cart';
import {actionFetchAllProduct} from './redux/action';
import {useDispatch} from 'react-redux';
import {actionCreateCheckout} from './redux/action';

function Products() {

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(actionCreateCheckout());
    dispatch(actionFetchAllProduct());
  },[dispatch])

  return (
    <div>
      <Items />
    </div>
  )
}

export default Products