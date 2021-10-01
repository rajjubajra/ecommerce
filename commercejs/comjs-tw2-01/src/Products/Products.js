import React, {useState, useEffect} from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import Cart from '../Components/Cart';
import { commerce } from '../lib/commerce';



function Products() {


  const [ products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

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

  async function fetchCart(){
    commerce.cart.retrive().then((cart)=>{
      setCartItems({cart});
    }).catch((error)=>{
      console.error('There was an error fetching cart',error);
    })
  }


  useEffect(()=>{
      fetchProducts();
      fetchCart();
  },[])

  console.log(products);
  console.log(products.length);
  console.log(products);
  console.log("cart",cart);

  const passIndex = (index) => {
    setViewIndex(index);
    setViewDetail(true);
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item)=>{
      setCartItems({cart: item.cart})
    }).catch((err) => {console.log("There was an error adding the item to the cart", err)});
  }


  return (
    <div className="flex flex-row flex-wrap">
      {
        products.length > 0 && !viewDetail ? 
        products.map((item,index) => {
          const {image:{url:image, image_dimensions:{width, height}}} = item;
          const {id,name,price:{formatted_with_symbol:rate}} = item;
          
          return <div key={id}>
                  <Item 
                  id={id}
                  image={image} 
                  price={rate} 
                  name={name}
                  width={width}
                  height={height}
                  index={index}
                  passIndex={passIndex}
                  handleAddToCart={handleAddToCart}
                  />
              </div>
        })
        : "loading...."
      }
      { viewDetail && <ItemDetails />
      }
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default Products