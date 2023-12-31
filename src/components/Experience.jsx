import React from "react";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import git from "../assets/git-bash.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      name: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: sass,
      name: "Sass CSS",
      style: "shadow-pink-500",
    },
    {
      id: 6,
      src: tailwind,
      name: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: git,
      name: "Git",
      style: "shadow-lime-500",
    },
    {
      id: 8,
      src: github,
      name: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black h-screen  "
    >
      <div className="  max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white ">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className=" py-6">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full h-128 tall:overflow-y-scroll grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
