const Navbar = () => {
  // hides the navigation bar on scroll
  return (
    <div className=" fixed w-[100vw] flex justify-between items-center py-2 px-5 text-black bg-slate-300/30">
      <div className="logo p-[5px]">logo</div>
      <div className="nav-middle desktop sm:flex hidden">Navbar</div>
      <div className="mobile sm:hidden">Ham</div>
      <div className="desktop sm:flex sm:gap-5 sm:items-center hidden">
        <button className="search hover:bg-slate-400 p-[5px] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
          </svg>
        </button>
        <button className="ac-logo flex items-center px-2 py-[5px] bg-slate-400 text-white hover:bg-slate-500 rounded">
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
