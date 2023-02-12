// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import trincheseLogo from '../../assets/trinchese-logo.jpg'

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
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <FeedbackCard src={trincheseLogo} author="Thinchese Martano" authority="Istituto scolastico" msg={"Prodotto utilissimo, lo utilizziamo in quasi tutti i nostri volantini, dalle norme covid fino a quelli per i nostri settori scolastici"} />
      </SwiperSlide>
    </Swiper>
  );
};