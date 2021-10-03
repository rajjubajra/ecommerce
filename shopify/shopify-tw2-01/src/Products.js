import {useState, useEffect} from 'react';
import Client from 'shopify-buy';


function Products() {

  const [productState, setProductState] = useState([]);

  useEffect(()=>{
    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
      domain: 'yw-t-shirt.myshopify.com',
      storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0'
    });

    // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
      setProductState(products);
    });

    // Fetch all collections, including their products
      client.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
        console.log(collections);
        console.log(collections[0].products);
      });
  },[])


  console.log("Product State", productState);

  const LoadImage = (image) => {
    return image.map((item)=>{
      return <div><img className="w-14 p-1" src={item.src} alt="product item" /></div>
    })
  }

  const LoadVariants = (data) => {
    return data.map(item => {
      const {available, sku, title, price } = item;
      return available && <div className="flex p-2 bg-gray-100 m-1">
        <p>{title}</p>
        <p>Price: {price}</p>
        <p>SKU: {sku}</p>
      </div>
    })
  }

  return (
    <div className="w-full md:max-w-screen-xl m-auto">
      <h1 className="text-lg">Proucts</h1>
      {
        productState.length > 0 && 
        productState.map((item)=>{
          const {title, descriptionHtml, images, variants} = item;
          return <div className="border border-gray-300 p-3 m-3">
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

export default Products