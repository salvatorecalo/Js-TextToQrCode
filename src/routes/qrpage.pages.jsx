import {useRef, useState} from 'react';


export default function QrPage() {
    const ref = useRef(null);
    const [shown, SetShown] = useState(false)
    function generateQr() {
            const element = ref.current;
            let QrText = document.getElementById("text").value;
            if (QrText.trim().length === 0) {
                SetShown(false)
                document.getElementById("error").innerText = "please enter some text!";
            } else {
                SetShown(true)
                document.getElementById("error").innerText = "";
                document.getElementById("img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QrText;
                console.log(document.getElementById("img").src)
            }
        }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-medium mb-4">Qr Code Generator</h1>
            <div id="qr-image" ref={ref}>
                <span id="error" className='text-red-500'></span>
                {shown && <img src="" id="img" alt="generated qrcode" />}
            </div>
            <input type="text" id="text" className="border-2 rounded-lg text-xl my-8 py-2 px-4" placeholder="Enter your text..."/>
            <button onClick={generateQr} className="bg-emerald-500 hover:bg-emerald-600 py-2 px-6 text-white">Genera Qr</button>
            {shown && <a className='mt-8' href="">Scarica Qr Code</a>}
            <a href={`/`} className='mt-24 text-lg font-medium'>Torna alla home</a>
        </div>
    );
}
