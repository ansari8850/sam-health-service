"use client";

import React from "react";
import Image from "next/image";
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
                        Our Services
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Complete Healthcare at Your Fingertips
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        From home sample collection to digital reports - we&apos;ve got everything covered
                    </motion.p>
                </motion.div>

                {/* Service Cards with 3D Images */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Home Collection */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInUp}
                        className="group"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50">
                                <Image
                                    src="/images/home-collection.png"
                                    alt="Home sample collection service"
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Home Collection</h3>
                            <p className="text-gray-600 mb-4">
                                Our trained phlebotomists visit your home for safe and hygienic sample collection at your convenience.
                            </p>
                            <ul className="space-y-2">
                                {["Trained professionals", "Hygienic kits", "Flexible timing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Digital Reports */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInUp}
                        className="group"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50">
                                <Image
                                    src="/images/lab-reports.png"
                                    alt="Digital lab reports on mobile"
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Reports</h3>
                            <p className="text-gray-600 mb-4">
                                Get your lab reports digitally on WhatsApp, Email, or download from our portal anytime.
                            </p>
                            <ul className="space-y-2">
                                {["Reports in 24 hours", "PDF downloads", "WhatsApp delivery"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Fast Delivery */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInUp}
                        className="group"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-teal-50">
                                <Image
                                    src="/images/fast-delivery.png"
                                    alt="Fast sample pickup service"
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
                            <p className="text-gray-600 mb-4">
                                Quick sample pickup within 1-2 hours of booking. Track your sample status in real-time.
                            </p>
                            <ul className="space-y-2">
                                {["1-2 hour pickup", "Real-time tracking", "SMS updates"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Trusted Lab Section */}
                <motion.div
                    {...scrollAnimationProps}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
                >
                    <motion.div variants={fadeInLeft} className="relative">
                        <div className="relative h-80 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/trusted-lab.png"
                                alt="NABL certified laboratory"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-2xl p-4 shadow-xl"
                        >
                            <div className="text-2xl font-bold">NABL</div>
                            <div className="text-sm opacity-90">Certified</div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInRight}>
                        <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 font-medium text-sm rounded-full mb-4">
                            Quality Assurance
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Trusted Laboratory Network
                        </h3>
                        <p className="text-gray-600 mb-6">
                            All our partner laboratories are NABL accredited, ensuring highest standards of accuracy and reliability in every test result. Your health deserves nothing less.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: "99.9%", label: "Accuracy Rate" },
                                { number: "500+", label: "Tests Conducted Daily" },
                                { number: "50+", label: "Partner Labs" },
                                { number: "24/7", label: "Support Available" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-teal-600">{stat.number}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile App Coming Soon Banner */}
                <motion.div
                    {...scrollAnimationProps}
                    variants={fadeInUp}
                    className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500 to-green-500 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-400 font-medium text-sm rounded-full mb-4">
                            📱 Coming Soon
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Mobile App Launching Soon!
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                            Book tests, track samples, and access your reports on the go. Our mobile app for iOS and Android is under development.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <span>App Store</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <span>Play Store</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
