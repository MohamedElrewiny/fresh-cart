import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getAllCategories } from "../../../../../api/Categories/getAllCategories";
import type { AllCategoryType as Category } from "../../../../../types/category";
import type { Swiper as SwiperType } from "swiper";
import CategorySkeleton from "./CategorySkeleton";

const FeaturedCategories = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Categories</h2>

        <div className="flex gap-2">
          <FaArrowAltCircleLeft
            onClick={() => swiperRef.current?.slideNext()}
            className="text-2xl text-gray-500 hover:text-green-700 cursor-pointer"
          />

          <FaArrowAltCircleRight
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-2xl text-gray-500 hover:text-green-700 cursor-pointer"
          />
        </div>
      </div>

<Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Autoplay]}
  spaceBetween={20}
  loop
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    0: {
      slidesPerView: 2,
    },
        640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
        992: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  }}
>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CategorySkeleton />
              </SwiperSlide>
            ))
          : categories.map((category) => (
              <SwiperSlide key={category._id}>
                <div className="border border-gray-300 cursor-pointer hover:border-green-700 rounded-lg flex flex-col items-center gap-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[180px] object-contain"
                  />
                  <span className="text-sm font-medium">
                    {category.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCategories;
