import { useEffect, useLayoutEffect, useRef, useState } from "react";
import banner_1 from "../assets/banner-1.jpg";
import banner_2 from "../assets/banner-2.jpg";
import gsap from "gsap";

function CarouselGsap() {
  const banners = [banner_1, banner_2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((curr) => (curr < banners.length - 1 ? curr + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, banners.length]);

  useLayoutEffect(() => {
    const el = carouselRef.current[currentIndex];
    if (el) {
      gsap.fromTo(
        el,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1 }
      );
      gsap.to(el, { xPercent: -100, opacity: 0, delay: 4 });
    }
  }, [currentIndex]);

  return (
    <>
      <div className="w-[95%] md:w-[80%] h-[500px] mx-auto mt-20 rounded-2xl overflow-hidden ">
        <ul className="w-full h-full relative overflow-hidden  ">
          {banners.map((el, i) => (
            <li
              ref={(el) => (carouselRef.current[i] = el)}
              className="absolute bg-red-400 w-full h-full"
              key={i}
              style={{
                backgroundImage: `url(${el})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CarouselGsap;
