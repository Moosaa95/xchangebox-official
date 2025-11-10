'use client';
import { motion } from 'framer-motion';
import { Factory, Package, Heart, Handshake, ArrowRight, CheckCircle2, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const partnershipModels = [
    {
        icon: Factory,
        title: 'Factory Partnership',
        description: 'Enable your suppliers with instant financing. Turn purchase orders into liquidity.',
        benefits: [
            'Supply chain finance for your network',
            'Invoice discounting and factoring',
            'Real-time settlement and tracking',
            'Reduce supplier attrition',
        ],
        color: 'from-blue-500 to-indigo-600',
        emoji: '🏭',
    },
    {
        icon: Package,
        title: 'Input/Fertilizer Partnership',
        description: 'Provide farmers with immediate access to inputs through structured financing.',
        benefits: [
            'Input financing programs',
            'Seasonal credit facilities',
            'Harvest-linked repayment',
            'Quality assurance integration',
        ],
        color: 'from-green-500 to-emerald-600',
        emoji: '🌾',
    },
    {
        icon: Heart,
        title: 'Impact/Foundation Partnership',
        description: 'Deploy capital with transparency and measurable impact across value chains.',
        benefits: [
            'Impact tracking and reporting',
            'ESG compliance and monitoring',
            'Community development programs',
            'Transparent fund deployment',
        ],
        color: 'from-pink-500 to-rose-600',
        emoji: '💝',
    },
    {
        icon: Handshake,
        title: 'Financial Institution Partnership',
        description: 'White-label our platform or integrate our APIs into your existing systems.',
        benefits: [
            'White-label solutions',
            'API integration',
            'Co-branded products',
            'Revenue sharing models',
        ],
        color: 'from-purple-500 to-violet-600',
        emoji: '🤝',
    },
];

const existingPartners = [
    { name: 'PayRep MFB', category: 'Microfinance', logo: '🏦' },
    { name: 'NDPC', category: 'Regulatory', logo: '🛡️' },
    { name: 'Agricultural Inputs Co.', category: 'Agribusiness', logo: '🌱' },
    { name: 'Processing Factory Ltd.', category: 'Manufacturing', logo: '🏭' },
    { name: 'Impact Foundation', category: 'Development', logo: '💚' },
    { name: 'Transport Solutions', category: 'Mobility', logo: '🚛' },
];

const process = [
    {
        step: '1',
        title: 'Initial Consultation',
        description: 'We discuss your needs, goals, and potential partnership models',
        icon: '💬',
    },
    {
        step: '2',
        title: 'Custom Proposal',
        description: 'We design a partnership structure that works for your organization',
        icon: '📋',
    },
    {
        step: '3',
        title: 'Integration & Setup',
        description: 'Our team handles all technical integration and onboarding',
        icon: '⚙️',
    },
    {
        step: '4',
        title: 'Launch & Scale',
        description: 'Go live and scale impact with ongoing support from our team',
        icon: '🚀',
    },
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Let's Build{' '}
                            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Liquidity Together
                            </span>
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            Whether you're a factory, investor, foundation, or financial institution — we have a partnership model that fits your goals.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50"
                            >
                                Become a Partner
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#models"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                            >
                                Explore Models
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Models */}
            <section id="models" className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Partnership Models
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Choose the model that fits your impact goals and operational needs
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
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
                                    <div className="relative h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-red-500 hover:shadow-xl">
                                        <div className="mb-6 flex items-center gap-4">
                                            <div className="text-5xl">{model.emoji}</div>
                                            <div className={`rounded-xl bg-gradient-to-br ${model.color} p-3`}>
                                                <Icon className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="mb-3 text-2xl font-bold text-gray-900">{model.title}</h3>
                                        <p className="mb-6 text-gray-600">{model.description}</p>
                                        <div className="space-y-3">
                                            {model.benefits.map((benefit) => (
                                                <div key={benefit} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Existing Partners */}
            <section className="bg-gray-50 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Join our growing network of partners across finance, agriculture, and impact
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {existingPartners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="flex flex-col items-center rounded-xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-red-500 hover:shadow-lg">
                                    <div className="mb-3 text-4xl">{partner.logo}</div>
                                    <div className="text-sm font-semibold text-gray-900">{partner.name}</div>
                                    <div className="text-xs text-gray-500">{partner.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Process */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            How It Works
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Our partnership process is designed to get you from conversation to impact in weeks, not months
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative text-center"
                            >
                                <div className="mb-6 text-6xl">{item.icon}</div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                                    {item.step}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                {index < process.length - 1 && (
                                    <div className="absolute right-0 top-12 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                                        <ArrowRight className="h-8 w-8 text-gray-300" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-red-600 to-red-700 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mx-auto max-w-4xl rounded-3xl bg-white/10 p-12 text-center backdrop-blur-sm">
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            <div className="relative">
                                <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                                    Ready to Partner?
                                </h2>
                                <p className="mb-8 text-xl text-red-100">
                                    Get onboarded and launch your first transactions in 30 days. Our partnership team will guide you through every step.
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                                    >
                                        Schedule a Call
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                                    >
                                        Explore Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
