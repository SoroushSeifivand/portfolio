import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      tag: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      tag: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      tag: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:soroushseifivand11@gmail.com",
    },
    {
      id: 4,
      tag: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, tag, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;