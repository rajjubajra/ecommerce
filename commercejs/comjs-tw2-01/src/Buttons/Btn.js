import {Link} from 'react-router-dom';

function Btn({name, link}) {
  return (
    <div>
    <Link 
    className="text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50 m-1" 
    to={link} >{name}</Link>
      
    </div>
  )
}

export default Btn
