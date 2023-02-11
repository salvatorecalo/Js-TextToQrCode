import { useState } from 'react';
import { saveAs } from 'file-saver';
import SocialFollow from '../components/SocialMedia/socialMedia.component';

export default function QrPage() {
    const [value, SetValue] = useState("");
    const [shown, SetShown] = useState(false)
    const [text, SetText] = useState("")

    function generateQr() {
        if (!value) {
            SetShown(false)
            SetText("inserisci del testo  da convertire")
        } else {
            SetShown(true)
            SetText("")
        }
    }

    function download() {
        saveAs(src, value + ".png");
    }
    const src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + value;
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-medium mb-4">Qr Code Converter</h1>
            <div id="qr-image">
                <span id="error" className='text-red-500'>{text}</span>
                {shown && <img src={src} id="img" alt={value} />}
            </div>
            <input onChange={e => SetValue(e.target.value)} type="text" id="text" className="border-2 rounded-lg my-8 py-2 px-4 w-64" placeholder="Inserisci il testo da convertire" />
            <button onClick={generateQr} className="bg-emerald-500 hover:bg-emerald-600 py-2 px-6 text-white">Genera Qr</button>
            {shown && <label className='mt-4 cursor-pointer' onClick={download} htmlFor="shareModal">Scarica Qr Code</label>}
            <a href={`/`} className='mt-24 text-lg font-medium'>Torna alla home</a>

            <input type="checkbox" id="shareModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="shareModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Grazie per aver usato il nostro servizio!</h3>
                    <p className="py-4 mb-4">Te ne saremmo veramente grati, se potessi condividerlo con i tuoi amici</p>
                    <SocialFollow />
                </div>
            </div>
        </div>
    );
}
