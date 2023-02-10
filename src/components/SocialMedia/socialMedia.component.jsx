import {
    faTwitter,
    faFacebook,
    faWhatsapp,
    faTelegram
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SocialFollow() {
  return (
    <div className="flex justify-center items-center">
        <a href="mailto:email@example.com?&subject=Avviso%20%importante%20%&body=Ho%20%scoperto%20%questo%20%fantastico%20%sito%20%che%20%mi%20%permette%20%di%20%convertire%20%testo%20%e%20%link%20%in%20%Qrcode%20%js-text-to-qr-code.vercel.app"
        className="envelope social mr-4"
        target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://twitter.com/intent/tweet?text=Ho%20%scoperto%20%questo%20%fantastico%20%sito%20%che%20%mi%20%permette%20%di%20%convertire%20%testo%20%e%20%link%20%in%20%Qrcode%20%js-text-to-qr-code.vercel.app" className="twitter  twitter-share-button social mr-4" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="facebook social mr-4">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://t.me/share/share?url=Ho%20%scoperto%20%questo%20%fantastico%20%sito%20%che%20%mi%20%permette%20%di%20%convertire%20%testo%20%e%20%link%20%in%20%Qrcode%20%js-text-to-qr-code.vercel.app"
        className="telegram social mr-4"
        target="_blank">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a href="https://api.whatsapp.com/send?text=Ciao+ho+scoperto+questo+fantastico+sito+che+mi+permette+di+convertire+testo+e+link+in+un+qrcode+js-text-to-qr-code.vercel.app"
        className="whatsapp social mr-4" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
}