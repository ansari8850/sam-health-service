"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/animations";

interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const variantStyles = {
    primary: "bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border-2 border-teal-500 text-teal-600 hover:bg-teal-50",
    ghost: "text-teal-600 hover:bg-teal-50",
};

const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = "",
    disabled = false,
    type = "button",
    onClick,
}) => {
    return (
        <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover={!disabled && !isLoading ? "hover" : undefined}
            whileTap={!disabled && !isLoading ? "tap" : undefined}
            className={`
                inline-flex items-center justify-center gap-2 rounded-xl font-semibold
                transition-colors duration-200 focus:outline-none focus:ring-2 
                focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 
                disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]}
                ${fullWidth ? "w-full" : ""} ${className}
            `}
            disabled={disabled || isLoading}
            type={type}
            onClick={onClick}
        >
            {isLoading ? (
                <motion.div
                    className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            ) : leftIcon ? (
                <span className="flex-shrink-0">{leftIcon}</span>
            ) : null}
            <span>{children}</span>
            {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </motion.button>
    );
};
