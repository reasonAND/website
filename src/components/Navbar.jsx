
const Navbar = () => { // hides the navigation bar on scroll
  return (
    <div className="fixed w-[100vw] flex justify-between items-center py-2 px-3 text-black bg-slate-300/30">
      <div className="logo p-[5px]">
        logo
      </div>
      <div className="nav-middle desktop sm:flex hidden">
        Navbar
      </div>
      <div className="mobile sm:hidden">
        Ham
      </div>
      <div className="desktop sm:flex hidden">
        laura
      </div>
      
    </div>
  )
}

export default Navbar