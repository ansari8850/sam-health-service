"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollAnimationProps } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

const StarIcon: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
    <svg
        className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
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
                        Testimonials
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        What Our Patients Say
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Trusted by thousands of patients across Mumbai for reliable diagnostic services
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...scrollAnimationProps}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-teal-100 transition-all"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} filled={i < testimonial.rating} />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-600 mb-6 line-clamp-4">&ldquo;{testimonial.comment}&rdquo;</p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    {...scrollAnimationProps}
                    variants={fadeInUp}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "50K+", label: "Happy Patients" },
                        { value: "100+", label: "Lab Tests" },
                        { value: "15+", label: "Cities Covered" },
                        { value: "4.9", label: "Average Rating" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
