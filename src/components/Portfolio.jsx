import React from "react";
import gradienGenerator from "../assets/portfolio/gradientGenerator.png";
import reactCalculator from "../assets/portfolio/reactCalculator.png";
import reactRoboGuys from "../assets/portfolio/reactRoboGuys.png";
import memeGenerator from "../assets/portfolio/memeGeneratorpng.png";
import shoeList from "../assets/portfolio/shoe-list.png";
import reactTodo from "../assets/portfolio/reactTodo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactTodo,
      title: "Todo list",
      github: "https://github.com/SoroushSeifivand/react-todo",
    },
    {
      id: 2,
      src: memeGenerator,
      title: "meme generator",
      github: "https://github.com/SoroushSeifivand/meme-generator",
    },
    {
      id: 3,
      src: reactCalculator,
      title: "calculator",
      github: "https://github.com/SoroushSeifivand/js-calculator",
    },
    {
      id: 4,
      src: reactRoboGuys,
      title: "roboguys",
      github: "https://github.com/SoroushSeifivand/roboguys",
    },
    {
      id: 5,
      src: shoeList,
      title: "shoe list",
      github: "https://github.com/SoroushSeifivand/shoe-list",
    },
    {
      id: 6,
      src: gradienGenerator,
      title: "gradiant generator",
      github: "https://github.com/SoroushSeifivand/Gradient-generator",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="flex justify-center flex-wrap gap-3 overflow-y-scroll">
          {portfolios.map(({ id, src, title, github }) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${src})` }}
              className=" shadow-md shadow-gray-600 rounded-lg h-80 w-64 bg-cover bg-center relative hover:scale-105 duration-150"
            >
              <div className="content flex justify-center flex-col text-center items-center w-full bg-black bg-opacity-80 absolute bottom-4 h-14  ">
                <div className="title uppercase text-lg font-bold ">
                  {title}
                </div>
                <div className="buttons flex gap-7 text-cyan-400 ">
                  {/* <a
                    href="#"
                    className="cursor-pointer hover:scale-125 duration-100 uppercase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    live
                  </a> */}
                  <a
                    href={github}
                    className="cursor-pointer hover:scale-125 duration-100 uppercase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    code
                  </a>
                </div>
              </div>
              {/* <div className="flex items-center justify-center h-1/2">
                <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
