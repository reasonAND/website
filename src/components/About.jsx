import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const pastelSaturation = Math.floor(Math.random() * 20) + 80; // Saturation range 80 - 100
  const pastelLightness = Math.floor(Math.random() * 20) + 70; // Lightness range 70 - 90

  return `hsl(${hue},${pastelSaturation}%,${pastelLightness}%)`;
}

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  const panels = ["LOREM", "MERLIN", "IPSUM", "DOLOR"];

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
        { panels.map((panel, index) => ( 
              <div
              key={index}
              className={`panel min-w-[100vw] h-screen p-5 text-[20px] text-center`}
              style={{ backgroundColor: getRandomPastelColor() }}>
                {panel}
              </div>
          ))
        }
      </div>
    </div>
  );
}
