import React from 'react';
import Colours from './Colours';
import ImageOnload from './ImageOnload';


function Item({id, image, price, name, width, height, index, passIndex, handleAddToCart}) {
  return (
    <div className="p-5">
      <p>Product Item</p>
      <div className="border border-gray-300 w-80 h-98 p-3">
          <div onClick={() => passIndex(index)}><ImageOnload 
          width={width}
          height={height}
          cssClass="w-80 h-96 object-cover"
          src={image}
          alt="T-Shirt"
        /></div>
        <p className="font-extralight tracking-wide">{name}</p>
        <p className="font-sm">{price}</p>
        <p className="text-xs font-extralight">Availble colours</p>
        <Colours />
      </div>  
      <div onClick={()=> handleAddToCart(id, 1)}>Quick Add</div>
    </div>
  )
}

export default Item
