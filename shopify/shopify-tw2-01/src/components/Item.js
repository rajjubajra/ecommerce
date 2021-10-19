import {useSelector} from 'react-redux';
import Loading from './Loading';


function Item() {

  const product = useSelector(state => state.reducerFetchProduct);
  const product_fetched = useSelector(state => state.reducerFetchProduct.product_fetched);

  const LoadImage = (image) => {
    return image.map((item)=> {
      return <div><img className="md:w-1/2 w-full p-1" src={item.src} alt="product item" /></div>
    })
  }

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

  if(product_fetched) return <Loading />
  return (
    <div className="w-1/2 m-auto flex flex-col justify-center">
    <div className="p-2 m-2 w-20 cursor-pointer">
      <div> Close </div>
    </div>
    
    {
      product &&
      <div className="flex flex-col py-4 my-2 border border-gray-200">

      <h1 className="text-2xl">{product.title}</h1>
      <div>
        {LoadImage(product.images)}
      </div>
      <div>
        {LoadVariants(product.variants)}
      </div>
      <div>
        <div className="cursor-pointer p-2 m-2" >
        Add to Cart</div>
      </div>
      
      </div>
    }
    </div>
  )
}

export default Item;