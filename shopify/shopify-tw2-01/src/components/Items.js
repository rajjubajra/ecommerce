import Loading from './Loading';
import {useSelector, useDispatch} from 'react-redux';
import {actionFetchSingleProduct} from '../redux/action';


function Items() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.reducerFetchAllProducts.product_data);
  const product_fetched = useSelector(state => state.reducerFetchAllProducts.product_fetched)


  console.log("productts ",products);
  
  const LoadImage = (image) => {
    return image.map((item)=>{
      return <div>
        <img className="w-48 p-1" src={item.src} alt="product item" />
      </div>
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

  if(!product_fetched) return <Loading />
  return (
    <div>
      {
        products.map((item)=>{
          const {id,title, descriptionHtml, images, variants} = item;
          return <div 
          onClick={() => dispatch(actionFetchSingleProduct(id))}
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