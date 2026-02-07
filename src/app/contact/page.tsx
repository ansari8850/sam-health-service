"use client";

import React from "react";
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
            {/* Hero */}
            <section className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center text-white">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-white/90">We&apos;re here to help with any questions</p>
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
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-teal-600">{COMPANY_INFO.email}</p>
                                        <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                                    >
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
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        </div>
    );
}
