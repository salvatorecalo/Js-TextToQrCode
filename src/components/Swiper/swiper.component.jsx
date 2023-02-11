// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import FeedbackCard from '../feedBackCard/feedbackCard.component';

export default function SwiperList() {
  return (
    <Swiper
    navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <FeedbackCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeedbackCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeedbackCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeedbackCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeedbackCard />
      </SwiperSlide>
    </Swiper>
  );
};