import trincheseLogo from '../../assets/trinchese-logo.jpg'

export default function FeedbackCard({msg}) {
    return(
        <article
            className="rounded-3xl bg-red-50 w-96 h-96 relative"
        >
            <p className="absolute top-20 left-6 mr-4 text-left text-base">{msg}</p>

            <div className="absolute bottom-5 left-6 flex">
                <img src={trincheseLogo} alt="img" className='rounded-full w-16 h-16 object-cover'/>
                <hgroup className="ml-2">
                    <h4 className="font-medium text-base">IISS Trinchese Martano</h4>
                    <h4 className="font-normal text-base tracking-wider">Istituto scolastico</h4>
                </hgroup>
            </div>
        </article>
    );
}