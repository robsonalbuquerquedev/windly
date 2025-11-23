// blurIn.js
export const blurIn = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};