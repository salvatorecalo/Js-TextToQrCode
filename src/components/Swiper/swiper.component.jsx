// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
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
        modules={[Navigation]}
      slidesPerView={4}
      breakpoints= {{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.90': {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        '@1.46': {
          slidesPerView: 3,
        },
        '@1.50': {
          slidesPerView: 4,
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