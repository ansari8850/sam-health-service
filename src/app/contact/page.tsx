"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scrollAnimationProps } from "@/lib/animations";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Contact Form:", data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section with 3D Image */}
            <section className="relative bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-16 overflow-hidden">
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
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                            <p className="text-xl text-white/90 mb-6">
                                We&apos;re here to help with any questions. Our support team is available 24/7.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-medium">{COMPANY_INFO.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-medium">{COMPANY_INFO.email}</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInRight} className="relative hidden lg:block">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/contact-support.png"
                                    alt="Customer support team"
                                    width={400}
                                    height={400}
                                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={staggerContainer} {...scrollAnimationProps} className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our services? Need help booking a test? Our team is available 24/7 to assist you.
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-teal-600 font-medium text-lg">{COMPANY_INFO.phone}</p>
                                        <p className="text-gray-500 text-sm">Available 24/7</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-cyan-600">{COMPANY_INFO.email}</p>
                                        <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Office</h3>
                                        <p className="text-gray-600">{COMPANY_INFO.address}</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Hours</h3>
                                        <p className="text-gray-600">{COMPANY_INFO.workingHours}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={fadeInRight}>
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3"
                                    >
                                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Thank you! We&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <Input
                                        label="Full Name"
                                        placeholder="Your name"
                                        {...register("name", { required: "Name is required" })}
                                        error={errors.name?.message}
                                    />
                                    <Input
                                        label="Email"
                                        type="email"
                                        placeholder="your@email.com"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                                        })}
                                        error={errors.email?.message}
                                    />
                                    <Input
                                        label="Phone"
                                        placeholder="Your phone number"
                                        {...register("phone", { required: "Phone is required" })}
                                        error={errors.phone?.message}
                                    />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help?"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                            {...register("message", { required: "Message is required" })}
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                                    </div>
                                    <Button type="submit" fullWidth isLoading={isSubmitting}>
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...scrollAnimationProps}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900">
                            Quick Actions
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 mt-2">
                            Get instant help or explore our services
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        {...scrollAnimationProps}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                ),
                                title: "Book a Test",
                                description: "Schedule your lab test with home collection",
                                href: "/book-test",
                                color: "from-teal-500 to-cyan-500",
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "FAQs",
                                description: "Find answers to common questions",
                                href: "/support",
                                color: "from-cyan-500 to-blue-500",
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "About Us",
                                description: "Learn more about our mission and team",
                                href: "/about",
                                color: "from-green-500 to-teal-500",
                            },
                        ].map((action, i) => (
                            <motion.a
                                key={i}
                                href={action.href}
                                variants={fadeInUp}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    {action.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                                    {action.title}
                                </h3>
                                <p className="text-gray-600">{action.description}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
