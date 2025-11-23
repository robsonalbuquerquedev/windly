// scaleIn.js
export const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};
