import {useRef, useEffect} from 'react';


export default function QrPage() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        console.log(element);
        console.log(element.id);
      }, []);

    function generateQr() {
            const element = ref.current;
            element.style.display = "block";
            let QrText = document.getElementById("text").value;
            if (QrText.trim().length === 0) {
                console.log("fired")

                document.getElementById("error").innerHTML = "please enter some text!";
                document.getElementById("img").style.display = "none";
            } else {
                document.getElementById("img").style.display = "block";
                document.getElementById("error").innerHTML = "";
                document.getElementById("img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QrText;
            }
        }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-medium mb-4">Qr Code Generator</h1>
            <div id="qr-image" ref={ref}>
                <span id="error" className='text-red-500'></span>
                <img src="" id="img" alt="generated qrcode" style={{"display": "hidden"}}/>
            </div>
            <input type="text" id="text" className="border-2 rounded-lg text-xl my-8 py-2 px-4" placeholder="Enter your text..."/>
            <button onClick={generateQr} className="bg-emerald-500 hover:bg-emerald-600 py-2 px-6 text-white">Genera Qr</button>

            <a href={`/`} className='mt-24 text-lg font-medium'>Torna alla home</a>
        </div>
    );
}
