import PrimaryButton from "../Primary-button/primary-button";
import particles from '../../assets/particles.svg'

function HubJumbo() {
    return (
        <div className="text-center grid place-items-center mt-32">
            <hgroup className="relative">
                <img src={particles} alt="particles" className="absolute w-full left-0 top-[-20px] lg:top-[-30px]" />
                <h1 className="relative z-50 mb-12 text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed md:text-5xl lg:text-5xl font-extrabold">
                Il modo più semplice e rapido <br /> per generare il tuo <span className="text-transparent  bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">QrCode</span>
                </h1>
                <PrimaryButton link={`/qr-generator`} text="Prova ora gratuitamente" props={"z-50 relative"}/>
            </hgroup>
        </div>
    );
}

export default HubJumbo;