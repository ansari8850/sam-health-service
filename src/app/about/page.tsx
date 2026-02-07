"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scrollAnimationProps } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Committed to making quality healthcare accessible to everyone
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        {...scrollAnimationProps}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeInLeft}>
                            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 font-medium text-sm rounded-full mb-4">
                                Our Mission
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Healthcare at Your{" "}
                                <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                                    Doorstep
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At {COMPANY_INFO.name}, we believe that quality healthcare should be accessible to everyone.
                                Our mission is to eliminate the barriers between you and accurate diagnostic services by bringing
                                world-class lab testing right to your home.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Founded with a vision to transform the diagnostic industry, we combine cutting-edge technology
                                with compassionate care to deliver an experience that puts your health and convenience first.
                            </p>
                            <Link href="/book-test">
                                <Button>Book a Test Now</Button>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInRight} className="relative">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: "50K+", label: "Happy Patients" },
                                        { value: "100+", label: "Diagnostic Tests" },
                                        { value: "15+", label: "Cities Served" },
                                        { value: "24/7", label: "Customer Support" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                                                {stat.value}
                                            </div>
                                            <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...scrollAnimationProps} variants={staggerContainer} className="text-center mb-12">
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-1.5 bg-white text-teal-600 font-medium text-sm rounded-full mb-4"
                        >
                            Our Values
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900">
                            What We Stand For
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        {...scrollAnimationProps}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: "🎯",
                                title: "Accuracy",
                                description: "NABL certified labs ensuring precise and reliable test results every time.",
                            },
                            {
                                icon: "💚",
                                title: "Care",
                                description: "Trained phlebotomists who prioritize your comfort and well-being.",
                            },
                            {
                                icon: "⚡",
                                title: "Speed",
                                description: "Quick sample collection and fast report delivery within 24-48 hours.",
                            },
                            {
                                icon: "🔒",
                                title: "Privacy",
                                description: "Your health data is encrypted and kept completely confidential.",
                            },
                            {
                                icon: "💰",
                                title: "Affordability",
                                description: "Competitive pricing with no hidden charges or surprise fees.",
                            },
                            {
                                icon: "🤝",
                                title: "Trust",
                                description: "Building lasting relationships through transparency and reliability.",
                            },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-6 text-center border border-gray-100"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Experience Better Healthcare?
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Book your first test today and see why thousands trust us with their health
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-test">
                                <Button variant="secondary" size="lg">
                                    Book a Test
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
