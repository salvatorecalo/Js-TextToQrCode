import SwiperList from "../Swiper/swiper.component";
import bgGradient from '../../assets/bgGradient.svg'

export default function FeedbackSection() {
    return(
        <section id="Feedback"  
            style={{ 
                background: `url(${bgGradient})`,
                }}
            className="h-screen p-12 pt-48 md:pt-56"
        >
            <h2 className="text-center font-bold text-xl md:text-3xl lg:text-3xl mb-12 dark:text-white">Loro amano la nostra applicazione la adorerai anche tu</h2>
            <div className="flex flex-wrap -m-4">
                <SwiperList />
            </div>
        </section>
    );
}