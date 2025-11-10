'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Zap, TrendingUp, Users, Network, Sparkles, ArrowRight } from 'lucide-react';
import { TradeFlowVisualization } from './TradeFlowVisualization';

const businessFeatures = [
    {
        icon: Zap,
        label: 'Instant Liquidity',
        description: 'Access funds in real-time, not weeks',
    },
    {
        icon: Shield,
        label: 'Secure & Compliant',
        description: 'Bank-grade security, fully regulated',
    },
    {
        icon: Network,
        label: 'Connected Ecosystem',
        description: 'Link all stakeholders seamlessly',
    },
    {
        icon: TrendingUp,
        label: 'Growth Enabled',
        description: 'Scale your business confidently',
    },
    {
        icon: Users,
        label: 'Inclusive Access',
        description: 'Financial tools for everyone',
    },
    {
        icon: Lock,
        label: 'Protected Data',
        description: 'Your information stays private',
    },
];

const benefits = [
    { stat: '60 Days → 24 Hours', label: 'Faster Access to Capital' },
    { stat: '70%', label: 'Lower Transaction Costs' },
    { stat: '100%', label: 'Transparent Tracking' },
    { stat: '24/7', label: 'Always Available' },
];

export function TechnologySection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-darker))] via-gray-900 to-[hsl(var(--navy-darker))] py-24 lg:py-32">
            {/* Animated background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                {/* Gradient orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400 border border-red-500/30"
                    >
                        <Sparkles className="h-4 w-4" />
                        How It Works
                    </motion.div>

                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        Your Business,{' '}
                        <span className="text-gradient bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Connected & Growing
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
                        See how our platform connects businesses, unlocks capital, and drives growth
                        across the entire value chain.
                    </p>
                </motion.div>

                {/* Trade Flow Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-20 max-w-5xl"
                >
                    <TradeFlowVisualization />

                    {/* Info caption */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-sm text-gray-400">
                            Watch how our platform transforms traditional 60-day payment cycles into instant liquidity
                        </p>
                    </motion.div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:bg-white/15">
                                    <div className="mb-4 text-3xl font-bold text-red-500">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-sm font-medium text-gray-300">
                                        {benefit.label}
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-red-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Business Features Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {businessFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:bg-white/15">
                                    <div className="mb-4 inline-flex rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {feature.label}
                                    </h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-12 backdrop-blur-sm">
                        <div className="max-w-2xl">
                            <h3 className="mb-3 text-3xl font-bold text-white">
                                Ready to Join the Network?
                            </h3>
                            <p className="text-lg text-gray-300">
                                Connect with thousands of businesses already transforming their operations
                            </p>
                        </div>
                        <motion.button
                            className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-red-600 via-pink-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-red-500/30"
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Today
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
