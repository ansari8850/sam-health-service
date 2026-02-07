import { Variants } from "framer-motion";

// Fade In Animation Variants
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// Fade In Up Animation
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Fade In Down Animation
export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Fade In Left Animation
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Fade In Right Animation
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Scale Up Animation
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Scale Down Animation
export const scaleDown: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Stagger Container Animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Stagger Faster Container
export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

// Card Hover Animation
export const cardHover = {
    rest: {
        scale: 1,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

// Button Animation
export const buttonVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

// Navigation Animation
export const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Mobile Menu Animation
export const mobileMenuVariants: Variants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

// Modal Animation
export const modalVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.75,
        y: 50,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.75,
        y: 50,
        transition: { duration: 0.2 },
    },
};

// Overlay Animation
export const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 },
    },
};

// Slide In From Bottom
export const slideInBottom: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        y: "100%",
        opacity: 0,
        transition: { duration: 0.2 },
    },
};

// Text Reveal Animation (character by character)
export const textReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
        },
    },
};

export const letterReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// Pulse Animation
export const pulse = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

// Float Animation
export const float = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

// Rotate Animation
export const rotate = {
    rotate: [0, 360],
    transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
    },
};

// Progress Bar Animation
export const progressBar: Variants = {
    hidden: { width: "0%" },
    visible: (custom: number) => ({
        width: `${custom}%`,
        transition: { duration: 1, ease: "easeOut" },
    }),
};

// Checkbox Animation
export const checkboxVariants: Variants = {
    unchecked: { pathLength: 0, opacity: 0 },
    checked: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

// Page Transition
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
    },
};

// Accordion Animation
export const accordionVariants: Variants = {
    closed: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
        height: "auto",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

// Icon Rotation Animation
export const iconRotate: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3 } },
};

// Success Animation
export const successAnimation: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};

// Loading Dots Animation
export const loadingDots = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Scroll-triggered animation props helper
export const scrollAnimationProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
};
