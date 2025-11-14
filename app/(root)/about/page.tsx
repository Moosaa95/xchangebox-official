'use client';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Heart, TrendingUp, MapPin, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
    {
        icon: Target,
        title: 'Mission-Driven',
        description: 'We exist to unlock liquidity for underserved markets across Africa',
        color: 'from-red-500 to-red-600',
        image: '/images/tractor.png',
    },
    {
        icon: Heart,
        title: 'Inclusive by Design',
        description: 'Financial tools built for everyone, not just the privileged few',
        color: 'from-pink-500 to-rose-600',
        image: '/images/kidashi-woman.jpg',
    },
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'Leveraging technology to solve real-world problems at scale',
        color: 'from-blue-500 to-indigo-600',
        image: '/images/innovation.jpg',
    },
    {
        icon: Award,
        title: 'Trust & Transparency',
        description: 'Every transaction is traceable, secure, and compliant',
        color: 'from-green-500 to-emerald-600',
        image: '/images/farm4factory-partnership-model.png',
    },
];

const team = [
    {
        name: 'Mohammed',
        role: 'CEO',
        bio: 'Building the financial infrastructure for emerging markets',
        image: '/images/muhammad.jpg',
        linkedin: 'https://www.linkedin.com/in/mohammed-ismail-8273a0247/',
    },
    {
        name: 'Abiola',
        role: 'Co-founder/Co-CEO',
        bio: 'Creating products that serve real people and real needs',
        image: '/images/abiola.jpg',
        linkedin: 'https://www.linkedin.com/in/jimohabiola/',
    },
    {
        name: 'Salim',
        role: 'Co-founder/CTO',
        bio: 'Designing scalable systems for millions of transactions',
        image: '/images/salim.jpg',
        linkedin: 'https://www.linkedin.com/in/alhassansalim/',
    },
    {
        name: 'Aisha',
        role: 'Co-founder',
        bio: 'Empowering communities through financial innovation',
        image: '/images/aisha.jpg',
        linkedin: 'https://www.linkedin.com/in/aisha-iya-abubakar-16b0b416b/',
    },
];

const timeline = [
    {
        year: '2020',
        title: 'Foundation',
        description: 'XchangeBox was founded with a mission to transform financial inclusion',
        image: '/images/muhammad.jpg',
    },
    {
        year: '2021',
        title: 'First Product Launch',
        description: 'Payrep goes live, withdrawals, deposit with a strong agent network',
        image: '/images/payreppos.jpg',
    },
    // {
    //     year: '2025',
    //     title: 'Women Empowerment',
    //     description: 'Kidashi launches, bringing trust-circle finance to women communities',
    //     image: '/images/aisha.jpg',
    // },
    // {
    //     year: '2025',
    //     title: 'Infrastructure Scale',
    //     description: 'Shinobi Core powers complete microfinance bank operations',
    //     image: '/images/salim.jpg',
    // },
    {
        year: '2025',
        title: 'Agricultural Finance',
        description: 'Farm4Factory goes live, financing first batch of agricultural trades',
        image: '/images/farmer.jpg',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section with Bento Grid */}
            <section className="relative overflow-hidden bg-linear-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-linear-to-r from-red-500/10 via-transparent to-purple-500/10" />

                <div className="container-custom relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                                Building the Future of{' '}
                                <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                    Financial Inclusion
                                </span>
                            </h1>
                            <p className="mb-8 text-xl text-gray-300">
                                We're not just a fintech company. We're a mission to democratize access to capital
                                and create opportunity for millions across Africa.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-white">
                                    <MapPin className="h-5 w-5 text-red-500" />
                                    <span>Fct Abuja, Nigeria</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <TrendingUp className="h-5 w-5 text-green-500" />
                                    <span>5,000+ Trade cycles Financed</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Users className="h-5 w-5 text-blue-500" />
                                    <span>1,000+ Partners</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Bento Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {/* Top Left - Large */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="group relative col-span-2 h-[250px] overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="/images/farm4factory-partnership-model.png"
                                    alt="Impact"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>

                            {/* Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group relative h-[200px] overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="/images/kidashi-woman.jpg"
                                    alt="Community"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>

                            {/* Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="group relative h-[200px] overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="/images/payreppos.jpg"
                                    alt="Technology"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story with Image */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    XchangeBox was born from a simple observation: millions of hardworking Nigerian
                                    farmers, merchants, women entrepreneurs all trapped in a liquidity crisis.
                                    Not because they lack assets, but because the financial system doesn't recognize
                                    their value.
                                </p>
                                <p>
                                    We saw farmers waiting 60-90 days for payment while their families struggled. We
                                    saw women's savings groups operating on trust alone, without access to formal
                                    finance. We saw entire supply chains grinding to a halt because of working
                                    capital gaps.
                                </p>
                                <p>
                                    So we built something different. Not another consumer lending app, but digital
                                    infrastructure that turns trade relationships, invoices, and trust circles into
                                    liquid, bankable assets.
                                </p>
                                <p className="font-semibold text-red-600">
                                    Today, we're not just moving money - we're moving opportunity.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative grid grid-cols-2 gap-4"
                        >
                            {/* Large Image */}
                            <div className="group relative col-span-2 h-[300px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/kidashi-woman-two.jpg"
                                    alt="Our Impact"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="text-3xl font-bold">1,000+</div>
                                    <div className="text-sm">Communities Empowered</div>
                                </div>
                            </div>

                            {/* Small Images */}
                            <div className="group relative h-[200px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/tractor.png"
                                    alt="Agricultural Impact"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold">5,000+</div>
                                    <div className="text-xs">Trades</div>
                                </div>
                            </div>

                            <div className="group relative h-[200px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/group-one.jpg"
                                    alt="Technology"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold"></div>
                                    <div className="text-xs"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values with Images */}
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
                            Our Core Values
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            The principles that guide every decision we make
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-red-500 hover:shadow-xl">
                                        {/* Image */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={value.image}
                                                alt={value.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                            <div className={`absolute bottom-4 left-4 inline-flex rounded-xl bg-linear-to-br ${value.color} p-3 shadow-lg`}>
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                                            <p className="text-gray-600">{value.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline with Images */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Our Journey</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            From a bold idea to transforming financial inclusion across Nigeria
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-500 via-purple-500 to-blue-500 md:left-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all hover:border-red-500 hover:shadow-xl">
                                            {/* Image */}
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                                                <div className="absolute bottom-4 left-4 rounded-lg bg-red-600 px-3 py-1 text-sm font-bold text-white">
                                                    {item.year}
                                                </div>
                                            </div>
                                            {/* Text Content */}
                                            <div className="p-6">
                                                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="absolute left-8 md:left-1/2 -ml-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-red-500 to-red-600 shadow-lg">
                                        <div className="text-2xl font-bold text-white">{index + 1}</div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden flex-1 md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
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
                            Meet the Team
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            The people building the future of financial inclusion
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-red-500 hover:shadow-xl">
                                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                            <Link
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-full bg-red-100 p-2 text-red-600 transition-all hover:bg-red-600 hover:text-white hover:shadow-lg hover:scale-110"
                                                aria-label={`${member.name}'s LinkedIn profile`}
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </Link>
                                        </div>
                                        <div className="mb-3 text-sm font-semibold text-red-600">{member.role}</div>
                                        <p className="text-gray-600">{member.bio}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA with Background Image */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/farm4factory-partnership-model.png"
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
                            Want to Join Our Mission?
                        </h2>
                        <p className="mb-8 text-xl text-red-100">
                            We're always looking for talented people who share our vision
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                            >
                                <Mail className="h-5 w-5" />
                                Get in Touch
                            </Link>
                            <Link
                                href="/partners"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                            >
                                Become a Partner
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
