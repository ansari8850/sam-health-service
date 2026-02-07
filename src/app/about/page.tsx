"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scrollAnimationProps } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section with Team Image */}
            <section className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeInLeft} className="text-white">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
                            <p className="text-xl text-white/90 mb-6">
                                Committed to making quality healthcare accessible to everyone through innovation and care.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">50K+</div>
                                    <div className="text-white/80 text-sm">Patients Served</div>
                                </div>
                                <div className="w-px h-12 bg-white/30" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold">100+</div>
                                    <div className="text-white/80 text-sm">Lab Tests</div>
                                </div>
                                <div className="w-px h-12 bg-white/30" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold">24/7</div>
                                    <div className="text-white/80 text-sm">Support</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInRight} className="relative">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <Image
                                    src="/images/medical-team.png"
                                    alt="Our professional medical team"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
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

            {/* Lab Image Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        {...scrollAnimationProps}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/trusted-lab.png"
                                    alt="NABL certified laboratory"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-4 right-4 bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-2xl px-6 py-4 shadow-xl"
                                >
                                    <div className="text-2xl font-bold">NABL</div>
                                    <div className="text-sm opacity-90">Certified Labs</div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 font-medium text-sm rounded-full mb-4">
                                Quality Assurance
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                State-of-the-Art{" "}
                                <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                                    Laboratory
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our partner laboratories are equipped with the latest diagnostic equipment and are staffed by experienced technicians. Every sample is handled with utmost care and precision.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "NABL accredited partner labs",
                                    "Advanced diagnostic equipment",
                                    "Experienced lab technicians",
                                    "Stringent quality control protocols",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
                                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
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
