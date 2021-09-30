import {useState} from 'react'


function MeasuringType() {

  const [inch, setInch] = useState(true);
  console.log(inch);

  const sizeStyle = "w-20 text-center p-1 border boarder-gray-200 m-1";

  return (
    <div>

    <div className="my-5">
          <p>View in 
            <span onClick={() => setInch(false)} 
              className={`${!inch && 'bg-gray-800 text-white'} px-4 py-2 m-1 cursor-pointer`}>Cm</span> | 
            <span onClick={() => setInch(true)} 
              className={`${inch && 'bg-gray-800 text-white'} px-4 py-2 m-1 cursor-pointer`}>Inch</span>
            </p>
        </div>

        { inch &&
        <div>
          <div>Size - Inch | Chest (to fit)</div>
          <div className="flex flex-row flex-wrap">
            <div className={sizeStyle}>
              <p>XS</p>
              <p>32-34</p>
            </div>
            <div className={sizeStyle}>
              <p>S</p>
              <p>35-37</p>
            </div>
            <div className={sizeStyle}>
              <p>M</p>
              <p>38-40</p>
            </div>
            <div className={sizeStyle}>
              <p>L</p>
              <p>41-43</p>
            </div>
            <div className={sizeStyle}>
              <p>XL</p>
              <p>44-46</p>
            </div>
            <div className={sizeStyle}>
              <p>XXL</p>
              <p>47-49</p>
            </div>
            <div className={sizeStyle}>
              <p>XXXL</p>
              <p>50-52</p>
            </div>
            <div className={sizeStyle}>
              <p>4XL</p>
              <p>52-54</p>
            </div>
          </div>
        </div>
        }

        { !inch &&
        <div>
          <div>Size - Centemeter| Chest (to fit)</div>
          <div className="flex flex-row flex-wrap">
            <div className={sizeStyle}>
              <p>XS</p>
              <p>81-86</p>
            </div>
            <div className={sizeStyle}>
              <p>S</p>
              <p>87-94</p>
            </div>
            <div className={sizeStyle}>
              <p>M</p>
              <p>97-102</p>
            </div>
            <div className={sizeStyle}>
              <p>L</p>
              <p>104-109</p>
            </div>
            <div className={sizeStyle}>
              <p>XL</p>
              <p>112-117</p>
            </div>
            <div className={sizeStyle}>
              <p>XXL</p>
              <p>119-125</p>
            </div>
            <div className={sizeStyle}>
              <p>XXXL</p>
              <p>126-132</p>
            </div>
            <div className={sizeStyle}>
              <p>4XL</p>
              <p>132-137</p>
            </div>
          </div>
        </div>
        }
    </div>
  )
}

export default MeasuringType
