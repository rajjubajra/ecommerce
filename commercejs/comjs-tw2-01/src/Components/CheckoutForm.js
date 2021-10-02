import React, {useState, useEffect} from 'react'


/**
 * 
 * @returns {firstName, lastName, email, shippingName, shippingStreet, shippingCity, shippingPostCode, cardNum, expMonth, expYear, ccv}
 */

function CheckoutForm() {
  
  const [customerInfo, setCustomerInfo] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(false);
  const [paymentDetail, setPaymentDetail] = useState(false);


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [shippingName, setShippingName] = useState('');
  const [shippingStreet, setShippingStreet] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingPostCode, setShippingPostCode] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [ccv, setCcv] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if(firstname, lastname, email){
      setCustomerInfo(true);
    }

  } 

  
  console.log("firstname", firstname);
  
  return (
    <form 
    onSubmit={handleSubmit}
    className="w-full m-auto grid grid-cols-2 grid-flow-row font-extralight text-sm">

    {
      !customerInfo &&
      <>
          <div className="col-span-2 border border-gray-400">
            <h4>Customer information</h4>
          </div>
          
          <div className="flex flex-col col-span-2">
            <label htmlFor="firstName">First name</label>
            <input 
            className="outline-none  border border-gray-200" 
            type="text" 
            onChange={(e)=>setFirstname(e.target.value)}
            value={firstname} 
            name="firstName" 
            placeholder="Enter your first name" 
            required />
          </div>
          
          <div className="flex flex-col col-span-2">
            <label htmlFor="lastName">Last name</label>
            <input 
            className="outline-none  border border-gray-200" 
            type="text" 
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            name="lastName" 
            placeholder="Enter your last name" 
            required />
          </div>
          
          <div className="flex flex-col col-span-2">
            <label htmlFor="email">Email</label>
            <input  
            className="outline-none  border border-gray-200" 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            name="email"
            placeholder="Enter your email" 
            required />
          </div>
        </>
    }
    
    {
      customerInfo && !shippingAddress &&
      <>
      <div className="col-span-2 border-t border-b border-gray-400">
        <h4>Shipping details</h4>
      </div>
      
      <div className="flex flex-col col-span-2">
        <label htmlFor="shippingName">Full name</label>
        <input  className="outline-none  border border-gray-200" type="text" value={shippingName} name="shippingName" placeholder="Enter your shipping full name" required />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label htmlFor="shippingStreet">Street address</label>
        <input  className="outline-none  border border-gray-200" type="text" value={shippingStreet} name="shippingStreet" placeholder="Enter your street address" required />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label  htmlFor="shippingCity">City</label>
        <input  className="outline-none  border border-gray-200" type="text" value={shippingCity} name="shippingCity" placeholder="Enter your city" required />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label htmlFor="shippingPostalZipCode">Postal/Zip code</label>
        <input  className="outline-none  border border-gray-200" type="text" value={shippingPostCode} name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />
      </div>
      </>
    }
    
    {
      customerInfo && shippingAddress && !paymentDetail &&
      <>
      <div className="col-span-2 border-t border-b border-gray-400">
        <h4 className="checkout__subheading">Payment information</h4>
      </div>
      
      <div className="flex flex-col col-span-2">
        <label  htmlFor="cardNum">Credit card number</label>
        <input  className="outline-none  border border-gray-200" type="text" name="cardNum" value={cardNum} placeholder="Enter your card number" />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label  htmlFor="expMonth">Expiry month</label>
        <input  className="outline-none  border border-gray-200" type="text" name="expMonth" value={expMonth} placeholder="Card expiry month" />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label  htmlFor="expYear">Expiry year</label>
        <input  className="outline-none  border border-gray-200" type="text" name="expYear" value={expYear} placeholder="Card expiry year" />
      </div>
      
      <div className="flex flex-col col-span-2">
        <label  htmlFor="ccv">CCV</label>
        <input  className="outline-none  border border-gray-200" type="text" name="ccv" value={ccv} placeholder="CCV (3 digits)" />
      </div>
      </>
    }
      

      <div className="col-span-2">
        <button className="py-2  px-3 my-2 border border-gray-400">Confirm order</button>
      </div>

    </form>
  )
}

export default CheckoutForm