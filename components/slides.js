"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Slides() {
  const slides = [
    {
      name: "'Portfolio'",
      url: "slider1.png",
      technologies: "NextJS, TailwindCSS, FramerMotion",
      github: "",
      link: "",
    },
    {
      name: "'Henry's Gym'",
      url: "slider2.png",
      technologies:
        "React, Redux, NodeJS, Express, PostgreSQL, Sequelize, Chackra UI",
      github: "https://github.com/martinellilucas/Henry-gym",
      link: "https://henry-gym.onrender.com",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const { theme, setTheme } = useTheme();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const currentTheme = theme;

  return (
    <>
      {currentTheme === "dark" && currentIndex === 0 ? (
        <div className="top-[15%] relative max-w-[800px] h-[450px] w-full m-auto group py-10 px-4">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="dark:invert w-full h-full rounded-2xl bg-center bg-cover duration-500 "
          ></div>
          <div className=" absolute top-[50%] hidden group-hover:block -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="absolute top-[50%] hidden group-hover:block -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <a
            href={slides[currentIndex].link}
            target="_blank"
            className="opacity-60 absolute hover:cursor-pointer bottom-[8.8%] left-1/2 -translate-x-[50%] hidden group-hover:block bg-white/70 text-cyan-600  rounded px-2 dark:invert"
          >
            Visit Website
          </a>
        </div>
      ) : (
        <div className="top-[15%] relative max-w-[800px] h-[450px] w-full m-auto group py-10 px-4">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="absolute top-[50%] hidden group-hover:block -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="absolute top-[50%] hidden group-hover:block -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <a
            href={slides[currentIndex].link}
            target="_blank"
            className="opacity-60 absolute hover:cursor-pointer bottom-[8.8%] left-1/2 -translate-x-[50%] hidden group-hover:block bg-white/70 text-cyan-600  rounded px-2 dark:invert"
          >
            Visit Website
          </a>
        </div>
      )}
      <div className="absolute flex left-1/2 -translate-x-[50%] top-[58%] bg-white/30 rounded-full justify-center items-center mt-12 md:mt-1">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={classNames(
              slideIndex === currentIndex
                ? "text-cyan-600  cursor-pointer"
                : "text-black cursor-pointer",
              "text-xl dark:invert cursor-pointer -my-0.5 "
            )}
          >
            {console.log(slideIndex)}
            <RxDotFilled />
          </div>
        ))}
      </div>
      <h1 className="absolute top-[61.5%] -translate-x-[50%] left-1/2 text-black md:-mt-4 mt-12 bg-white/30 md:bg-transparent dark:invert">
        {slides[currentIndex].name}
      </h1>
      <div className="absolute top-[70%] left-[50%] w-full mx-8 max-w-[800px] -translate-x-[50%] md:-mt-10 mt-12 text-black dark:invert md:flex-none flex flex-col pr-12 md:pr-0">
        <h1>Technologies Involved: {slides[currentIndex].technologies}</h1>
        <h1></h1>
        <h1>
          Github:{" "}
          <a
            target="_blank"
            href={slides[currentIndex].github}
            className="text-cyan-600 dark:invert"
          >
            {slides[currentIndex].github}
          </a>
        </h1>
      </div>
    </>
  );
}
