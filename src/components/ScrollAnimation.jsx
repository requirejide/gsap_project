import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {
  const boxRef = useRef([]);

  const boxes = Array.from({ length: 5 }, (e) => e);
  console.log(boxes);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      boxRef.current,
      { y: -500 },
      {
        y: 0,
        rotate: 360,
        ease: "bounce.out",
        stagger: 0.07,

        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 30%",
          end: "top 0%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] bg-black text-white flex items-center justify-center">
        ScrollTrigger
      </div>
      <ul className="w-full h-[100vh] overflow-hidden bg-blue-400 gap-5 text-white  flex items-center ">
        {boxes.map((el, i) => (
          <li
            key={i}
            ref={(el) => (boxRef.current[i] = el)}
            className="w-[80px] h-[80px] flex  justify-center items-center text-white rounded-lg bg-[tomato]"
          >
            Box
          </li>
        ))}
      </ul>
      <div className="w-full h-[100vh] bg-blue-400 text-white  flex items-center ">
        <div className="w-[80px] h-[80px] rounded-lg bg-[tomato]"></div>
      </div>
    </>
  );
}
export default ScrollAnimation;
