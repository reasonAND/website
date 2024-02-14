import { useEffect, useState } from "react";
import gsap from "gsap";

const PreLoader = () => {
  const [isLoading, setisLoading] = useState(true);
  // const [loadingPercentage, setloadingPercentage] = useState(0)

  const tl = gsap.timeline();
  const loadTime = 2;

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setisLoading(false);
    }, loadTime * 1000);
    
    tl.fromTo(".animation", {
      scale: 0.75,
    }, {
      scale: 1,
      // borderRadius: "0px",
      duration: loadTime * 2/3,
      ease: "power3.inOut",
    })
      tl.to(".maindiv", {
        opacity: 0,
        duration: loadTime * 1/3,
      })
      .to(".maindiv", {
        visibility: "hidden"
      })

    return () => clearTimeout(timeoutId);
  }, [isLoading, tl]);

  return (
    <div className={`maindiv fixed w-[100vw] h-[100vh] flex justify-between items-center text-[#f7ced7] text-[17px] z-[99]`}>
      <div className="w-full h-full flex justify-center items-center bg-white">
        <div className="animation w-full h-full bg-[#242424] rounded-xl p-5">
          <div className="animation-fade w-full h-full rounded-lg p-5 text-white text-[90%]">
            <h1 className="h-[90%] w-full">
              {/* Nasir lauru hai */}
            </h1>
            <h1 className="h-[10%] w-[40%] ml-[65%] mb-3 flex items-center justify-center text-[150%]">
              {`${"Loading"} %`}
            </h1>
          </div>
        </div>
      </div>
    </div>
  ) ;
};

export default PreLoader;
