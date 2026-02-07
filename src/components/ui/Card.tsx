"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    onClick?: () => void;
}

const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hover = false,
    padding = "md",
    onClick,
}) => {
    if (hover) {
        return (
            <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                onClick={onClick}
                className={`
                    bg-white rounded-2xl shadow-sm border border-gray-100
                    ${paddingStyles[padding]}
                    ${onClick ? "cursor-pointer" : ""}
                    ${className}
                `}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div
            onClick={onClick}
            className={`
                bg-white rounded-2xl shadow-sm border border-gray-100
                ${paddingStyles[padding]}
                ${onClick ? "cursor-pointer" : ""}
                ${className}
            `}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
    <div className={`mb-4 ${className}`}>{children}</div>
);

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: "h2" | "h3" | "h4";
}

export const CardTitle: React.FC<CardTitleProps> = ({
    children,
    className = "",
    as: Tag = "h3",
}) => (
    <Tag className={`text-xl font-semibold text-gray-900 ${className}`}>
        {children}
    </Tag>
);

interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
    children,
    className = "",
}) => <p className={`text-gray-500 mt-1 ${className}`}>{children}</p>;

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
);

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = "" }) => (
    <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>{children}</div>
);
