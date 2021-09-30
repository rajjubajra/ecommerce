import {useState} from 'react';
import ItemDetailImage from './ItemDetailImage';
import ItemDetailInfo from './ItemDetailInfo';
import SizeChart from './SizeChart';
import BigImage from './BigImage';
import {GrClose} from 'react-icons/gr';


function ItemDetails() {

  const [viewSizeChart, setViewSizeChart] = useState(false);
  const [viewBigImage, setViewBigImage] = useState(false);
  


  function handleSizeChart(){
    setViewSizeChart(true);
  }

  function handleBigImage(){
    setViewBigImage(true);
  }

  return (
    <div className="relative w-full grid md:grid-cols-2">

      <ItemDetailImage handleBigImage={handleBigImage} />
      <ItemDetailInfo handleSizeChart={handleSizeChart} />


      {/** SIZE CHART  */}
      {viewSizeChart && 
      <div className="w-full m-auto  absolute top-0 bg-white p-10">
        <div 
          className="cursor-pointer" 
          onClick={()=> setViewSizeChart(false)}>
        <GrClose />
        </div>
        <SizeChart />
      </div>
      }


      {/** BIG IMAGE */}
      {
        viewBigImage &&
          <div className="w-full absolute top-0 bg-white p-4">
          <div className="flex flex-row">
            <div className="cursor-pointer order-2 px-4" 
                  onClick={()=> setViewBigImage(false)}>
              <GrClose />
            </div>

            <div className="order-1">
              <BigImage  />
            </div>
            
          </div>
          
        </div>
        
      }



    </div>
  )
}

export default ItemDetails
