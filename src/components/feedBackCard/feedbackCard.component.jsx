import Star from '../../assets/star.svg'
import man from '../../assets/man.jpg'

export default function FeedbackCard() {
    return(
        <article
            className="rounded-3xl bg-red-50 w-96 h-96 relative"
        >

            <div className="flex absolute top-10 left-10">
                <img src={Star} alt="star svg" />
                <img src={Star} alt="star svg" />
                <img src={Star} alt="star svg" />
                <img src={Star} alt="star svg" />
                <img src={Star} alt="star svg" />
            </div>
            <p className="absolute top-20 left-10 text-lg">Siamo contenti di avere il tuo feedback</p>

            <div className="absolute bottom-10 left-10 flex">
                <img src={man} alt="img" className='rounded-full w-16 h-16 object-cover'/>
                <hgroup className="ml-5">
                    <h4 className="font-medium text-lg">Simon</h4>
                    <h5 className="font-light">Student</h5>
                </hgroup>
            </div>
        </article>
    );
}