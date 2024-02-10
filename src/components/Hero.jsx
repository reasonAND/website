
const Hero = () => {
  return (
    <div className=" bg-[#242424] text-[#f7ced7] w-[100vw] h-[100vh] text-[20px]">
      
      <div className="flex flex-col sm:hidden">
        <div className="left h-[50vh] w-[100vw] bg-green-300 px-6 py-11 sm:px-8 sm:text-[16px]">
          w
        </div>        
        <div className="right h-[50vh] w-[100vw] px-6 py-[1px] bg-slate-50 sm:px-8 sm:text-[16px]">
          L
        </div>        
      </div>

      <div className="hidden sm:flex">
        <div className="left h-full w-[50%]">

        </div>
        <div className="right h-full w-[50%]">

        </div>         
      </div>     
    </div>
  )
}

export default Hero