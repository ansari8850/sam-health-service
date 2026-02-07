"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LabTest } from "@/types";
import { formatCurrency, calculateTotalAmount } from "@/lib/utils";

interface SelectedTestsSummaryProps {
    tests: LabTest[];
    onRemove: (test: LabTest) => void;
    onClear: () => void;
    onProceed: () => void;
}

export const SelectedTestsSummary: React.FC<SelectedTestsSummaryProps> = ({
    tests,
    onRemove,
    onClear,
    onProceed,
}) => {
    const total = tests.reduce((sum, t) => sum + t.price, 0);

    if (tests.length === 0) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Selected Count & Clear */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {tests.length}
                            </span>
                            <span className="text-gray-600">Tests Selected</span>
                        </div>
                        <button
                            onClick={onClear}
                            className="text-sm text-red-500 hover:text-red-600 font-medium"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Selected Tests Pills */}
                    <div className="flex-1 hidden md:flex items-center gap-2 overflow-x-auto px-4">
                        <AnimatePresence mode="popLayout">
                            {tests.slice(0, 3).map((test) => (
                                <motion.span
                                    key={test.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm whitespace-nowrap"
                                >
                                    {test.name.length > 20 ? test.name.substring(0, 20) + "..." : test.name}
                                    <button
                                        onClick={() => onRemove(test)}
                                        className="w-4 h-4 bg-teal-200 rounded-full flex items-center justify-center hover:bg-teal-300"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </motion.span>
                            ))}
                            {tests.length > 3 && (
                                <span className="text-sm text-gray-500">+{tests.length - 3} more</span>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Total & Proceed */}
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <div className="text-sm text-gray-500">Total Amount</div>
                            <div className="text-2xl font-bold text-gray-900">{formatCurrency(total)}</div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onProceed}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-shadow"
                        >
                            Proceed to Book
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
