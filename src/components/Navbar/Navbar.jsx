import { Link } from 'react-router';
import logo from '../../assets/logo.png';
const Navbar = () => {
  const links = [
    <Link className='text-[16px] font-semibold hover:underline hover:text-purple-600 transition ease-in-out decoration-2' to={'/'}>
      <li>Home</li>
    </Link>,
    <Link className='text-[16px] font-semibold hover:underline hover:text-purple-600 transition ease-in-out decoration-2' to={'/all-apps'}>
      <li>Apps</li>
    </Link>,
    <Link className='text-[16px] font-semibold hover:underline hover:text-purple-600 transition ease-in-out decoration-2' to={'/installed-apps'}>
      <li>Installation</li>
    </Link>,
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1400px] mx-auto">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10">
              <img src={logo} alt="logo" />
            </div>
            <a className="text-[16px] font-bold bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-8 items-center">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
