// WordSwitcher component props requires an array of title or names 👉 titles={["Developer", "Designer", "Photographer", "Student", "Trader"]}
{
  /* <WordSwitcher
        titles={["Developer", "Designer", "Photographer", "Student", "Trader"]}
      /> */
}
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function WordSwitcher({ titles }) {
  const titleRef = useRef([]);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 0.1 });

    titleRef.current.forEach((el) =>
      tl
        .fromTo(
          el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
        )
        .to(el, { y: -50, opacity: 0, duration: 1, ease: "power1.in" })
    );
  }, []);
  return (
    <>
      <div className="h-[30vh] p-5 bg-black flex flex-col text-white  border-white justify-center items-center">
        <div className="flex gap-2">
          <p className="text-5xl">I'm a</p>
          <ul className="w-[250px] min-h-[40px]   relative">
            {titles.map((value, i) => (
              <li
                key={i}
                ref={(el) => (titleRef.current[i] = el)}
                className="text-5xl absolute text-blue-500  "
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default WordSwitcher;
