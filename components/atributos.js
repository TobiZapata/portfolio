"use client";
import { motion } from "framer-motion";

export default function Atributos() {
  return (
    <>
      <motion.div
        className="hidden md:block dark:invert text-black font-semibold	h-auto w-[36rem] top-1/2 left-1/3 absolute flex flex-col
    items-left"
      >
        <motion.h1
          className="py-2"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: 200,
            translateY: -200,
          }}
          transition={{ delay: 0.5, duration: 0.6, ease: "linear" }}
        >
          •Full Stack Web Developer graduated from &apos;SoyHenry&apos;
          bootcamp.
        </motion.h1>
        <motion.h1
          className="py-3"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: 200,
            translateY: -200,
          }}
          transition={{ delay: 0.6, duration: 0.6, ease: "linear" }}
        >
          •Experience developing Front End and Back End with technologies such
          as JavaScript, ReactJS, Nextjs, Tailwind, Node.js, Express,
          PostgreSQL, Sequelize, etc.
        </motion.h1>

        <motion.h1
          className="py-3"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: 200,
            translateY: -200,
          }}
          transition={{ delay: 0.7, duration: 0.6, ease: "linear" }}
        >
          •Knowledge in agile methodologies, GIT, data structures, algorithms,
          CSS frameworks, and others.
        </motion.h1>
        <motion.h1
          className="py-3"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: 200,
            translateY: -200,
          }}
          transition={{ delay: 0.8, duration: 0.6, ease: "linear" }}
        >
          •C2 Proficient English level (certificate available at
          <a
            className="text-cyan-600"
            href="https://www.efset.org/cert/59jYBd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` https://www.efset.org/cert/59jYBd`}
          </a>
          ).
        </motion.h1>
        <motion.h1
          className="py-3"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: 200,
            translateY: -200,
          }}
          transition={{ delay: 0.9, duration: 0.6, ease: "linear" }}
        >
          •Skills such as problem-solving, effective communication, and
          teamwork.
        </motion.h1>
      </motion.div>
      {/* LO MISMO PERO PARA CELULAR*/}
      <motion.div
        className="md:hidden dark:invert text-black font-semibold h-auto w-[36rem] top-1/2 left-1/2 absolute flex flex-col
  items-left"
      >
        <motion.h1
          className="py-2 pl-20 pr-28 "
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: -260,
            translateY: -40,
          }}
          transition={{ delay: 0.5, duration: 0.6, ease: "linear" }}
        >
          •Full Stack Web Developer graduated from &apos;SoyHenry&apos;
          bootcamp.
        </motion.h1>
        <motion.h1
          className="py-3 pl-20 pr-28"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: -260,
            translateY: -40,
          }}
          transition={{ delay: 0.6, duration: 0.6, ease: "linear" }}
        >
          •Experience developing Front End and Back End with technologies such
          as JavaScript, ReactJS, Nextjs, Tailwind, Node.js, Express,
          PostgreSQL, Sequelize, etc.
        </motion.h1>

        <motion.h1
          className="py-3 pl-20 pr-28"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: -260,
            translateY: -40,
          }}
          transition={{ delay: 0.7, duration: 0.6, ease: "linear" }}
        >
          •Knowledge in agile methodologies, GIT, data structures, algorithms,
          CSS frameworks, and others.
        </motion.h1>
        <motion.h1
          className="py-3 pl-20 pr-28"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: -260,
            translateY: -40,
          }}
          transition={{ delay: 0.8, duration: 0.6, ease: "linear" }}
        >
          •C2 Proficient English level (certificate available at
          <a
            className="text-cyan-600"
            href="https://www.efset.org/cert/59jYBd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` https://www.efset.org/cert/59jYBd`}
          </a>
          ).
        </motion.h1>
        <motion.h1
          className="py-3 pl-20 pr-28"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            translateX: -260,
            translateY: -40,
          }}
          transition={{ delay: 0.9, duration: 0.6, ease: "linear" }}
        >
          •Skills such as problem-solving, effective communication, and
          teamwork.
        </motion.h1>
      </motion.div>
    </>
  );
}
