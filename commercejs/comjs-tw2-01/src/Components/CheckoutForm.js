import React from 'react'

function CheckoutForm({firstName, lastName, email, shippingName, shippingStreet, shippingCity, shippingPostCode, cardNum, expMonth, expYear, ccv}) {
  return (
    <form className="grid grid-cols-2 grid-flow-row font-extralight text-sm">

      <div className="col-span-2 border border-b border-gray-400">
        <h4 className="col-span-2">Customer information</h4>
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="firstName">First name</label>
        <input className="outline-none  border border-gray-200" type="text" value={firstName} name="firstName" placeholder="Enter your first name" required />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="lastName">Last name</label>
        <input className="outline-none  border border-gray-200" type="text" value={lastName}name="lastName" placeholder="Enter your last name" required />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="email">Email</label>
        <input className="checkout__input" type="text" value={email} name="email" placeholder="Enter your email" required />
      </div>
      
      <div className="col-span-2 border border-b border-gray-400">
        <h4 className="checkout__subheading">Shipping details</h4>
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="shippingName">Full name</label>
        <input className="checkout__input" type="text" value={shippingName} name="shippingName" placeholder="Enter your shipping full name" required />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
        <input className="checkout__input" type="text" value={shippingStreet} name="shippingStreet" placeholder="Enter your street address" required />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="shippingCity">City</label>
        <input className="checkout__input" type="text" value={shippingCity} name="shippingCity" placeholder="Enter your city" required />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
        <input className="checkout__input" type="text" value={shippingPostCode} name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />
      </div>
      
      <div className="col-span-2 border border-b border-gray-400">
        <h4 className="checkout__subheading">Payment information</h4>
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="cardNum">Credit card number</label>
        <input className="checkout__input" type="text" name="cardNum" value={cardNum} placeholder="Enter your card number" />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="expMonth">Expiry month</label>
        <input className="checkout__input" type="text" name="expMonth" value={expMonth} placeholder="Card expiry month" />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="expYear">Expiry year</label>
        <input className="checkout__input" type="text" name="expYear" value={expYear} placeholder="Card expiry year" />
      </div>
      
      <div>
        <label className="checkout__label" htmlFor="ccv">CCV</label>
        <input className="checkout__input" type="text" name="ccv" value={ccv} placeholder="CCV (3 digits)" />
      </div>

      <div className="col-span-2 border border-b border-gray-400">
        <button className="checkout__btn-confirm">Confirm order</button>
      </div>

    </form>
  )
}

export default CheckoutForm
