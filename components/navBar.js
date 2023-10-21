"use client";

import { HiUser, HiViewColumns, HiHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", icon: HiHome },
  { name: "About me", href: "/about", icon: HiUser },
  { name: "Projects", href: "/projects", icon: HiViewColumns },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? "systemTheme" : theme;

  return (
    <>
      <div className="dark:invert absolute bottom-0 flex flex-row justify-center z-10 w-screen">
        <div className="bg-white/20 rounded-t-3xl flex flex-row space-x-2 px-2 shadow shadow-white items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.href === path
                  ? "bg-black/80 text-white rounded-t-3xl"
                  : "text-black hover:bg-black/50 hover:text-white",
                "hover:rounded-t-3xl hover:shadow-3xl px-3 py-2 text-md font-medium group"
              )}
            >
              <div className="hidden group-hover:block absolute text-black text-center bottom-8 left-1/2 opacity-50 -translate-x-12 w-24">
                {item.name}
              </div>
              <item.icon />
            </Link>
          ))}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="text-black hover:bg-black/50 hover:text-white text-sm font-medium px-3 py-2 rounded-t-3xl rounded-b-2xl group"
            >
              <div className="hidden  group-hover:block absolute text-black text-center bottom-8 left-1/2 opacity-50 -translate-x-12 w-24">
                Light Mode
              </div>
              <MdLightMode />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="text-black hover:bg-black/50 hover:text-white text-sm font-medium px-3 py-2 rounded-t-3xl rounded-b-2xl group"
            >
              <div className="hidden  group-hover:block absolute text-black text-center bottom-8 left-1/2 opacity-50 -translate-x-12 w-24">
                Dark Mode
              </div>
              <MdDarkMode />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
