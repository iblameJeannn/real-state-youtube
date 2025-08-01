export const fadeIn = () => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.8,
        ease: [0.25],
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: 0.7,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};