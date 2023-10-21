"use client";
import { motion } from "framer-motion";
import style from "./landing.module.css";
import { BsSend, BsSendFill } from "react-icons/bs";
import Link from "next/link";

export default function Landing() {
  return (
    <>
      <div className="items-center justify-center flex relative w-screen h-screen">
        <motion.div className="flex dark:invert flex-col text-center border-md">
          <h1 className={style.texto}>Tobias Zapata.</h1>
          <h1 className={style.texto2}>fullstack web developer</h1>

          <div className="self-center flex flex-row ">
            <motion.button
              className="hover:bg-black/10 hover:rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <motion.a
                className={style.boton}
                href="TobiasZapataCV.pdf"
                download
              >
                Download CV
              </motion.a>
            </motion.button>
            <Link href={"/contact"}>
              <motion.div
                className="flex flex-row hover:bg-black/10 hover:rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <motion.h1 className={style.boton}>Contact me</motion.h1>
                <BsSendFill className="translate-y-1.5 cursor-pointer text-gray-600 pr-1" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
