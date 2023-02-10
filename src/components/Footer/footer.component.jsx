import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>
        <p className="mt-12 p-5 text-center ">
            <span className="font-bold">Made with <FontAwesomeIcon icon={faHeart} size="1x" /> by <a href="https://github.com/salvatorecalo" className="text-emerald-500">Salvo</a></span>
            <br />
            {`Copyright © TextToQrCode ${year}`}
        </p>
    </footer>;
  };
  
  export default Footer;