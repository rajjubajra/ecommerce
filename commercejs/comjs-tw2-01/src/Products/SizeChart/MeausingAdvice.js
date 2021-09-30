import ImageOnload from '../../../ImageOnload';

function MeausingAdvice() {

  
  return (
    <div>
      <div className="py-4">Measurements body is more accurate than the measuring over your clothes</div>
      <div className="grid grid-cols-12 grid-flow-row text-sm">
        
        <div className="md:col-span-7 col-span-12">

        <div>
          <p className="font-bold"><i class="text-red-500">A</i>: Collar:</p>
          <p>measure around the base of the neck where the collar sits.</p>
        </div>

        <div className="col-span-3 row-span-2 order-3">
          <p className="font-bold"><i class=" text-blue-600">B</i>: Chest</p>
          <p>measure the chest at the fullest part, placing the tape close up under the arms.</p>
        </div>

        <div className="col-span-3 row-span-2 order-4">
          <p className="font-bold"><i class=" text-green-500">C</i>: Waist</p>
          <p>measure the natural waistline.</p>
        </div>

        <div className="col-span-3 row-span-2 order-5">
          <p className="font-bold"><i class=" text-yellow-600">D</i>: Inside leg</p>
          <p>measure from the crotch to where your trouser is normally worn on the shoe.</p>
        </div>

        <div className="col-span-3 row-span-2 order-6">
          <p className="font-bold"><i>E</i>: Body length</p>
          <p>To determine jacket length requirements, measure from the centre back of your neck line to the natural hemline. Check size guide to establish if a Short, Medium, Long or Extra Long length is required. Jacket lengths vary depending on the style or the fit of the garment.</p>
        </div>

        <div className="col-span-3 row-span-2 order-7">
          <p className="font-bold"><i class="text-yellow-300">F</i>: Total overarm</p>
          <p>Stand with your arm raised and bent 90 degrees at the elbow​
            <ul>
              <li>1. Start with the tape at the nape of your neck, measure across to your shoulder​</li>
              <li>2. Continue from your shoulder down to your elbow</li>
              <li>3. And finally from your elbow to the bone in your wrist​.</li>
            </ul>
          </p>  
        </div>


        </div>
        
        <div className="md:col-span-5 col-span-12">
          <ImageOnload 
          cssClass="h-96 w-auto object-cover"
          src="/images/measuring-advice.jpg" />
        </div>

      </div>
      
    </div>
  )
}

export default MeausingAdvice
