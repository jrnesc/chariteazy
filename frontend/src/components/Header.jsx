const Header = () => {
  return (
    <>
      <nav className="py-4 px-8 bg-blu-light">
        <div className="flex items-center justify-between h-15">
          <div>Logo</div>
          <div className="rounded-xl overflow-hidden border border-black bg-white hidden sm:block">
            <ul className="flex items-baseline">
              <li className="rounded-lg py-2 px-5 bg-teel">
                <a>Menu</a>
              </li>
              <li className="py-2 px-5">
                <a>Menu</a>
              </li>
              <li className="py-2 px-5">
                <a>Menu</a>
              </li>
              <li className="py-2 px-5">
                <a>Menu</a>
              </li>
            </ul>
          </div>
          <button className="py-2 px-5 bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Login
          </button>
        </div>
      </nav>
      <div className="fixed bottom-0 w-full sm:hidden">
        <div className="rounded-t-xl overflow-hidden border border-black bg-white">
          <ul className="flex items-baseline justify-between">
            <li className="rounded-t-lg py-2 px-5 bg-teel">
              <a>Menu</a>
            </li>
            <li className="py-2 px-5">
              <a>Menu</a>
            </li>
            <li className="py-2 px-5">
              <a>Menu</a>
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
