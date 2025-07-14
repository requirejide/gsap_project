import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function AnimateChars() {
  const titleRef = useRef([]);
  const title =
    "Break apart HTML text into characters, words, and/or lines for easy animation.";
  const splitWords = [...title];

  console.log(splitWords);
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: Infinity, yoyo: true });

    tl.fromTo(
      titleRef.current,
      { x: 150, opacity: 0, scale: 0 },
      {
        x: 0,

        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <>
      <div className="w-full h-[30vh] text-white bg-black flex flex-col gap-10 overflow-hidden justify-center items-center  ">
        <ul className="text-center  text-base w-[390px] ">
          {splitWords.map((el, i) => (
            <li
              ref={(el) => (titleRef.current[i] = el)}
              key={i}
              className="inline-block font-semibold"
            >
              {el === " " ? "\u00A0" : el}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AnimateChars;
