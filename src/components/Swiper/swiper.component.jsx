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
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 80,
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