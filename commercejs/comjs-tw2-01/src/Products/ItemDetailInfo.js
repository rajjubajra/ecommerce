import {useState} from 'react';
import Colours from './Colours';
import SizeStandard from './SizeStandard';
import SizeLong from './SizeLong';
import Delivery from './Delivery';
import AddToBag from './AddToBag';
import DetailAndCare from './DetailAndCare';
import Btn from '../../Buttons/Btn';


function ItemDetailInfo({handleSizeChart}) {

  

  return (
      <div className="px-5">
        {/** DESCRIPTION */}
        <p className="uppercase text-xs font-extralight">T-Shirt Collection</p>
        <p className="tracking-wider">Cotton Short Sleev</p>

        {/** PRICE */}
        <p>£ 35.50</p>

        {/** DELIVERY */}
        <Delivery />

        {/** AVAILBLE COLOURS */}
        <div className="md:w-1/2 py-10">  
          <Colours />
        </div>

        {/** SIZE */}
        <p className="text-1xl mt-2">Size</p>
        <div className="w-1/2">
          <SizeStandard />
        </div>
        <div className="w-1/2 mt-2">
          <SizeLong />
        </div>


        {/** ADD TO BAG */}
        <div className="py-10">
          <AddToBag />
        </div>

        {/** SIZE GUIDE */}
        <div className="flex flex-row">
          <div onClick={handleSizeChart}><Btn name="Size Chart" link="#" /></div>
          <Btn name="Fit Guide" link="#" />
        </div>


        {/** DETAIL AND CARE */}
        <DetailAndCare />
        


        





        




      </div>

  )
}

export default ItemDetailInfo
