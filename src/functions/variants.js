// Shared Motion variants: a line of text that flickers in from the left
export const line = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: [0, 1, 0.3, 1], x: 0, transition: { duration: 0.35 } },
};
