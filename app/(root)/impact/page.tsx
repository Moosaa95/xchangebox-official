'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, MapPin, Coins, Heart, Wheat, Factory, Award } from 'lucide-react';
import Link from 'next/link';

interface AnimatedCounterProps {
    value: number;
    suffix: string;
    duration?: number;
}

function AnimatedCounter({ value, suffix, duration = 2000 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, value, duration]);

    return (
        <div ref={ref} className="inline-flex items-baseline">
            <span className="tabular-nums">{count.toLocaleString()}</span>
            <span>{suffix}</span>
        </div>
    );
}

const stats = [
    {
        icon: Coins,
        value: 200,
        suffix: 'M+',
        label: 'Trades Financed',
        prefix: '₦',
        color: 'from-green-500 to-emerald-600',
    },
    {
        icon: Users,
        value: 1000,
        suffix: '+',
        label: 'Active Partners',
        prefix: '',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: Heart,
        value: 70,
        suffix: '%',
        label: 'Women-Led Programs',
        prefix: '',
        color: 'from-pink-500 to-rose-600',
    },
    {
        icon: MapPin,
        value: 4,
        suffix: '+',
        label: 'States Active',
        prefix: '',
        color: 'from-purple-500 to-violet-600',
    },
];

const impactAreas = [
    {
        title: 'Financial Inclusion',
        description: 'Bringing formal finance to underserved communities',
        icon: '💰',
        metrics: ['1,000+ farmers onboarded', 'Average loan size: ₦500K', '95% repayment rate'],
        color: 'from-green-500 to-emerald-600',
    },
    {
        title: 'Women Empowerment',
        description: 'Supporting women entrepreneurs and savings groups',
        icon: '👩‍💼',
        metrics: ['70% women participation', '500+ savings circles', 'Average monthly savings: ₦50K'],
        color: 'from-pink-500 to-rose-600',
    },
    {
        title: 'Supply Chain Efficiency',
        description: 'Reducing payment cycles and unlocking liquidity',
        icon: '📦',
        metrics: ['60-90 days → 24 hours', '₦200M+ financed', '50+ factories partnered'],
        color: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Job Creation',
        description: 'Enabling economic activity and employment',
        icon: '💼',
        metrics: ['2,000+ indirect jobs', '100+ direct employees', 'Growing 50% YoY'],
        color: 'from-orange-500 to-red-600',
    },
];

const testimonials = [
    {
        quote: "XchangeBox transformed our entire supply chain. What used to take 60 days now happens in 24 hours. Our farmers are happier, and we have better access to quality produce.",
        author: "Factory Manager",
        role: "Food Processing Company",
        avatar: "🏭",
    },
    {
        quote: "Before Kidashi, I had to borrow from informal lenders at 20% monthly interest. Now I have access to fair credit through my savings circle, and I've grown my business 3x.",
        author: "Small Business Owner",
        role: "Women Entrepreneur",
        avatar: "👩‍💼",
    },
    {
        quote: "Farm4Factory gave me the working capital to expand my cassava farm. I no longer wait months for payment. This changed everything for my family.",
        author: "Cassava Farmer",
        role: "Ogun State",
        avatar: "👨‍🌾",
    },
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-green-500/10" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Impact You Can{' '}
                            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                Measure
                            </span>
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            We don't just move money — we move opportunity. Here's the real-world impact we're creating across Nigeria.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="relative h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-red-500 hover:shadow-xl">
                                        <div className="mb-6">
                                            <div className={`inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-3`}>
                                                <Icon className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <div className="mb-2 text-4xl font-bold text-gray-900 lg:text-5xl">
                                            {stat.prefix}
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Areas */}
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
                            Our Impact Areas
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Four key ways we're transforming financial inclusion
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {impactAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-red-500 hover:shadow-xl">
                                    <div className="mb-6 text-6xl">{area.icon}</div>
                                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{area.title}</h3>
                                    <p className="mb-6 text-gray-600">{area.description}</p>
                                    <div className="space-y-3">
                                        {area.metrics.map((metric, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${area.color}`} />
                                                <span className="text-sm font-medium text-gray-700">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
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
                            Real Stories, Real Impact
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Hear from the people we serve
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-red-500 hover:shadow-xl">
                                    <div className="mb-6 text-5xl">{testimonial.avatar}</div>
                                    <blockquote className="mb-6 text-lg italic text-gray-700">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
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
                        className="text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                            Be Part of the Impact
                        </h2>
                        <p className="mb-8 text-xl text-red-100">
                            Whether you're an investor, partner, or changemaker — join us in building financial inclusion
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/partners"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                            >
                                Become a Partner
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
