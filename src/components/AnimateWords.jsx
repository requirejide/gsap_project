import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function AnimateWords() {
  const wordsRef = useRef([]);
  const words =
    "Break apart HTML text into characters, words, and/or lines for easy animation.";
  const splitWords = words.split(" ");

  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: Infinity, yoyo: true });
    tl.fromTo(
      wordsRef.current,
      { y: -100, opacity: 0, rotate: -80 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.7,
        ease: "back",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <>
      <div className="w-full h-[30vh] bg-black flex flex-col gap-10 justify-center items-center">
        <ul className="w-[350px]  justify-center flex flex-wrap gap-1">
          {splitWords.map((word, i) => (
            <li
              ref={(el) => (wordsRef.current[i] = el)}
              key={i}
              className="text-white text-2xl font-bold"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default AnimateWords;
