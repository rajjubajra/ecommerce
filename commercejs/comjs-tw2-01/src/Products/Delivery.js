import React from 'react';
import {BsInfoCircle} from 'react-icons/bs';

function Delivery() {
  return (
    <div className="py-1 px-2 my-10 bg-gray-900 text-gray-50 font-extralight track-wider flex justify-between w-full">
      <p>Free standard devivery on order over £50.00</p>
      <p className="mt-1"><BsInfoCircle /></p>
    </div>
  )
}

export default Delivery
