"use client";
import { motion } from "framer-motion";

export default function Foto() {
  return (
    <>
      <motion.div
        className="hidden md:block h-96 w-96 top-1/3 left-1/3 absolute flex justify-center
        items-center "
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          translateX: -300,
          translateY: -50,
        }}
        transition={{ delay: 0.4, duration: 0.4, ease: "linear" }}
      >
        <motion.img
          src="pfp.jpg"
          className="rounded-3xl ring ring-purple-900"
        ></motion.img>
      </motion.div>
      <motion.div
        className="md:hidden h-60 w-60 top-1/3 left-1/2 absolute flex justify-center
        items-center "
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          translateX: -124,
          translateY: -170,
        }}
        transition={{ delay: 0.4, duration: 0.4, ease: "linear" }}
      >
        <motion.img
          src="pfp.jpg"
          className="rounded-3xl ring ring-purple-900"
        ></motion.img>
      </motion.div>
    </>
  );
}
