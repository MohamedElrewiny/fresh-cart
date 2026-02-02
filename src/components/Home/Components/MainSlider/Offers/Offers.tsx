import groceryBanner1 from '../../../../../Assets/Slider/grocery-banner.png';
import groceryBanner2 from '../../../../../Assets/Slider/grocery-banner-2.jpg';



export default function Offers() {
  return (
    <div className="max-w-7xl mx-auto py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="relative h-45 rounded-2xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${groceryBanner1})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 h-full flex flex-col justify-center px-10">
            <h2 className="text-2xl font-bold">Fruits & Vegetables</h2>
            <p>Get Upto 30% Off</p>
            <button className="mt-5 w-fit bg-[#0b1c2d] text-white px-6 py-2 rounded-lg hover:bg-black transition">
              Shop Now
            </button>
          </div>

        </div>

        <div
          className="relative h-45 rounded-2xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${groceryBanner2})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 h-full flex flex-col justify-center px-10">
            <h2 className="text-2xl font-bold">Freshly Baked Buns</h2>
            <p>Get Upto 25% Off</p>
            <button className="mt-5 w-fit bg-[#0b1c2d] text-white px-6 py-2 rounded-lg hover:bg-black transition">
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </div>

  )
}
