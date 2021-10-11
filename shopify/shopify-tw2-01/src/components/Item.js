import {useEffect, useState, useContext} from 'react';
import {ShopContext} from '../context/shopContext';
import Loading from './Loading';


function Item({productId, setProductId}) {

  const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)


  useEffect(()=>{
    fetchProductWithId(productId);
  },[fetchProductWithId, productId])

  console.log(product);

  const LoadImage = (image) => {
    return image.map((item)=> {
      return <div><img className="w-48 p-1" src={item.src} alt="product item" /></div>
    })
  }

  const LoadVariants = (data) => {
    return data.map(item => {
      const {available, sku, title, price } = item;
      return available && <div className="flex p-2 bg-gray-100 m-1">
        <p>{title}</p>
        <p> Price: {price}</p>
        <p> SKU: {sku}</p>
      </div>
    })
  }


  if(!product.title) return <Loading />
  return (
    <div className="w-1/2 m-auto flex justify-center">
    <div className="p-2 m-2 w-20 cursor-pointer">
      <div onClick={()=> setProductId('')}> Close </div>
    </div>
      
    {
      product &&
      <>
      <h1>{product.title}</h1>
      <div>
        {LoadImage(product.images)}
      </div>
      <div>
        {LoadVariants(product.variants)}
      </div>
      <div>
        <div className="cursor-pointer p-2 m-2" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
        Add to Cart</div>
      </div>
      
      </>
    }
    </div>
  )
}

export default Item;