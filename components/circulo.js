"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si";

const CircularRotation = () => {
  return (
    <>
      <motion.div className="md:visible invisible">
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: 200,
            translateY: 100,
            rotate: 360,
          }}
          transition={{ delay: 1.1, duration: 0.4, ease: "linear" }}
        >
          <SiReact className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -24,
            translateY: 200,
          }}
          transition={{ delay: 0.6, duration: 0.9, ease: "linear" }}
        >
          <SiJavascript className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -248,
            translateY: 100,
            rotate: -360,
          }}
          transition={{ delay: 0.7, duration: 0.8, ease: "linear" }}
        >
          <SiTailwindcss className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -248,
            translateY: -160,
            rotate: -360,
          }}
          transition={{ delay: 0.8, duration: 0.7, ease: "linear" }}
        >
          <SiNodedotjs className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: 200,
            translateY: -160,
            rotate: 360,
          }}
          transition={{ delay: 0.9, duration: 0.6, ease: "linear" }}
        >
          <SiNextdotjs className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -24,
            translateY: -260,
          }}
          transition={{ delay: 1, duration: 0.5, ease: "linear" }}
        >
          <SiRedux className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
      </motion.div>
      <div className="md:invisible ">
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: 120, //-80
            translateY: 150, //+50
            rotate: 360,
          }}
          transition={{ delay: 1.5, duration: 1, ease: "linear" }}
        >
          <SiReact className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -24,
            translateY: 200,
          }}
          transition={{ delay: 1, duration: 1.5, ease: "linear" }}
        >
          <SiJavascript className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -168,
            translateY: 150,
            rotate: -360,
          }}
          transition={{ delay: 1.1, duration: 1.4, ease: "linear" }}
        >
          <SiTailwindcss className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -168,
            translateY: -210,
            rotate: -360,
          }}
          transition={{ delay: 1.2, duration: 1.3, ease: "linear" }}
        >
          <SiNodedotjs className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: 120,
            translateY: -210,
            rotate: 360,
          }}
          transition={{ delay: 1.3, duration: 1.2, ease: "linear" }}
        >
          <SiNextdotjs className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
        <motion.div
          className="h-12 w-12 top-1/2 left-1/2 -translate-y-6 -translate-x-6 absolute flex justify-center 
        items-center z-10"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={1}
          initial={{ scale: 0 }}
          animate={{
            scale: 2,
            translateX: -24,
            translateY: -260,
          }}
          transition={{ delay: 1.4, duration: 1.1, ease: "linear" }}
        >
          <SiRedux className="text-black dark:invert cursor-grab active:cursor-grabbing active:text-red-700" />
        </motion.div>
      </div>
    </>
  );
};

export default CircularRotation;
