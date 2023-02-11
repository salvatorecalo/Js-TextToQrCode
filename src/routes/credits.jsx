export default function CreditsPage() {
    return(
        <section>
            <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">Crediti</h1>

            <p className="text-center font-normal leading-10 mt-12">
                Questo sito web fa uso: 
                <ul>
                    <li>
                        delle icone di <a href="https://fontawesome.com/">Font Awesome</a> 
                    </li>
                    <li>
                        dei componenti di <a href="https://daisyui.com/">DaisyUI</a>
                    </li>
                    <li>
                        dello slider di <a href="https://swiperjs.com/">SwiperJs</a>
                    </li>
                </ul>
            </p>
        </section>
    );
}