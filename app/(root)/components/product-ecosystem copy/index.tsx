'use client';

import { motion } from 'framer-motion';
import { Wheat, Users, Database, ArrowRight, Sparkles } from 'lucide-react';
import { EnhancedProductCard } from './EnhancedProductCard';

const products = [
    {
        name: 'Farm4Factory',
        tagline: 'Turning supplies into bankable assets',
        category: 'Agriculture Finance',
        icon: Wheat,
        image: '/images/farm4factory-partnership-model.png',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        stats: { label: '₦20M+ trades financed', value: '₦20M+' },
        features: [
            'Invoice-backed trade finance',
            'Real-time supply chain tracking',
            'Automated credit scoring'
        ],
    },
    {
        name: 'Kidashi',
        tagline: 'Empowering women through trust-circle finance',
        category: 'Financial Inclusion',
        icon: Users,
        image: '/images/kidashi-woman.jpg',
        color: 'from-pink-500 to-rose-600',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        stats: { label: 'Women-led programs', value: '70%' },
        features: [
            'Community-based lending circles',
            'Flexible repayment terms',
            'Financial literacy programs'
        ],
    },
    {
        name: 'Shinobi Core',
        tagline: 'The digital backbone for microfinance institutions',
        category: 'Banking Infrastructure',
        icon: Database,
        image: '/images/payreppos.jpg',
        color: 'from-purple-500 to-violet-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        stats: { label: 'Complete banking stack', value: 'All-in-One' },
        features: [
            'Core banking system',
            'Loan management platform',
            'Compliance & reporting tools'
        ],
    },
];

export function ProductEcosystem() {
    return (
        <section id="products" className="relative bg-linear-to-b from-gray-50 via-white to-gray-50 py-24 lg:py-32 overflow-hidden">
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
                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Product Suite
                    </motion.div>

                    <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        An Ecosystem,{' '}
                        <span className="text-gradient bg-linear-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Not Just an App
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                        Three interconnected platforms powering trade finance, financial inclusion,
                        and digital infrastructure across emerging markets.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                    {products.map((product, index) => (
                        <EnhancedProductCard
                            key={product.name}
                            {...product}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-6 rounded-3xl bg-linear-to-br from-red-600 via-pink-600 to-purple-600 p-12 shadow-2xl">
                        <div className="max-w-2xl">
                            <h3 className="mb-3 text-3xl font-bold text-white">
                                Ready to Transform Your Business?
                            </h3>
                            <p className="text-lg text-white/90">
                                Join thousands of businesses leveraging our ecosystem to unlock growth
                            </p>
                        </div>
                        <motion.button
                            className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore All Products
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
