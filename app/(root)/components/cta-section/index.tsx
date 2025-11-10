'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTASection() {
    return (
        <section id="contact" className="bg-white py-24">
            <div className="container-custom">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-red-600 via-red-700 to-red-800 p-16 text-center shadow-2xl">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                    {/* Animated gradient overlay */}
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute inset-0 bg-linear-to-br from-red-500/20 via-transparent to-purple-500/20"
                        style={{ backgroundSize: '200% 200%' }}
                    />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                                Let&apos;s Build Financial Inclusion
                                <br />
                                <span className="text-red-200">One System at a Time</span>
                            </h2>
                            <p className="mx-auto mb-12 max-w-2xl text-lg text-red-100">
                                Ready to transform your supply chain or deploy impact capital?
                                Our team is here to help you get started.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                                >
                                    <Mail className="h-5 w-5" />
                                    Contact Our Team
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                                >
                                    <Phone className="h-5 w-5" />
                                    Book Partnership Call
                                    <ArrowRight className="h-5 w-5" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                </div>
            </div>
        </section>
    );
}
