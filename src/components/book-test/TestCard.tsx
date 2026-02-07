"use client";

import React, { memo } from "react";
import { LabTest } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { CategoryIcon } from "@/components/ui/CategoryIcons";

interface TestCardProps {
    test: LabTest;
    isSelected: boolean;
    onToggle: (test: LabTest) => void;
}

const TestCardComponent: React.FC<TestCardProps> = ({ test, isSelected, onToggle }) => {
    return (
        <div
            onClick={() => onToggle(test)}
            className={`
                relative bg-white rounded-xl border-2 p-4 cursor-pointer
                transition-all duration-200
                ${isSelected
                    ? "border-teal-500 bg-teal-50/50 shadow-md shadow-teal-500/10"
                    : "border-gray-100 hover:border-teal-200 hover:shadow-sm"
                }
            `}
        >
            {/* Selection Indicator */}
            <div className="absolute top-4 right-4">
                <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                    transition-colors duration-200
                    ${isSelected
                        ? "bg-teal-500 border-teal-500"
                        : "border-gray-300"
                    }
                `}>
                    {isSelected && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Category Icon + Badge */}
            <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 shadow-sm">
                    <CategoryIcon category={test.category} className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {test.category}
                    </span>
                </div>
            </div>

            {/* Test Name */}
            <h3 className="font-semibold text-gray-900 mb-1 pr-8 line-clamp-2">
                {test.name}
            </h3>

            {/* Disease Tag */}
            <p className="text-teal-600 text-sm mb-2">{test.disease_tag}</p>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {test.description}
            </p>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xl font-bold text-gray-900">
                    {formatCurrency(test.price)}
                </span>
                <span className={`
                    text-sm font-medium px-3 py-1 rounded-lg transition-colors
                    ${isSelected
                        ? "bg-teal-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }
                `}>
                    {isSelected ? "Selected" : "Select"}
                </span>
            </div>
        </div>
    );
};

// Memoize to prevent unnecessary re-renders
export const TestCard = memo(TestCardComponent, (prevProps, nextProps) => {
    return (
        prevProps.isSelected === nextProps.isSelected &&
        prevProps.test.id === nextProps.test.id
    );
});
