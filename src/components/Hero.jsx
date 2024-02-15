
const Hero = () => {
  const heroTexts = ["LOREM", "MERLIN", "IPSUM", "DOLOR"];
  return (
    <div className=" bg-[#242424] text-yellow-300 w-[100vw] h-[100vh] text-[20px]">
      <div className="left h-[50vh] w-[50vw] sm:hidden">
        <div className="px-5 py-11 sm:px-8 sm:text-[16px]">
          <div className="my-6 leading-[75px] flex flex-col">
            {heroTexts.map((title, index) => ( 
              index === 1 
                ? <a key={index} href="https://www.youtube.com/watch?v=yzfoogsTatE" className="text-[12.5vw]">{title}</a> 
                : <a key={index} href="https://www.youtube.com/watch?v=yzfoogsTatE" className="text-[12.5vw]">{title}</a>
            ))}
          </div>          
        </div>        
        <div className="right h-[50vh] w-[100vw] px-6 py-[4px] sm:px-8 sm:text-[16px]">
          L
        </div>        
      </div>

      <div className="hidden sm:block w-[100vw] h-[100vh]">
        {/* <div className="left h-full w-[50%] px-9 py-11 bg-white"> */}
          <div className="leading-tight flex flex-col px-9 pt-11">
            {heroTexts.map((title, index) => ( 
              index === 1 
                ? <a key={index} href="https://www.youtube.com/watch?v=yzfoogsTatE" className="text-[10vh] text-red-400 pr-5">{title}</ a> 
                : <a key={index} href="https://www.youtube.com/watch?v=yzfoogsTatE" className="text-[10vh]">{title}</ a>
            ))}
          </div>
        {/* </div> */}
        <div className="right h-full w-[50%]">

        </div>         
      </div>     
    </div>
  )
}

export default Hero