import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav className="py-4 px-8 bg-blu-light mb-5 md:mb-0">
        <div className="flex items-center justify-between h-14">
          <Link to={{ pathname: "/" }}>
            <img src="images/logo.png" className="h-16 w-16" />
          </Link>
          <div className="rounded-xl overflow-hidden border border-black bg-yello text-white font-bold hidden sm:block">
            <ul className="flex items-baseline">
              <li className="py-2 px-5">
                <NavLink
                  to={{ pathname: "/projects" }}
                  activeClassName="font-bold text-black"
                >
                  Projects
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to={{ pathname: "/profile" }}
                  activeClassName="font-bold text-black"
                >
                  Profile
                </NavLink>
                {/* TODO: add about page and make this a NavLink in navbar */}
              </li>
              <li className="py-2 px-5">
                <a>About us</a>
              </li>
            </ul>
          </div>
          <button
            className="py-2 px-5 border border-black bg-yello hover:bg-yellow-200 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            onClick={props.onLoginClick}
          >
            Login
          </button>
        </div>
      </nav>
      <div className="fixed bottom-0 w-full z-10 sm:hidden">
        <div className="rounded-t-xl overflow-hidden border border-yello bg-yello">
          <ul className="flex items-baseline justify-between">
            <li className="py-2 px-5">
              <NavLink
                to={{ pathname: "/projects" }}
                activeClassName="font-bold text-teel"
              >
                Projects
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to={{ pathname: "/profile" }}
                activeClassName="font-bold text-black"
              >
                Profile
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <a>Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
