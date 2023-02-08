import Navbar from '../Navbar/navbar.component'
import HubJumbo from '../HubJumbo/hubJumbo.component'

function Hub() {
    return(
        <section 
            id="Hub"
            className='mb-48 container mx-auto px-4'
            >
                <Navbar />
                <HubJumbo />
        </section>
    );
}

export default Hub;