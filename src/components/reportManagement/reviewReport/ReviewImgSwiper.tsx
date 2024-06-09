import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ReviewImgSwiper = () => {
  return (
    <div className="w-1/3 mr-7">
      <div className="flex items-center mb-2">
        <img
          className="mr-5 w-10 h-10 object-cover rounded-full border border-LoginBtn"
          src="/Logo.png"
          alt=""
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="mr-2 font-bold text-lg">콩나물 부침개</div>
            <img src="/check.svg" alt="" />
          </div>
          <div className="text-gray-400 text-sm">리뷰 7개</div>
        </div>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="/test.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/test.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/test.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/test.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/test.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewImgSwiper;