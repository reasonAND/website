import { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => { // hides the navigation bar on scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navOpacity, setNavOpacity] = useState(0.4);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".menu", {
      duration: 0.5,
      opacity: isMenuOpen ? 1 : 0,
      height: isMenuOpen ? "100vh" : 0,
      ease: "power3.inOut",
    })
    .to(".hamburger-list", {
      duration: 0.15,
      opacity: isMenuOpen ? 1 : 0,
      marginBottom: isMenuOpen ? "20px" : 0,
      ease: "power3.inOut",
    });
  }, [isMenuOpen, tl]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen ? setNavOpacity(0.4) : setNavOpacity(1);
  };
  let o = navOpacity;

  const heroTexts = ["LAURE MEY", "LAURA", "LASSAN", "NASIR"];

  return (
    <div className="fixed w-[100vw] flex justify-between items-center py-[10px] px-4 sm:px-8 sm:text-[16px] text-[#f7ced7] text-[17px]" style={{ background: `rgba(30, 41, 59, ${o}`}}>
      <div className="logo px-2">
        <svg
          width="55"
          height="35"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
            fill="currentColor"
          ></path>
          <path
            d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
            fill="currentColor"
          ></path>
          <path
            d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
            fill="currentColor"
          ></path>
          <path
            d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
            fill="currentColor"
          ></path>
          <path
            d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <button className="mobile hamburger sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="35"
            fill="currentColor"
            className="rotate-45"
            viewBox="0 0 16 16">
            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
        ) 
        : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="30"
            viewBox="0 0 50 50"
            fill="#f7ced7">
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
          </svg>
        )}
      </button>
        <div className={`menu absolute top-full left-0 w-full h-[100vh] bg-slate-800 px-4 z-[69]`}>
          <p className="text-[#f7ced7]">
            <div className="leading-[75px] flex flex-col">
              {heroTexts.map((title, index) =>
                index === 0 ? (
                  <a key={index} className="hamburger-list hover:bg-slate-900 border-red-100 hover:border text-[12.5vw] py-2 px-1 mt-1">
                    {title}
                  </a>
                ) : (
                  <a key={index}  className="hamburger-list hover:bg-slate-900 border-red-100 hover:border text-[12.5vw] py-2 px-1">
                    {title}
                  </a>
                )
              )}
            </div>
          </p>
        </div>

      <div className="hidden nav-middle desktop sm:flex">Navbar</div>
      <div className="hidden desktop sm:flex sm:gap-5 sm:items-center">
        <button className="search  border-white/60 hover:border-[1px] hover:bg-black/35 p-[6px] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="#f7ced7"
          >
            <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
          </svg>
        </button>
        <button className="ac-logo flex items-center px-3 py-[6.5px] bg-black/35 hover:bg-slate-600 text-white border-white/60 border-[1px] rounded">
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
