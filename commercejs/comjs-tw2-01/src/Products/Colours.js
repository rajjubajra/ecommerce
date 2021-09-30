import React from 'react'

function Colours() {

  const style = "h-5"

  return (
    <div className="w-72">
    <h3 className="text-sm uppercase tracking-wider">Colours</h3>
    <div className="grid grid-cols-10 gap-2">
          <div className={`${style} bg-gray-500`}></div>
          <div className={`${style} bg-gray-100`}></div>
          <div className={`${style} bg-blue-500`}></div>
          <div className={`${style} bg-blue-300`}></div>
          <div className={`${style} bg-green-500`}></div>
          <div className={`${style} bg-green-300`}></div>
          <div className={`${style} bg-red-500`}></div>
          <div className={`${style} bg-red-300`}></div>
    </div>
    </div>
  )
}

export default Colours
