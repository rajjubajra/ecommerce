import React from 'react'


function SizeStandard() {

  /** style for Size Components */
  const style = "w-8 py-1 mr-1 mt-1 text-sm border border-gray-200 text-center";
  
  return (
    <>
    <h3 className="text-sm uppercase tracking-wider">Standard</h3>
    <div className="flex flex-row flex-wrap">
      <div className={style}>S</div>
      <div className={style}>M</div>
      <div className={style}>L</div>
      <div className={style}>XL</div>
      <div className={style}>2XL</div>
      <div className={style}>3XL</div>
      <div className={style}>4XL</div>
    </div>
    </>
  )
}

export default SizeStandard
