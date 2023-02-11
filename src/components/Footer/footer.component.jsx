import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {  
    return <footer>
        <p className="p-5 text-center ">
            <span className="font-bold">Made with <FontAwesomeIcon icon={faHeart} size="1x" /> by <a href="https://github.com/salvatorecalo" className="text-emerald-500">Salvo</a></span>
        </p>
    </footer>;
  };
  
  export default Footer;