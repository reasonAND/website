import { useEffect, useState } from "react";
import gsap from "gsap";

const PreLoader = () => {
  const [isLoading, setisLoading] = useState(true);

  const tl = gsap.timeline();
  const loadTime = 2;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setisLoading(false);
    }, loadTime * 1000);
    
    tl.to(".selectClass", { // for loader animation
      duration: loadTime,
      ease: "power3.inOut",
    })

    return () => clearTimeout(timeoutId);
  }, [tl]);

  return isLoading ? (
    <div className={`fixed w-[100vw] h-[100vh] flex justify-between items-center text-[#f7ced7] text-[17px] z-[99]`}>
      <div className="w-full h-full flex justify-center items-center bg-[#242424]">
        Nasir lauru hai
      </div>
    </div>
  ) : null;
};

export default PreLoader;
