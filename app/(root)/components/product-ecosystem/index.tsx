'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, ArrowRight, Sparkles, Target, Heart, Zap } from 'lucide-react';

const solutions = [
    {
        name: 'Trade Finance',
        tagline: 'Turning supplies into bankable assets',
        description: 'Invoice-backed financing that enables businesses to trade without capital constraints',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        impact: '5,000+ trades financed',
        features: [
            'Invoice-backed financing',
            'Supply chain tracking',
            'Automated credit scoring'
        ],
    },
    {
        name: 'Community Lending',
        tagline: 'Empowering through trust circles',
        description: 'Flexible group-based lending that promotes financial inclusion and women empowerment',
        icon: Users,
        color: 'from-pink-500 to-rose-600',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        impact: '70% women-led programs',
        features: [
            'Trust-circle finance',
            'Flexible repayment terms',
            'Financial literacy support'
        ],
    },
    {
        name: 'Digital Infrastructure',
        tagline: 'Banking technology for all',
        description: 'Complete digital banking infrastructure powering microfinance institutions',
        icon: Building2,
        color: 'from-purple-500 to-violet-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        impact: 'All-in-one banking stack',
        features: [
            'Core banking system',
            'Loan management',
            'Compliance tools'
        ],
    },
];

const impactAreas = [
    {
        icon: Target,
        title: 'Financial Inclusion',
        metric: '1,000+',
        description: 'Individuals accessing financial services',
        color: 'text-red-600',
        bgColor: 'bg-red-100',
    },
    {
        icon: Heart,
        title: 'Community Impact',
        metric: '500+',
        description: 'Communities strengthened through trade',
        color: 'text-pink-600',
        bgColor: 'bg-pink-100',
    },
    {
        icon: Zap,
        title: 'Economic Growth',
        metric: '5,000+',
        description: 'In trade volume enabled',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
];

export function ProductEcosystem() {
    return (
        <section id="solutions" className="relative bg-linear-to-b from-gray-50 via-white to-gray-50 py-24 lg:py-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700"
                    >
                        <Sparkles className="h-4 w-4" />
                        Solutions & Impact
                    </motion.div>

                    <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        Powering Growth,{' '}
                        <span className="text-gradient bg-linear-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Creating Impact
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        Three core solutions driving financial inclusion, enabling trade, and building
                        digital infrastructure across emerging markets.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 mb-16">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <motion.div
                                key={solution.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative"
                            >
                                <div className={`h-full rounded-2xl border-2 ${solution.borderColor} ${solution.bgColor} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                                    {/* Icon */}
                                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color} shadow-lg`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                        {solution.name}
                                    </h3>
                                    <p className="mb-4 text-sm font-semibold text-gray-600">
                                        {solution.tagline}
                                    </p>
                                    <p className="mb-6 text-gray-600">
                                        {solution.description}
                                    </p>

                                    {/* Impact Badge */}
                                    <div className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm">
                                        {solution.impact}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Impact Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20"
                >
                    <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        Our Impact By The Numbers
                    </h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        {impactAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group rounded-2xl border-2 border-gray-200 bg-white p-8 text-center shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                                >
                                    <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${area.bgColor}`}>
                                        <Icon className={`h-8 w-8 ${area.color}`} />
                                    </div>
                                    <div className={`mb-2 text-4xl font-bold ${area.color}`}>
                                        {area.metric}
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold text-gray-900">
                                        {area.title}
                                    </h4>
                                    <p className="text-gray-600">
                                        {area.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-6 rounded-3xl bg-linear-to-br from-red-600 via-pink-600 to-purple-600 p-12 shadow-2xl">
                        <div className="max-w-2xl">
                            <h3 className="mb-3 text-3xl font-bold text-white">
                                Ready to Transform Your Business?
                            </h3>
                            <p className="text-lg text-white/90">
                                Join thousands leveraging our solutions to unlock growth and create impact
                            </p>
                        </div>
                        <motion.button
                            className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
