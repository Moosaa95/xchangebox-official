'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, MapPin, Coins, Heart, Wheat, Factory, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

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
        value: 5000,
        suffix: '+',
        label: 'Trades Financed',
        prefix: '',
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
        label: 'Nigeria States Active',
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

const sdgGoals = [
    {
        image: '/images/no-poverty.png',
        title: 'No Poverty',
        number: 1,
        description: 'Providing access to financial services for underserved communities',
    },
    {
        image: '/images/gender-equality.png',
        title: 'Gender Equality',
        number: 5,
        description: '70% of our programs empower women entrepreneurs',
    },
    {
        image: '/images/decent-work-economic-growth.png',
        title: 'Decent Work and Economic Growth',
        number: 8,
        description: 'Creating sustainable livelihoods through trade finance',
    },
    {
        image: '/images/industrial-innovation.png',
        title: 'Industry, Innovation and Infrastructure',
        number: 9,
        description: 'Building digital infrastructure for financial inclusion',
    },
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero with Background Image */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/farm4factory-partnership-model.png"
                        alt="Impact"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-[hsl(var(--navy-darker))]/95 via-[hsl(var(--navy-dark))]/90 to-[hsl(var(--navy-darker))]/95" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                                Impact You Can{' '}
                                <span className="bg-linear-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                    Measure
                                </span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-300">
                                We don't just move money — we move opportunity. Here's the real-world impact we're creating across Nigeria.
                            </p>
                        </motion.div>

                        {/* Right - Image Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="group relative h-48 overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/kidashi-woman.jpg"
                                    alt="Women Empowerment"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-sm font-semibold">Women Empowerment</div>
                                </div>
                            </div>
                            <div className="group relative h-48 overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/tractor.png"
                                    alt="Agricultural Impact"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-sm font-semibold">Agricultural Growth</div>
                                </div>
                            </div>
                            <div className="group relative col-span-2 h-48 overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/impact-one.jpg"
                                    alt="Digital Infrastructure"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-sm font-semibold">Digital Infrastructure</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                                            <div className={`inline-flex rounded-xl bg-linear-to-br ${stat.color} p-3`}>
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

            {/* Impact Areas with Images */}
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
                        {impactAreas.map((area, index) => {
                            const images = [
                                '/images/financial-inclusion.png',
                                '/images/kidashi-woman.jpg',
                                '/images/supply-chain.jpg',
                                '/images/job-creation.jpg'
                            ];
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-red-500 hover:shadow-xl">
                                        {/* Image Header */}
                                        <div className="relative h-56 w-full overflow-hidden">
                                            <Image
                                                src={images[index]}
                                                alt={area.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                                            <div className="absolute bottom-4 left-6 text-6xl">{area.icon}</div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-8">
                                            <h3 className="mb-3 text-2xl font-bold text-gray-900">{area.title}</h3>
                                            <p className="mb-6 text-gray-600">{area.description}</p>
                                            <div className="space-y-3">
                                                {area.metrics.map((metric, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className={`h-2 w-2 rounded-full bg-linear-to-r ${area.color}`} />
                                                        <span className="text-sm font-medium text-gray-700">{metric}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SDG Impact Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="absolute inset-0 bg-linear-to-r from-green-500/10 via-transparent to-blue-500/10" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                            Aligned with{' '}
                            <span className="bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                                UN Sustainable Development Goals
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-300">
                            Our impact extends beyond business — we're contributing to global sustainability goals
                        </p>
                    </motion.div>

                    <div className="relative mx-auto max-w-7xl px-4">
                        {/* Circular Layout Container */}
                        <div className="relative mx-auto" style={{ minHeight: '1000px', maxWidth: '1100px' }}>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                {/* Center Infographic Image */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3, type: "spring" }}
                                    className="relative z-10"
                                >
                                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-8 border-white/30 bg-white shadow-2xl md:h-72 md:w-72 lg:h-96 lg:w-96">
                                        <Image
                                            src="/images/sustainable_development_goals_infographic.jpg"
                                            alt="UN Sustainable Development Goals"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-green-500/30 to-blue-500/30 blur-3xl" />
                                </motion.div>

                                {/* SDG Goals in Circle */}
                                {sdgGoals.map((goal, index) => {
                                    const angle = index * 90; // 0°, 90°, 180°, 270°
                                    const radius = 380; // Distance from center

                                    const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius;
                                    const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius;

                                    return (
                                        <motion.div
                                            key={goal.title}
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.6 + index * 0.15,
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 15
                                            }}
                                            className="group absolute"
                                            style={{
                                                left: `calc(30% + ${x}px)`,
                                                top: `calc(30% + ${y}px)`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div className="relative">
                                                {/* SDG Image Card */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className="relative h-44 w-44 cursor-pointer overflow-hidden rounded-2xl border-4 border-white/50 bg-white shadow-2xl transition-all duration-300 group-hover:border-white/80 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                                                >
                                                    <Image
                                                        src={goal.image}
                                                        alt={goal.title}
                                                        fill
                                                        className="object-contain p-2"
                                                        priority
                                                    />
                                                    {/* Goal Number Badge */}
                                                    <div className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-gray-900 shadow-lg">
                                                        {goal.number}
                                                    </div>
                                                </motion.div>

                                                {/* Connecting Line */}
                                                <div
                                                    className="pointer-events-none absolute -z-10"
                                                    style={{
                                                        left: '50%',
                                                        top: '50%',
                                                        width: `${radius}px`,
                                                        height: '2px',
                                                        background: 'linear-gradient(to left, rgba(255,255,255,0.3), transparent)',
                                                        transformOrigin: 'right center',
                                                        transform: `translate(0, -50%) rotate(${angle - 90}deg)`,
                                                    }}
                                                />

                                                {/* Info Card on Hover */}
                                                <div
                                                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
                                                    style={{
                                                        [index === 0 || index === 3 ? 'bottom' : 'top']: '100%',
                                                        [index === 0 || index === 3 ? 'marginBottom' : 'marginTop']: '1rem',
                                                    }}
                                                >
                                                    <div className="w-72 rounded-2xl border-2 border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-md">
                                                        <div className="mb-3 flex items-center gap-2">
                                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-blue-600 text-sm font-bold text-white">
                                                                {goal.number}
                                                            </div>
                                                            <h4 className="text-base font-bold text-gray-900">{goal.title}</h4>
                                                        </div>
                                                        <p className="text-sm leading-relaxed text-gray-700">{goal.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Additional Context */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            className="mt-12 text-center"
                        >
                            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                                <p className="text-lg leading-relaxed text-gray-300">
                                    By aligning our operations with the UN Sustainable Development Goals, we ensure that every transaction,
                                    every partnership, and every innovation contributes to building a more equitable and sustainable future for Nigeria and beyond.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials with Background Images */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/kidashi-woman-two.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/95" />
                </div>

                <div className="container-custom relative z-10">
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
                        {testimonials.map((testimonial, index) => {
                            const images = [
                                '/images/farm4factory-partnership-model.png',
                                '/images/kidashi-woman.jpg',
                                '/images/tractor.png'
                            ];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:border-red-500 hover:shadow-2xl">
                                        {/* Image with Avatar Overlay */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            {/* <Image
                                                src={images[index]}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            /> */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow-lg">
                                                    {testimonial.avatar}
                                                </div>
                                                <div className="text-white">
                                                    <div className="font-semibold">{testimonial.author}</div>
                                                    <div className="text-sm text-gray-300">{testimonial.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Quote */}
                                        <div className="p-8">
                                            <blockquote className="text-lg italic text-gray-700">
                                                "{testimonial.quote}"
                                            </blockquote>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA with Background Image */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/payreppos.jpg"
                        alt="Join Us"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-red-600/95 to-red-700/95" />
                </div>
                <div className="container-custom relative z-10">
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
