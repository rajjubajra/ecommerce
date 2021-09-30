import {useState} from 'react'
import {AiOutlineDown, AiOutlineClose} from 'react-icons/ai';

function DetailandCare() {

  const [detail, setDetail] = useState(false);
  const [delivery, setDelivery] = useState(false);

  function handleDetail(){
    setDetail(detail ? false : true);
    setDelivery(false);
  }

  function handleDelivery(){
    setDelivery(delivery ? false : true);
    setDetail(false);
  }

  return (
    <div className="my-5">

      {/** DEAIL AND CARE */}
      <div className="flex justify-between py-5 cursor-pointer" onClick={handleDetail}>
        <div>Detail and Care</div> 
        <div>{ !detail && <AiOutlineDown />} { detail && <AiOutlineClose />}</div>
      </div>
      {!detail && <div className="w-full border border-gray-200"></div>}
      { detail &&
      <div className="font-extralight">
        <div className="grid md:grid-cols-12 my-2">
          <div className="md:col-span-2 py-1 md:py-0">Style</div>
          <div className="md:col-span-10">
              <div>Product style, T-shirt, Regular fit, Button fasteting Collared neck, Short sleeve, Classic collar</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 my-2">
          <div className="md:col-span-2 py-1 md:py-0">Material</div>
          <div className="md:col-span-10">
              <div>99% Cotton, 1% elastane (exclusive of trimmings)</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-2 py-1 md:py-0">Care</div>
          <div className="md:col-span-10">
              <p>Wash at 40deg C Delicate</p>
              <p>Do not bleach</p>
              <p>Tumble dry medium temperature</p>
              <p>Iron at medium temperature</p>
              <p>Do not dry clean</p>
          </div>
        </div>



      </div>
      }


      {/** DELIVERY COLLECTION AND RETURN */}
      <div className="flex justify-between py-5 cursor-pointer" onClick={handleDelivery}>
        <div>Delivery, Collection and Return</div> 
        <div>{ !delivery && <AiOutlineDown />} { delivery && <AiOutlineClose />}</div>
      </div>
      {!delivery && <div className="w-full border border-gray-200"></div>}
      { delivery &&
      <div className="font-extralight">
        <div className="grid md:grid-cols-12 my-2">
          <div className="md:col-span-2 py-1 md:py-0">Style</div>
          <div className="md:col-span-10">
              <div>Product style, T-shirt, Regular fit, Button fasteting Collared neck, Short sleeve, Classic collar</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 my-2">
          <div className="md:col-span-2 py-1 md:py-0">Material</div>
          <div className="md:col-span-10">
              <div>99% Cotton, 1% elastane (exclusive of trimmings)</div>
          </div>
        </div>

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-2 py-1 md:py-0">Care</div>
          <div className="md:col-span-10">
              <p>Wash at 40deg C Delicate</p>
              <p>Do not bleach</p>
              <p>Tumble dry medium temperature</p>
              <p>Iron at medium temperature</p>
              <p>Do not dry clean</p>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default DetailandCare
