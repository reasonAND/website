import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.2,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: 0.1,
            delay: 0.1,
            ease: "power1.inOut"
          },
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App bg-[#292551]" ref={component}>
      <div ref={slider} className="container h-screen flex flex-nowrap rounded-xl overflow-hidden">
        <div className="panel min-w-[100vw] h-screen p-5 bg-green-500 text-[20px] text-center">
          About
        </div>
        <div className="panel min-w-[100vw] h-screen p-5 bg-red-500">ONE</div>
        <div className="panel min-w-[100vw] h-screen p-5 bg-blue-500">TWO</div>
        <div className="panel min-w-[100vw] h-screen p-5 bg-purple-500">THREE</div>
      </div>
    </div>
  );
}
