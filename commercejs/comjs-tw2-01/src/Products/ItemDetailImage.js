import ImageOnload from '../../ImageOnload';

function ItemDetailImage({handleBigImage}) {
  return (
      <div>
        <div onClick={handleBigImage}>
          <p className="text-xs">Front</p>
          <ImageOnload
      cssClass="cursor-zoom-in"
      src="/images/t-shirts.jpg"
      alt="T-Shirt" />
        </div>
        
        <div  onClick={handleBigImage}>
          <p className="text-xs mt-2">Back</p>
          <ImageOnload
          cssClass="cursor-zoom-in"
          src="/images/t-shirts.jpg"
          alt="T-Shirt" />
        </div>
      </div>

  )
}

export default ItemDetailImage
