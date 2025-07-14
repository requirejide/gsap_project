import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function AnimateLines() {
  const lineRef = useRef([]);
  const words = [
    "Break apart HTML text into",
    "characters, words, and/or lines for",
    "easy animation.",
  ];

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      lineRef.current,
      {
        y: 100,
        scale: 0.5,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "50% 50% -60px",
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] text-white bg-black flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl text-blue-500">Animate Text by Lines</h1>
        <ul className="flex flex-col items-center  text-2xl font-semibold">
          {words.map((value, i) => (
            <li key={i} ref={(el) => (lineRef.current[i] = el)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default AnimateLines;
