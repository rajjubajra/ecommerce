import MeasuringType from "./SizeChart/MeasuringType"
import MeasuringAdvice from "./SizeChart/MeausingAdvice";

function SizeChart() {


  return (
    <div className="w-full h-auto">
      <div className="w-full m-auto font-extralight">
        <h2 className="text-2xl pb-5">Size Chart</h2>
        <p>Use our handy measurement charts to find the right size for your perfect style. The fit of the garment may vary depending on the cut, style and fabric.</p>

        <div className="border boarder-gray-200 my-4"></div>



        <MeasuringType />

        <div className="mt-20">
          <MeasuringAdvice />
        </div>
        






      </div>
    </div>
  )
}

export default SizeChart
