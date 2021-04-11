export const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

export const buttonVariants2 = {
  hover: { scale: 1.075 },
  tap: { scale: 1 },
};

export const alertVariants = {
  init: { opacity: 0, height: 0, padding: "0px 8px", margin: "0px 8px" },
  anim: { opacity: 1, height: 28, padding: "8px 8px", margin: "8px 8px" },
  exit: {
    opacity: 0,
    height: 0,
    padding: "0px 8px",
    margin: "0px 8px",
    transition: {
      padding: { duration: 0.15 },
      margin: { duration: 0.15 },
      opacity: { duration: 0.25 },
    },
  },
};
