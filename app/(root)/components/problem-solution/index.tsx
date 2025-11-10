'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Clock, TrendingDown, Link2Off, Lock } from 'lucide-react';

const problems = [
    {
        icon: Clock,
        label: 'Delayed Payments',
        description: '30-90 days wait',
        color: 'from-red-500 to-red-600'
    },
    {
        icon: Lock,
        label: 'Frozen Capital',
        description: 'Cash flow crisis',
        color: 'from-orange-500 to-orange-600'
    },
    {
        icon: Link2Off,
        label: 'Broken Supply Chains',
        description: 'Disconnected partners',
        color: 'from-pink-500 to-pink-600'
    },
    {
        icon: TrendingDown,
        label: 'Limited Access',
        description: 'Excluded markets',
        color: 'from-purple-500 to-purple-600'
    },
];

const solutions = [
    {
        label: 'Instant Trade Finance',
        description: 'Same-day liquidity',
        color: 'from-green-500 to-emerald-600'
    },
    {
        label: 'Invoice-Backed Lending',
        description: 'Convert receivables to cash',
        color: 'from-blue-500 to-blue-600'
    },
    {
        label: 'Real-Time Settlement',
        description: 'Automated payments',
        color: 'from-teal-500 to-teal-600'
    },
    {
        label: 'Inclusive Access',
        description: 'Open market connections',
        color: 'from-cyan-500 to-cyan-600'
    },
];

export function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [showConnections, setShowConnections] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setShowConnections(true), 1200);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <section ref={ref} id="about" className="relative bg-linear-to-b from-white to-gray-50 py-24 overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            From Challenge to <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Solution</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transforming barriers into opportunities with digital infrastructure
                        </p>
                    </motion.div>
                </div>

                {/* Flow Diagram */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                        {/* PROBLEMS - Left Side */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                                    <AlertCircle className="h-4 w-4" />
                                    The Challenge
                                </span>
                            </motion.div>

                            {problems.map((problem, index) => {
                                const Icon = problem.icon;
                                return (
                                    <motion.div
                                        key={problem.label}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative group"
                                    >
                                        {/* Node Box */}
                                        <div className="relative bg-white rounded-xl p-5 shadow-lg border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl">
                                            <div className="flex items-start gap-4">
                                                {/* Icon Circle */}
                                                <div className={`shrink-0 h-12 w-12 rounded-lg bg-linear-to-br ${problem.color} flex items-center justify-center`}>
                                                    <Icon className="h-6 w-6 text-white" />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{problem.label}</h3>
                                                    <p className="text-sm text-gray-600">{problem.description}</p>
                                                </div>
                                            </div>

                                            {/* Connection Point - Right */}
                                            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg transform -translate-y-1/2 hidden lg:block" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CENTER - Transformation Arrow */}
                        <div className="hidden lg:flex flex-col items-center justify-center px-8">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={showConnections ? { scale: 1, rotate: 0 } : {}}
                                transition={{ duration: 0.8, type: "spring" }}
                                className="relative"
                            >
                                {/* Vertical connecting lines with animation */}
                                <svg width="120" height="400" className="absolute -left-[60px] top-0" style={{ overflow: 'visible' }}>
                                    {problems.map((_, index) => {
                                        const startY = 60 + (index * 110);
                                        const endY = 60 + (index * 110);

                                        return (
                                            <motion.path
                                                key={index}
                                                d={`M 0 ${startY} Q 60 ${startY} 120 ${endY}`}
                                                stroke="url(#gradient)"
                                                strokeWidth="3"
                                                fill="none"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={showConnections ? { pathLength: 1, opacity: 1 } : {}}
                                                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                            />
                                        );
                                    })}

                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#ef4444" />
                                            <stop offset="100%" stopColor="#10b981" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Center Transform Box */}
                                <div className="relative z-10 bg-linear-to-r from-red-600 to-green-600 rounded-2xl p-8 shadow-2xl">
                                    <div className="text-center text-white">
                                        <motion.div
                                            animate={{ rotate: showConnections ? 360 : 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <ArrowRight className="h-12 w-12 mx-auto mb-3" />
                                        </motion.div>
                                        <h3 className="font-bold text-lg mb-1">XchangeBox</h3>
                                        <p className="text-sm text-white/90">Digital Rails</p>
                                    </div>
                                </div>

                                {/* Animated particles */}
                                {showConnections && [0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                                        initial={{ x: -60, y: 60 + i * 110, scale: 0 }}
                                        animate={{
                                            x: 60,
                                            y: 60 + i * 110,
                                            scale: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.2,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* SOLUTIONS - Right Side */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={showConnections ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="mb-6 lg:text-right"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Our Solution
                                </span>
                            </motion.div>

                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={solution.label}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={showConnections ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Node Box */}
                                    <div className="relative bg-white rounded-xl p-5 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
                                        <div className="flex items-start gap-4">
                                            {/* Icon Circle */}
                                            <div className={`shrink-0 h-12 w-12 rounded-lg bg-linear-to-br ${solution.color} flex items-center justify-center`}>
                                                <CheckCircle2 className="h-6 w-6 text-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900 mb-1">{solution.label}</h3>
                                                <p className="text-sm text-gray-600">{solution.description}</p>
                                            </div>
                                        </div>

                                        {/* Connection Point - Left */}
                                        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg transform -translate-y-1/2 hidden lg:block" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Arrows */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={showConnections ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:hidden flex justify-center my-8"
                    >
                        <div className="bg-linear-to-r from-red-600 to-green-600 rounded-full p-6 shadow-xl">
                            <ArrowRight className="h-8 w-8 text-white rotate-90" />
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={showConnections ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="text-center mt-16"
                >
                    <button className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all">
                        See How It Works
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
