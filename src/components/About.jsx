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
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="bg-[#292551]">
      <div className="App rounded-2xl overflow-hidden" ref={component}>
        <div ref={slider} className="container w-[400vw] flex text-black text-[20px] text-center">
          <div className="panel w-[100vw] h-[100vh] bg-green-400">
            Nasir is Laura in green
          </div>
          <div className="panel w-[100vw] h-[100vh] bg-red-500">
            Nasir is Laura in red
          </div>
          <div className="panel w-[100vw] h-[100vh] bg-blue-600">
            Nasir is Laura in blue
          </div>
          <div className="panel w-[100vw] h-[100vh] bg-purple-700">
            Nasir is Laura in purple
          </div>
        </div>
      </div>

    </div>
  );
}
