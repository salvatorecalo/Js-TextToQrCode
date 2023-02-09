import {useState} from 'react';


export default function QrPage() {
    const [value, SetValue] = useState("");
    const [shown, SetShown] = useState(false)
    const [text, SetText] = useState("")

    function generateQr() {
            if (!value) {
                SetShown(false)
                SetText("please enter some text!")
            } else {
                SetShown(true)
                SetText("")
            }
        }

    const src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + value
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-medium mb-4">Qr Code Generator</h1>
            <div id="qr-image">
                <span id="error" className='text-red-500'>{text}</span>
                {shown && <img src={src} id="img" alt={value} />}
            </div>
            <input onChange={e => SetValue(e.target.value)} type="text" id="text" className="border-2 rounded-lg text-xl my-8 py-2 px-4" placeholder="Enter your text..."/>
            <button onClick={generateQr} className="bg-emerald-500 hover:bg-emerald-600 py-2 px-6 text-white">Genera Qr</button>
            {shown && <a className='mt-8' href="">Scarica Qr Code</a>}
            <a href={`/`} className='mt-24 text-lg font-medium'>Torna alla home</a>
        </div>
    );
}
