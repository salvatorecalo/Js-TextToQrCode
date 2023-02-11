import SwiperList from "../Swiper/swiper.component";
import bgGradient from '../../assets/bgGradient.svg'

export default function FeedbackSection() {
    return(
        <section id="Feedback"  
            style={{ 
                background: `url(${bgGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                }}
            className="h-screen p-12 pt-48 md:pt-56 lg:pt-96"
        >
            <h2 className="text-center font-bold text-xl md:text-3xl lg:text-3xl mb-12">Loro amano la nostra applicazione la adorerai anche tu</h2>
            <SwiperList />
        </section>
    );
}