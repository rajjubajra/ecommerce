import {useEffect, useState} from 'react';
import Client from 'shopify-buy';


function Item({productId, setProductId}) {

  const [product, setProduct] = useState('');

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

  

  useEffect(()=>{
    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
      domain: 'yw-t-shirt.myshopify.com',
      storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0'
    });

    // Fetch a single product by ID
    //const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';
    client.product.fetch(productId).then((product) => {
      // Do something with the product
      console.log("SINGLE PRODUCT",product);
      setProduct(product);
    });

    
  },[productId])



  return (
    <div className="w-1/2 m-auto flex justify-center">

      <div onClick={()=>setProductId('')}>Close</div>
    
      <h1>{product.title}</h1>
      <div>
        {LoadImage(product.image)}
      </div>
      <div>
        {LoadVariants(product.variants)}
      </div>
    </div>
  )
}

export default Item;