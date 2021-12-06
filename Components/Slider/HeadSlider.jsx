import React from "react";
import Image from "next/image";

//Import swiper modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeadSlider = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        parallax={true}
        autoplay={true}
        className="object-contain"
      >
        <SwiperSlide className="w-full h-full relative">
          <Image
            src="/images/slide_01.jpg"
            alt="slider_img"
            width={500}
            height={250}
            layout="responsive"
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute top-2/4 left-2/4 text-center transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h4 className="text-2xl font-extrabold uppercase text-red-500 mb-8">
              best offer
            </h4>
            <h2 className="text-2xl md:text-6xl font-semibold uppercase text-white">
              New Arrivals On Sale
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <Image
            src="/images/slide_02.jpg"
            alt="slider_img"
            width={500}
            height={250}
            layout="responsive"
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute top-2/4 left-2/4 text-center transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h4 className="text-2xl font-extrabold uppercase text-red-500 mb-8">
              Flash Deals
            </h4>
            <h2 className="text-2xl md:text-6xl font-semibold uppercase text-white">
              Get your best products
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <Image
            src="/images/slide_03.jpg"
            alt="slider_img"
            width={500}
            height={250}
            layout="responsive"
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute top-2/4 left-2/4 text-center transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h4 className="text-2xl font-extrabold uppercase text-red-500 mb-8">
              Last Minute
            </h4>
            <h2 className="text-2xl md:text-6xl font-semibold uppercase text-white">
              Grab last minute deals
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeadSlider;
