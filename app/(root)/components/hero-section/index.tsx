'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-50 to-white pt-20"
        >
            <div className="container-custom relative z-10 flex min-h-screen items-center py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
                        >
                            Connecting Trade,
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">
                                Finance & Inclusion
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg leading-relaxed text-gray-600 sm:text-xl lg:max-w-lg"
                        >
                            We build financial and digital infrastructure that powers real-world growth from farms to factories to financial systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Link href="/products" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
                                Explore Our Products
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/partners" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-red-600 hover:bg-red-50">
                                Partner With Us
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-6 pt-4"
                        >
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-gray-900">₦5,000+</span>
                                <span className="text-sm text-gray-600">Trade Cycles Financed</span>
                            </div>
                            <div className="h-12 w-px bg-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-gray-900">1,000+</span>
                                <span className="text-sm text-gray-600">Partners Empowered</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Bento Grid Images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Bento Grid Container */}
                        <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[600px]">
                            {/* Large Featured Image - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="col-span-4 row-span-3 relative rounded-2xl overflow-hidden shadow-xl group"
                            >
                                <Image
                                    src="/images/kidashi-woman.jpg"
                                    alt="Women Financial Inclusion"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-semibold text-lg">Kidashi</p>
                                        <p className="text-sm text-gray-200">Financial Inclusion</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Medium Image - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <Image
                                    src="/images/payreppos.jpg"
                                    alt="Payment Solutions"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-red-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-3 left-3 text-white">
                                        <p className="font-semibold">Payments</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Small Accent Card - Right Middle */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="col-span-2 row-span-1 relative rounded-xl overflow-hidden bg-linear-to-br from-red-600 to-red-700 shadow-lg flex items-center justify-center"
                            >
                                <div className="text-center text-white p-4">
                                    <p className="text-3xl font-bold">3</p>
                                    <p className="text-xs font-medium">Products</p>
                                </div>
                            </motion.div>

                            {/* Medium Image - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="col-span-2 row-span-3 relative rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <Image
                                    src="/images/tractor.png"
                                    alt="Agricultural Technology"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-green-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-3 left-3 text-white">
                                        <p className="font-semibold">Farm4Factory</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Large Image - Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="col-span-4 row-span-3 relative rounded-2xl overflow-hidden shadow-xl group"
                            >
                                <Image
                                    src="/images/farm4factory-partnership-model.png"
                                    alt="Partnership Model"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-semibold text-lg">Partnership</p>
                                        <p className="text-sm text-gray-200">Collaborative Growth</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] border border-gray-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-linear-to-br from-red-600 to-red-500 flex items-center justify-center">
                                    <ArrowRight className="h-6 w-6 text-white -rotate-45" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Empowering Growth</p>
                                    <p className="text-xs text-gray-600">Across all sectors</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
