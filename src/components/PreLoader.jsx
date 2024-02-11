import { useEffect, useState } from "react";

const PreLoader = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    const timeoutId = setTimeout(() => {
      setisLoading(false);
    }, 1500);

    setisLoading(true);
    return () => clearTimeout(timeoutId);
  }, []);

  return isLoading ? (
    <div className={`fixed w-[100vw] h-[100vh] flex justify-between items-center text-[#f7ced7] text-[17px] z-[99]`}>
      <div className="w-full h-full flex justify-center items-center bg-[#242424]">
        Nasir lauru hai
      </div>
    </div>
  ) : null;
};

export default PreLoader;
