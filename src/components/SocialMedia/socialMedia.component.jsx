import {
    faTwitter,
    faWhatsapp,
    faTelegram
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SocialFollow() {
  return (
    <div className="flex justify-center items-center">
        <a href="mailto:email@example.com?&subject=Avviso importante&body=Ho scoperto questo fantastico sito che mi permette di convertire testo e link in Qrcode https://js-text-to-qr-code.vercel.app"
        className="envelope social mr-4"
        target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://twitter.com/intent/tweet?text=Ho%20scoperto%20questo%20fantastico%20sito%20che%20mi%20permette%20di%20convertire%20testo%20e%20link%20in%20Qrcode%20https://js-text-to-qr-code.vercel.app"  className="twitter-share-button social mr-4" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://t.me/share/share?url=https://js-text-to-qr-code.vercel.app&text=Ho scoperto questo fantastico sito che mi permette di convertire testo e link in Qrcode js-text-to-qr-code.vercel.app"
        className="telegram social mr-4"
        target="_blank">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a href="https://api.whatsapp.com/send?text=Ho scoperto questo fantastico sito che mi permette di convertire testo e link in Qrcode js-text-to-qr-code.vercel.app https://js-text-to-qr-code.vercel.app"
        className="whatsapp social mr-4" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
}