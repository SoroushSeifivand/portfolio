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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          harum illo eaque quo consequuntur aut ad placeat officiis, sed omnis
          accusamus mollitia sint maiores natus ipsam hic sapiente error totam
          quaerat amet numquam? Odit reprehenderit nulla illum. Corporis nostrum
          ex aut autem, sapiente ullam commodi alias, recusandae quaerat
          voluptatum aliquid.
        </p>
        <br />
        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo
          nobis ut provident explicabo officiis, quasi iusto commodi odit
          recusandae voluptas vero doloribus saepe ab dicta repudiandae at.
          Accusamus ipsam aspernatur, unde dolorem recusandae sapiente eligendi
          doloremque ullam nostrum harum, facilis, suscipit iusto? Nihil
          sapiente eum cum rem laudantium labore.
        </p>
      </div>
    </div>
  );
};

export default About;
