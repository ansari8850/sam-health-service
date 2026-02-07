"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, accordionVariants, iconRotate, scrollAnimationProps } from "@/lib/animations";
import { FAQ_DATA, COMPANY_INFO } from "@/lib/constants";

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({
    question,
    answer,
    isOpen,
    onToggle,
}) => (
    <div className="border-b border-gray-200 last:border-0">
        <button
            onClick={onToggle}
            className="w-full py-6 flex items-center justify-between text-left gap-4 hover:bg-gray-50/50 transition-colors px-6"
        >
            <span className="font-semibold text-gray-900 text-lg">{question}</span>
            <motion.span
                variants={iconRotate}
                animate={isOpen ? "open" : "closed"}
                className="flex-shrink-0 text-teal-500"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </motion.span>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{answer}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function SupportPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support & FAQ</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Find answers to common questions or reach out to our support team
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Help Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-gray-600">Choose your preferred way to contact us</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        {...scrollAnimationProps}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                ),
                                title: "Call Us",
                                description: "Speak directly with our support team",
                                action: COMPANY_INFO.phone,
                                href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                ),
                                title: "WhatsApp",
                                description: "Chat with us instantly",
                                action: "Start Chat",
                                href: `https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, "")}`,
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                                title: "Email",
                                description: "We respond within 24 hours",
                                action: COMPANY_INFO.email,
                                href: `mailto:${COMPANY_INFO.email}`,
                            },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                variants={fadeInUp}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-teal-600 group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                                <span className="inline-flex items-center gap-1 text-teal-600 font-semibold group-hover:text-teal-700">
                                    {item.action}
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...scrollAnimationProps} variants={fadeInUp} className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg">
                            Can&apos;t find what you&apos;re looking for? Contact our support team.
                        </p>
                    </motion.div>

                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInUp}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        {FAQ_DATA.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>

                    {/* Still Need Help */}
                    <motion.div
                        {...scrollAnimationProps}
                        variants={fadeInUp}
                        className="mt-12 text-center"
                    >
                        <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-3">Still Need Help?</h3>
                            <p className="text-white/90 mb-6">
                                Our support team is available 24/7 to assist you
                            </p>
                            <a
                                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
