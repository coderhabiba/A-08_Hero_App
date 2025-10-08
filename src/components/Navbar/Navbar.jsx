import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = [
    <NavLink
      key="home"
      to="/"
      className={({ isActive }) =>
        `text-[16px] font-semibold transition ease-in-out duration-700 ${
          isActive
            ? 'text-purple-400 underline'
            : 'hover:text-purple-600 hover:underline'
        }`
      }
    >
      Home
    </NavLink>,
    <NavLink
      key="apps"
      to="/all-apps"
      className={({ isActive }) =>
        `text-[16px] font-semibold transition ease-in-out duration-700 ${
          isActive
            ? 'text-purple-400 underline'
            : 'hover:text-purple-600 hover:underline'
        }`
      }
    >
      <li>Apps</li>
    </NavLink>,
    <NavLink
      key="install"
      to="/installed-apps"
      className={({ isActive }) =>
        `text-[16px] font-semibold transition ease-in-out duration-700 ${
          isActive
            ? 'text-purple-400 underline'
            : 'hover:text-purple-600 hover:underline'
        }`
      }
    >
      <li>Installation</li>
    </NavLink>,
  ];



  return (
    <div className="bg-white border-b border-b-[#e9e9e9]">
      <div className="max-w-[1400px] mx-auto flex items-center py-5">
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
              <img src={'https://i.ibb.co.com/tT4NB2V5/logo.png'} alt="logo" />
            </div>
            <a className="md:text-[16px] text-xs font-bold bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
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
          <button className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] md:py-3 py-1 md:px-4 px-2">
            <div className="w-5 h-5">
              <img
                className="w-full h-full"
                src="https://i.ibb.co.com/t1yPVsh/github-logo-24.png"
                alt="github"
              />
            </div>
            <NavLink
              className="md:text-[16px] text-xs font-semibold text-white"
              to={'https://github.com/coderhabiba'}
            >
              Contribute
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
