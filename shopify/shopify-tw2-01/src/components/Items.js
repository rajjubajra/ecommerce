import React from 'react'

function Items({productState, setProductId}) {

  const LoadImage = (image) => {
    return image.map((item)=>{
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


  return (
    <div>
      {
        productState.map((item)=>{
          const {id,title, descriptionHtml, images, variants} = item;
          return <div 
          onClick={() => setProductId(id)}
          className="border border-gray-300 p-3 m-3">
            <h3>{title}</h3>
            <div>{descriptionHtml}</div>
            <div>{LoadImage(images)}</div>
            <div>{LoadVariants(variants)}</div>
          </div>
        })
      }
      
    </div>
  )
}

export default Items
