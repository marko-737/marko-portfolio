import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.7, ease: "easeOut" },
  },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 100,
      damping: 15,
      delayChildren: 0.6,
      staggerChildren: 0.05,
    },
  },
};

export const socialLinkVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const arrowVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    },
  },
};

// Animation for skill bars

export const skillBarVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  }),
};
