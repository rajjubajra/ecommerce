import React from 'react'

function AddToBag() {
  return (
    <div>
      <form>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <select className="p-3 outline-none border border-gray-200">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div className="col-span-10">
            <button className="w-full outline-none border border-gray-200 p-3">
              Add to Bag</button>
          </div>
          
        </div>
        
      </form>
      
    </div>
  )
}

export default AddToBag
