import React from "react";
import CarouselGsap from "./CarouselGsap";
import AnimateChars from "./AnimateChars";
import AnimateLine from "./AnimateLines";
import AnimateWords from "./AnimateWords";
import WordSwitcher from "./WordSwitcher";

export default function Projects() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <h1 className="text-center text-2xl text-white border">CAROUSEL</h1>
        <CarouselGsap />
      </div>
      <div className="w-full h-[50vh]">
        <h1 className="text-2xl border text-blue-500 text-center">
          Animate Text by Lines
        </h1>
        <AnimateChars />
      </div>
      <div className="w-full h-[50vh]">
        <h1 className="text-2xl border text-blue-500 text-center">
          Animate Text by rows
        </h1>
        <AnimateLine />
      </div>
      <div className="w-full h-[50vh]">
        <h1 className="text-2xl border text-blue-500 text-center">
          Animate Words
        </h1>
        <AnimateWords />
      </div>
      <div className="w-full h-[50vh]">
        <h1 className="text-2xl border text-blue-500 text-center">
          WordSwitcher
        </h1>
        <WordSwitcher
          titles={[
            "Developer",
            "Designer",
            "Photographer",
            "Student",
            "Trader",
          ]}
        />
      </div>
    </>
  );
}
