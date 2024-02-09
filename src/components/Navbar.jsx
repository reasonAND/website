// import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between content-center py-1 px-3 bg-slate-700">
      <div >
        Logo
      </div>
      <div>
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