import Loading from './Loading';
import {useSelector, useDispatch} from 'react-redux';
import {actionFetchSingleProduct} from '../redux/action';


function Items() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.reducerFetchAllProducts.product_data);
  const product_fetched = useSelector(state => state.reducerFetchAllProducts.product_fetched)


  console.log("productts ",products);
  
  const Image = (image) => (
      <div>
        <img className="w-full" src={image[0].src} alt="product item" />
      </div>
  )

  const Price = (variants) => ( <div>{variants[0].price}</div> );

  // const LoadVariants = (data) => {
  //   return data.map(item => {
  //     const {available, sku, title, price } = item;
  //     return available && <div className="flex p-2 bg-gray-100 m-1">
  //       <p>{title}</p>
  //       <p> Price: {price}</p>
  //       <p> SKU: {sku}</p>
  //     </div>
  //   })
  // }

  if(!product_fetched) return <Loading />
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 md:m-0 m-2">
      {
        products.map((item)=>{
          const {id, title, images, variants} = item;
          return <div 
          onClick={() => dispatch(actionFetchSingleProduct(id))}
          className="w-full border border-gray-300 p-3 md:m-2">
            <div>{Image(images)}</div>
            <div className="font-light mt-2">
              <h3>{title}</h3>
              <div>{Price(variants)}</div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Items