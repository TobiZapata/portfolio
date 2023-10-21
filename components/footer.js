"use client";

import { useTheme } from "next-themes";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const navigation = [
  { name: "Github", href: "https://github.com/tob1zap", icon: BsGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tobias-zapata-a50383206/",
    icon: BsLinkedin,
  },
  ,
];

export default function Footer() {
  return (
    <>
      <div className="dark:invert top-10 left-1/2 -translate-x-14 absolute flex flex-row justify-center z-10">
        <div className="bg-white/20 rounded-l-3xl rounded-r-3xl  flex flex-row space-x-2 px-2 shadow shadow-white">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-black hover:bg-black/50 hover:rounded-3xl hover:shadow-3xl hover:text-white px-3 py-2 text-md font-medium"
            >
              {<item.icon />}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
