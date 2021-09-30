import React from 'react';
import Colours from './Colours';
import ImageOnload from './ImageOnload';
import {Link} from 'react-router-dom';

function Item({image, price, name, width, height, index, passIndex, checkout}) {
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
      <div><Link to={checkout}>Checkout</Link></div>
    </div>
  )
}

export default Item
