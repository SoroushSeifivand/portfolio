import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          My name is Soroush Seifivand I am 23 years old. I was born in Ahvaz
          but currently I'm a student of Computer Science in Islamic Azad
          University Central Tehran Branch and living in Tehran. I am so
          interested in web developing and been doing it for a while but in the
          last couple months I've been practicing consistently. I am looking
          forward to find a job as an intern in a good and updated company to
          know how to deal with real in-work projects to start a career as a
          junior web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
