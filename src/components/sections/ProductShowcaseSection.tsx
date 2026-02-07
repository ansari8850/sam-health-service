"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scrollAnimationProps } from "@/lib/animations";

export const ProductShowcaseSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    {...scrollAnimationProps}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-1.5 bg-white text-teal-600 font-medium text-sm rounded-full mb-4 shadow-sm"
                    >
                        Our Products
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Access Your Health Anywhere
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Download our apps to book tests, view reports, and manage your health on the go
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Desktop App */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInLeft}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Desktop App</h3>
                                    <p className="text-gray-500">For Windows & macOS</p>
                                </div>
                            </div>

                            {/* Mock Desktop UI */}
                            <div className="bg-gray-50 rounded-2xl p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-8 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-lg w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-20 bg-white rounded-lg shadow-sm" />
                                        <div className="h-20 bg-white rounded-lg shadow-sm" />
                                        <div className="h-20 bg-white rounded-lg shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            <ul className="mt-6 space-y-2">
                                {["Full dashboard access", "Download reports as PDF", "Schedule appointments"].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Mobile App */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInRight}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Mobile App</h3>
                                    <p className="text-gray-500">For iOS & Android</p>
                                </div>
                            </div>

                            {/* Mock Mobile UI */}
                            <div className="flex justify-center">
                                <div className="w-48 bg-gray-900 rounded-3xl p-2">
                                    <div className="bg-white rounded-2xl overflow-hidden">
                                        <div className="h-6 bg-gradient-to-r from-cyan-500 to-teal-500" />
                                        <div className="p-3 space-y-2">
                                            <div className="h-3 bg-gray-200 rounded w-3/4" />
                                            <div className="h-2 bg-gray-100 rounded w-1/2" />
                                            <div className="grid grid-cols-2 gap-1 mt-4">
                                                <div className="h-12 bg-teal-50 rounded-lg" />
                                                <div className="h-12 bg-cyan-50 rounded-lg" />
                                            </div>
                                            <div className="h-16 bg-gray-50 rounded-lg mt-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="mt-6 space-y-2">
                                {["Book tests on the go", "Push notifications for reports", "Track sample collection live"].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    App Store
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    Play Store
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
