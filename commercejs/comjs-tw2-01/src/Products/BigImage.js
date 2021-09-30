import {IconContext} from "react-icons";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {baseurl} from '../../config';


function BigImage() {
  return (
    <div className="flex flex-row items-center ">
      <div className="px-4 cursor-pointer">
      <IconContext.Provider value={{ size:42}}>
        <BsChevronLeft />
        </IconContext.Provider>
      </div>
      <div className="w-full m-auto">
        <img className="w-full" src={`${baseurl.URL}/images/t-shirts.jpg`} alt="t-shirt" />
      </div>
      <div className="px-4 cursor-pointer">
      <IconContext.Provider value={{ size:42}}>
        <BsChevronRight />
      </IconContext.Provider>  
      </div>
    </div>
    
  )
}

export default BigImage
