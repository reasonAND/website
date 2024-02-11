import { useEffect, useState } from "react";

const PreLoader = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    const timeoutId = setTimeout(() => {
      setisLoading(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    isLoading ? (
      <div className="PreLoader w-[100vw] h-[100vh] bg-[#242424] flex justify-center items-center text-white">
        nasir Lauru hai
      </div>
    ) : null
  );
};

export default PreLoader;
