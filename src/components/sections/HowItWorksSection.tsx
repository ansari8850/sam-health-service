"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollAnimationProps } from "@/lib/animations";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const StepIcon: React.FC<{ icon: string }> = ({ icon }) => {
    const icons: Record<string, React.ReactNode> = {
        search: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        form: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        calendar: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        home: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    };
    return icons[icon] || null;
};

export const HowItWorksSection: React.FC = () => {
    return (
        <section className="py-20 bg-white" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    {...scrollAnimationProps}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 font-medium text-sm rounded-full mb-4"
                    >
                        Simple Process
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Book your diagnostic test in 4 simple steps and get accurate results delivered to you
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...scrollAnimationProps}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={fadeInUp}
                            className="relative"
                        >
                            {/* Connector Line */}
                            {index < HOW_IT_WORKS_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-200 to-teal-100" />
                            )}

                            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 transition-colors group">
                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {step.id}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                                    <StepIcon icon={step.icon} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
