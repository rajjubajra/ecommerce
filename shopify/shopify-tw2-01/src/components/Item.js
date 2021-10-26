import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from './Loading';
import {actionAddToCart, actionFetchSingleProduct} from '../redux/action';
import {useParams, Link} from 'react-router-dom';



function Item() {

  const {id} = useParams();

  const dispatch = useDispatch();

  const product = useSelector(state => state.reducerFetchProduct.a_product_data);
  const product_fetched = useSelector(state => state.reducerFetchProduct.a_product_fetched);

  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutItem, setCheckoutItem] = useState('');

  useEffect(()=>{
    setCheckoutId(localStorage.getItem("checkout"))
  },[])

  const checkout = useSelector(state => state.reducerCreateCheckout);

  useEffect(()=>{
      checkout && checkout.length > 0 && setCheckoutItem();
  },[checkout]);
  
  console.log("ITEM",checkout);
  console.log("ITEM",checkoutItem);

  useEffect(()=>{
      dispatch(actionFetchSingleProduct(id));
  },[dispatch, id])


  

  const LoadImage = (image) => {
    return image.map((item)=> {
      return <div>
        <img className="w-full p-2" src={item.src} alt="product item" />
        </div>
    })
  }

  console.log(product);

  const LoadVariants = (data) => {
    return data.map(item => {
      const {available, sku, title, price } = item;
      return available && <div className="flex flex-col p-2 bg-gray-100 m-1">
        <div>{title}</div>
        <div> Price: {price}</div>
        <div> SKU: {sku}</div>
      </div>
    })
  }

  if(!product_fetched) return <Loading />
  return (
    <div className="max-w-screen-xl">

      <div className="p-2 m-2 w-20 cursor-pointer">
        <div><Link to="/">Close</Link> </div>
      </div>

    {
      product &&
      <div className="grid md:grid-cols-12 gap-2 py-4 my-2">
        <div className="col-span-8">
          <div className="grid md:grid-cols-2 grid-flow-row gap-2">
            {LoadImage(product.images)}
          </div>
        </div>
        
        <div className="col-span-4">
            <h1 className="text-2xl my-2">{product.title}</h1>
            <div>
              {LoadVariants(product.variants)}
            </div>
            <div>
              <div 
                onClick={() => dispatch(actionAddToCart(checkoutId, product.variants[0].id, 1))}
                className="cursor-pointer p-2 m-2" >
                Add to Cart
              </div>
            </div>
        </div>
      </div>
    }
    </div>
  )
}

export default Item;