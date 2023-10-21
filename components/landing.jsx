"use client";
import { motion } from "framer-motion";
import style from "./landing.module.css";
import { BsSend, BsSendFill } from "react-icons/bs";

export default function Landing() {
  return (
    <>
      <div className="items-center justify-center flex relative w-screen h-screen">
        <motion.div className="flex dark:invert flex-col text-center border-md">
          <h1 className={style.texto}>Tobias Zapata.</h1>
          <h1 className={style.texto2}>fullstack web developer</h1>

          <div className="self-center flex flex-row ">
            <motion.a
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
            </motion.a>
            <motion.a
              className="flex flex-row hover:bg-black/10 hover:rounded-full"
              whileHover={{ scale: 1.1 }}
              href={"/contact"}
            >
              <motion.button className={style.boton}>Contact me</motion.button>
              <BsSendFill className="translate-y-1.5 cursor-pointer text-gray-600 pr-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
