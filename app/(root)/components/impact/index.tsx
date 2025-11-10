'use client';

import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, MapPin, Coins, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Stat {
    icon: typeof TrendingUp;
    value: number;
    suffix: string;
    label: string;
    color: string;
}

const stats: Stat[] = [
    {
        icon: Coins,
        value: 20,
        suffix: 'M+',
        label: 'Trades Financed',
        color: 'from-green-500 to-emerald-600',
    },
    {
        icon: Users,
        value: 1000,
        suffix: '+',
        label: 'Farmers Supported',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: TrendingUp,
        value: 70,
        suffix: '%',
        label: 'Women Participation',
        color: 'from-pink-500 to-rose-600',
    },
    {
        icon: MapPin,
        value: 4,
        suffix: '+',
        label: 'States Active',
        color: 'from-purple-500 to-violet-600',
    },
];

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
    color: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "XchangeBox transformed how we access financing. What used to take 60 days now happens in real-time. Our entire supply chain is more efficient.",
        author: "Adebayo Johnson",
        role: "CEO",
        company: "AgriConnect Nigeria",
        color: "from-green-500 to-emerald-600",
    },
    {
        quote: "Ta hanyar Kidashi, na sami damar fara kasuwanci na tare da tallafi daga mutanen amintattuna. Sharuɗɗan biyan kuɗi masu sassauci sun taimaka sosai a gare mu.",
        author: "Fatima Mohammed",
        role: "Entrepreneur",
        company: "Women's Cooperative",
        color: "from-pink-500 to-rose-600",
    },
    {
        quote: "Shinobi Core gave our microfinance bank the infrastructure we needed to scale. We've doubled our loan processing capacity in just 6 months.",
        author: "Chukwudi Okonkwo",
        role: "Operations Director",
        company: "Payrep MFB",
        color: "from-purple-500 to-violet-600",
    },
    {
        quote: "The instant trade finance from Farm4Factory has revolutionized how we work with suppliers. No more cash flow bottlenecks.",
        author: "Ngozi Adeola",
        role: "Accounting Manager",
        company: "Food Processing Ltd",
        color: "from-blue-500 to-indigo-600",
    },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return (
        <span className="inline-flex items-baseline">
            <span ref={ref} className="tabular-nums">
                0
            </span>
            <span>{suffix}</span>
        </span>
    );
}

function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        if (testimonials.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative mx-auto max-w-4xl">
                {/* Navigation Buttons */}
                {testimonials.length > 1 && (
                    <>
                        <motion.button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </motion.button>
                        <motion.button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </motion.button>
                    </>
                )}

                {/* Testimonial Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            drag={testimonials.length > 1 ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    handleNext();
                                } else if (swipe > swipeConfidenceThreshold) {
                                    handlePrev();
                                }
                            }}
                            className="p-8 md:p-12"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <div
                                    className={`inline-flex rounded-2xl bg-linear-to-br ${currentTestimonial.color} p-4`}
                                >
                                    <Quote className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            {/* Quote Text */}
                            <blockquote className="mb-8 text-xl italic leading-relaxed text-gray-200 md:text-2xl">
                                &ldquo;{currentTestimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div
                                    className={`h-16 w-16 rounded-full bg-linear-to-br ${currentTestimonial.color} flex items-center justify-center text-2xl font-bold text-white`}
                                >
                                    {currentTestimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-lg font-semibold text-white">
                                        {currentTestimonial.author}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {currentTestimonial.role} • {currentTestimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                {testimonials.length > 1 && (
                    <div className="mt-6 flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className="group relative h-2 w-8 overflow-hidden rounded-full bg-white/20 transition-all hover:bg-white/30"
                                aria-label={`Go to testimonial ${index + 1}`}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-linear-to-r ${testimonials[index].color}`}
                                    initial={false}
                                    animate={{
                                        scaleX: index === currentIndex ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: 'left' }}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export function ImpactSection() {
    return (
        <section id="impact" className="relative overflow-hidden bg-linear-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-red-500/10 via-transparent to-purple-500/10" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                        Impact You Can{' '}
                        <span className="text-gradient bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                            Measure
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        We don&apos;t just move money — we move opportunity.
                    </p>
                </motion.div>

                {/* Stats Grid */}
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
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div
                                            className={`inline-flex rounded-xl bg-linear-to-br ${stat.color} p-3`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Counter */}
                                    <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>

                                    {/* Label */}
                                    <div className="text-gray-300">{stat.label}</div>

                                    {/* Glow effect on hover */}
                                    <div
                                        className={`absolute -inset-px rounded-2xl bg-linear-to-br ${stat.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Testimonial Carousel */}
                <TestimonialCarousel />
            </div>
        </section>
    );
}
