"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilterComponent: React.FC<CategoryFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
                            relative px-4 py-2 rounded-full text-sm font-medium
                            transition-colors duration-200
                            ${isActive
                                ? "bg-teal-500 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }
                        `}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export const CategoryFilter = memo(CategoryFilterComponent);
