import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: { y: "0%", height: "0%" },
  exit: { y: ["0%", "100%"], height: ["0%", "100%"] },
};

export default function Transition() {
  return (
    <>
      <motion.div
        className="dark:invert fixed left-0 right-0 bottom-full h-screen z-30 bg-[#BEBEBE]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="dark:invert fixed left-0 right-0 bottom-0 h-screen z-20 bg-[#8C8C8C]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="dark:invert fixed left-0 right-0 bottom-full h-screen z-10 bg-[#615785]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}
