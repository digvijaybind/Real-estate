import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Listing from "./Listing";

function RecentListing() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Listing />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecentListing;
