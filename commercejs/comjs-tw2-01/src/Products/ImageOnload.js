import React, {useState, useEffect} from 'react';


function ImageOnload({src, alt, cssClass, width, height}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  const [image, setImage] = useState('');
  //console.log(status);

  useEffect(()=>{
    status && setBlur('');

    setImage(src);

  },[src, status])

  

  return (
    <img 
    width={width}
    height={height}
    className={cssClass}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={image} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
