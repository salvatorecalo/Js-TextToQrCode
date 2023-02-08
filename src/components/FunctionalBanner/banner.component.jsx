import PrimaryButton from "../Primary-button/primary-button";
import fingerTick from '../../assets/fingers-tick.svg'

export default function Banner() {
    return(
        <section id="function" className="mb-24 lg:mb-48 container mx-auto px-4">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <hgroup className="align-middle mb-8 md:mb-0 lg:mb-0 mr-auto place-self-center lg:col-span-7">
                    <h3 className="font-bold text-4xl mb-4">Genera qrcode gratuitamente <br /> con un <span className="text-transparent  bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">solo click</span></h3>
                    <p className="font-normal text-xl mb-8">Grazie al nostro sistema di basterà digitare <br/> il testo da convertire nella casella e <br/>cliccare su “genera qrcode”</p>
                    <PrimaryButton text="Start Now" />
                </hgroup>
                <figure className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={fingerTick} alt="finger ticks" className="w-screen"/>
                </figure>
            </div>
        </section>
    );
}
