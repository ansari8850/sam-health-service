"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-cyan-300/30 to-teal-300/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-300/30 to-green-300/30 rounded-full blur-3xl"
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGE5OGMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Content */}
                    <motion.div variants={fadeInLeft} className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-100 mb-6"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-teal-700">Trusted by 50,000+ patients</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Health,{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                                Our Priority
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            Get diagnostic tests at your doorstep with our certified home collection service.
                            Accurate results, affordable prices, and complete convenience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/book-test">
                                <Button size="lg" rightIcon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                }>
                                    Book a Test Now
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="outline" size="lg">Learn More</Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">100+</div>
                                <div className="text-gray-500 text-sm">Lab Tests</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div>
                                <div className="text-3xl font-bold text-gray-900">24/7</div>
                                <div className="text-gray-500 text-sm">Support</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div>
                                <div className="text-3xl font-bold text-gray-900">NABL</div>
                                <div className="text-gray-500 text-sm">Certified</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div variants={fadeInRight} className="relative">
                        <div className="relative z-10">
                            {/* Medical Icon Illustration */}
                            <div className="w-full max-w-md mx-auto">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative aspect-square bg-gradient-to-br from-cyan-500 via-teal-500 to-green-500 rounded-3xl p-1"
                                >
                                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center">
                                                <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Collection</h3>
                                            <p className="text-gray-500">Safe & convenient sample collection at your doorstep</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Reports in 24hrs</div>
                                            <div className="text-xs text-gray-500">Digital delivery</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, -10, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{COMPANY_INFO.phone}</div>
                                            <div className="text-xs text-gray-500">Call us anytime</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
