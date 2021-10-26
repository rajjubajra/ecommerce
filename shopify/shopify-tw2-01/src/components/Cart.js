import Loading from './Loading';
import {useSelector} from 'react-redux';



function Cart() {

const checkout = useSelector(state => state.reducerFetchCheckout.checkout_data);

console.log("CART",checkout);
console.log("cart items", checkout.lineItems);

    checkout.lineItems === undefined 
    && checkout.length === 0 
    && <Loading />
    return (
      checkout.lineItems !== undefined && checkout.lineItems.map(item => {
        const {variant:{image:{src, altText},title:description, id:pid, priceV2:{currencyCode, amount},price:rate}} = item;
        const {id:itemId, title, quantity,variableValues:{id:checkoutId}} = item;

        return <cartItems
          image={src}
          alt={altText}
          checkoutId={checkoutId} 
          itemId={itemId} 
          title={title}
          description={description} 
          qty={quantity}
          pid={pid}
          currency={currencyCode}
          rate={rate} 
          amount={amount}
        />

      })
    )
}

export default Cart