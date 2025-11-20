import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Slider1 from "../../../../Assets/Slider/slide-1.jpg";
import Slider2 from "../../../../Assets/Slider/slider-2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="relative min-h-[252px] bg-[#CFE7D9]">
          <img src={Slider1} className="w-full hidden md:block" />

          <div className=" absolute left-0 top-[50%] translate-y-[-50%] px-8 ">
            <span className="bg-warning px-2 py-0.5 rounded font-medium text-[10px]">
              Opening Sale Discount 50%
            </span>
            <h2 className="text-black text-4xl font-bold mt-4">
              SuperMarket For
              <br />
              Fresh Grocery
            </h2>
            <p className="my-4 w-full md:max-w-[340px] text-gray-700 font-medium">
              Introduced a new model for online grocery shopping and convenient
              home delivery.
            </p>
            <a
              href="#"
              className=" bg-gray-700 w-fit text-white py-1.5 px-2.5 rounded flex items-center gap-2"
            >
              <span>Shop Now</span>
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative min-h-[252px] bg-[#F2F0E4]">
          <img src={Slider2} className="w-full hidden md:block" />
          <div className=" absolute left-0 top-[50%] translate-y-[-50%] px-8 ">
            <span className="bg-warning px-2 py-0.5 rounded font-medium text-[10px]">
              Free Shipping - orders over $100
            </span>
            <h2 className="text-black text-4xl font-bold mt-4">
              Free Shipping on
              <br />
              orders over
              <span className="text-primary mx-2">$100</span>
            </h2>
            <p className="my-4 w-full md:max-w-[340px] text-gray-700 font-medium">
              Free Shipping to First-Time Customers Only, After promotions and
              discounts are applied.
            </p>
            <a
              href="#"
              className=" bg-gray-700 w-fit text-white py-1.5 px-2.5 rounded flex items-center gap-2"
            >
              <span>Shop Now</span>
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
