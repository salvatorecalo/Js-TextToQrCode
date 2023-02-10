import { useState } from 'react';
import restaurantImg from '../../assets/restaurant-example.webp'
import hospitalImg from '../../assets/hospital-example.webp'
import discotecheImg from '../../assets/discoteche-example.webp'
import presentazioneImg from '../../assets/presentation-example.webp'
import palestreImg from '../../assets/palestre-example.webp'
import centroImg from '../../assets/centro-benessere.webp'
import particles2 from '../../assets/particles-2.svg'

export default function ExampleCarousel() {
    const [linkActive, SetLinkActive] = useState(0);

    const tabsConfig = [
        {
            content: restaurantImg,
        },
        {
            content: hospitalImg,
        },
        {
            content: discotecheImg,
        },
        {
            content: presentazioneImg,
        },
        {
            content: palestreImg,
        },
        {
            content: centroImg,
        },
    ];

    function ChangeActiveLink(index) {
        SetLinkActive(index);
    }

    return (
        <section id="Examples" className='mb-32 grid place-items-center container mx-auto px-4'>
            <hgroup className='relative'>
            <img src={particles2} alt="particles" className="absolute w-full left-0 top-[-20px] lg:top-[-10px]" />
            <h2 className="text-center font-bold text-3xl relative z-50">Aumenta l’efficienza della <span className="text-transparent  bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">tua comunicazione</span></h2>
            </hgroup>

            <div className="flex flex-col md:flex-row lg:flex-row justify-center mt-16 mx-0 px-0 md:mx-16 md:px-32">
                <ul className='mr-8 flex flex-col text-sm w-full order-last md:order-first lg:order-first'>
                    <li className={linkActive === 0 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(0) }}>
                            Ristoranti
                        </button>
                    </li>
                    <li className={linkActive === 1 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(1) }}>
                            Ospedali
                        </button>
                    </li>
                    <li className={linkActive === 2 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(2) }}>
                            Discoteche
                        </button>
                    </li>
                    <li className={linkActive === 3 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(3) }}>
                            Presentazioni
                        </button>
                    </li>
                    <li className={linkActive === 4 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(4) }}>
                            Palestre
                        </button>
                    </li>
                    <li className={linkActive === 5 ? 'p-4 text-center bg-emerald-500 text-white' : 'p-4 text-center'}>
                        <button onClick={() => { ChangeActiveLink(5) }}>
                            Centri benessere
                        </button>
                    </li>
                </ul>
                <img src={tabsConfig[linkActive].content} alt="..." className="w-max" />
            </div>
        </section>
    );
}