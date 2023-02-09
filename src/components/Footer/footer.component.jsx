const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>
        <p className="mt-12 p-5 text-center">{`Copyright © TextToQrCode ${year}`}</p>
    </footer>;
  };
  
  export default Footer;