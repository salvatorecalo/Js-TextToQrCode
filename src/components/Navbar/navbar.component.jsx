 import PrimaryButton from '../Primary-button/primary-button'

 function Navbar() {
    return (
        <div className="navbar bg-base-100 pt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <a href="#Examples" className='hover:btn-success'> 
                    Esempi
                </a>
            </li>
            <li>
                <a href="#Feedback" className='hover:btn-success'>
                    Feedback
                </a>
            </li>
            </ul>
          </div>
          <h1 className="normal-case text-xl tracking-wide">TextToQrCode</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <a href="#Examples" className='hover:btn-success'> 
                    Esempi
                </a>
            </li>
            <li>
                <a href="#Feedback" className='hover:btn-success'>
                    Feedback
                </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;
