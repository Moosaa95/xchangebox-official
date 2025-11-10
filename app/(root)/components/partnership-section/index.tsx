'use client';

import { motion } from 'framer-motion';
import { Factory, Package, Heart, ArrowRight } from 'lucide-react';

const partnershipModels = [
    {
        icon: Factory,
        title: 'Factory Partnership',
        description:
            'Enable your suppliers with instant financing. Turn purchase orders into liquidity.',
        benefits: ['Supply chain finance', 'Invoice discounting', 'Real-time settlement'],
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: Package,
        title: 'Input/Fertilizer Partnership',
        description:
            'Provide farmers with immediate access to inputs through structured financing.',
        benefits: ['Input financing', 'Seasonal credit', 'Harvest-linked repayment'],
        color: 'from-green-500 to-emerald-600',
    },
    {
        icon: Heart,
        title: 'Impact/Foundation Partnership',
        description:
            'Deploy capital with transparency and measurable impact across value chains.',
        benefits: ['Impact tracking', 'ESG compliance', 'Community development'],
        color: 'from-pink-500 to-rose-600',
    },
];

export function PartnershipSection() {
    return (
        <section id="partners" className="bg-white py-24">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Let&apos;s Build{' '}
                        <span className="text-gradient bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            Liquidity Together
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Choose the partnership model that fits your impact goals and operational needs.
                    </p>
                </motion.div>

                {/* Partnership Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {partnershipModels.map((model, index) => {
                        const Icon = model.icon;
                        return (
                            <motion.div
                                key={model.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:border-red-500 hover:shadow-xl">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div
                                            className={`inline-flex rounded-xl bg-gradient-to-br ${model.color} p-4`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title and Description */}
                                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{model.title}</h3>
                                    <p className="mb-6 text-gray-600">{model.description}</p>

                                    {/* Benefits */}
                                    <ul className="mb-8 space-y-2">
                                        {model.benefits.map((benefit) => (
                                            <li key={benefit} className="flex items-start gap-2 text-sm">
                                                <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More */}
                                    <button className="group/btn inline-flex items-center gap-2 font-semibold text-gray-900 transition-colors hover:text-red-600">
                                        Learn More
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                    </button>

                                    {/* Hover gradient effect */}
                                    <div
                                        className={`absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${model.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-12 text-center">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                        <div className="relative z-10">
                            <h3 className="mb-4 text-3xl font-bold text-white">
                                Get onboarded and launch your first transactions in 30 days
                            </h3>
                            <p className="mb-8 text-lg text-red-100">
                                Our partnership team will guide you through every step of integration.
                            </p>
                            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-lg">
                                Schedule a Workshop
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
