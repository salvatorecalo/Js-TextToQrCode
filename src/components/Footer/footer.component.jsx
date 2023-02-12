import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {  
    return <footer>
        <p className="p-5 text-center ">
            <a href={'/credits'}>Pagina Crediti</a>
            <br />
            <br />
            <span className="font-bold">Made with <FontAwesomeIcon icon={faHeart} size="1x" /> by <a href="https://www.salvatorecalo.it" className="text-emerald-500">Salvo</a></span>
        </p>
    </footer>;
  };
  
  export default Footer;