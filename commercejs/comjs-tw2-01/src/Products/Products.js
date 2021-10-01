import React, {useState, useEffect} from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import { commerce } from '../lib/commerce';



function Products() {


  const [ products, setProducts] = useState([]);

  const [viewIndex, setViewIndex] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
    async function fetchProducts(){
      await commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }


  useEffect(()=>{
      fetchProducts();
  },[])

  console.log(products);
  console.log(products.length);
  console.log(products);
  //console.log(ndata.products.products);

  const passIndex = (index) => {
    setViewIndex(index);
    setViewDetail(true);
  }

  return (
    <div className="flex flex-row flex-wrap">
      {
        products.length > 0 && !viewDetail ? 
        products.map((item,index) => {
          const {image:{url:image, image_dimensions:{width, height}}} = item;
          const {name,price:{formatted_with_symbol:rate}} = item;
          const {checkout_url:{checkout, display}} = item;
          return <div key={item.id}>
                  <Item 
                  image={image} 
                  price={rate} 
                  name={name}
                  width={width}
                  height={height}
                  index={index}
                  passIndex={passIndex}
                  checkout={checkout}
                  />
              </div>
        })
        : "loading...."
      }
      { viewDetail && <ItemDetails />
      }
    </div>
  )
}

export default Products