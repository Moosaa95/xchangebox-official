'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Award, Users, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const newsCategories = [
    { name: 'All News', slug: 'all' },
    { name: 'Company Updates', slug: 'company' },
    { name: 'Product Launches', slug: 'product' },
    { name: 'Partnerships', slug: 'partnership' },
    { name: 'Industry Insights', slug: 'insights' },
];

const featuredNews = {
    title: 'XchangeBox Secures Strategic Partnership with Major Nigerian Bank',
    excerpt: 'This partnership will enable us to expand our reach and provide more financial services to underserved communities across Nigeria.',
    date: '2025-11-10',
    readTime: '5 min read',
    category: 'Partnership',
    image: '/images/news-featured.jpg',
    slug: 'partnership-nigerian-bank',
};

const newsArticles = [
    {
        title: 'Farm4Factory Processes ₦500M in Agricultural Financing',
        excerpt: 'Our agricultural trade financing platform reaches a major milestone, supporting over 2,000 farmers and merchants.',
        date: '2025-11-08',
        readTime: '4 min read',
        category: 'Company Updates',
        image: '/images/news-farm4factory.jpg',
        slug: 'farm4factory-milestone',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-600',
    },
    {
        title: 'Kidashi Empowers 5,000 Women Through Trust-Circle Finance',
        excerpt: 'Our women-focused financial platform celebrates achieving a significant impact across multiple communities.',
        date: '2025-11-05',
        readTime: '3 min read',
        category: 'Product Launches',
        image: '/images/news-kidashi.jpg',
        slug: 'kidashi-women-empowerment',
        icon: Users,
        color: 'from-pink-500 to-rose-600',
    },
    {
        title: 'XchangeBox Wins Best Fintech Innovation Award 2025',
        excerpt: 'Recognized for our innovative approach to solving liquidity challenges in emerging markets.',
        date: '2025-11-01',
        readTime: '2 min read',
        category: 'Company Updates',
        image: '/images/news-award.jpg',
        slug: 'fintech-innovation-award',
        icon: Award,
        color: 'from-yellow-500 to-orange-600',
    },
    {
        title: 'Shinobi Core: Revolutionizing Microfinance Operations',
        excerpt: 'Our comprehensive infrastructure platform now powers complete microfinance bank operations across Nigeria.',
        date: '2025-10-28',
        readTime: '6 min read',
        category: 'Product Launches',
        image: '/images/news-shinobi.jpg',
        slug: 'shinobi-core-launch',
        icon: TrendingUp,
        color: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Financial Inclusion in Africa: The XchangeBox Perspective',
        excerpt: 'Exploring the challenges and opportunities in democratizing access to capital across African markets.',
        date: '2025-10-25',
        readTime: '8 min read',
        category: 'Industry Insights',
        image: '/images/news-insights.jpg',
        slug: 'financial-inclusion-perspective',
        icon: Newspaper,
        color: 'from-purple-500 to-indigo-600',
    },
    {
        title: 'New Strategic Partnerships Drive Growth in Q4 2025',
        excerpt: 'Announcing multiple partnerships that will expand our network and enhance service delivery.',
        date: '2025-10-20',
        readTime: '4 min read',
        category: 'Partnerships',
        image: '/images/news-partnerships.jpg',
        slug: 'q4-partnerships',
        icon: Users,
        color: 'from-red-500 to-red-600',
    },
];

export default function NewsPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-linear-to-r from-red-500/10 via-transparent to-purple-500/10" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Latest{' '}
                            <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                News & Updates
                            </span>
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            Stay informed about our journey to transform financial inclusion across Africa
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured News */}
            <section className="bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-red-500 hover:shadow-2xl">
                            <div className="grid gap-0 lg:grid-cols-2">
                                <div className="relative h-64 lg:h-auto">
                                    <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-purple-500/20" />
                                    <div className="flex h-full items-center justify-center">
                                        <div className="text-center">
                                            <Newspaper className="mx-auto mb-4 h-24 w-24 text-red-500" />
                                            <p className="text-lg font-semibold text-gray-600">Featured News Image</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center p-8 lg:p-12">
                                    <div className="mb-4">
                                        <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
                                            {featuredNews.category}
                                        </span>
                                    </div>
                                    <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                                        {featuredNews.title}
                                    </h2>
                                    <p className="mb-6 text-lg text-gray-600">
                                        {featuredNews.excerpt}
                                    </p>
                                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{featuredNews.readTime}</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/news/${featuredNews.slug}`}
                                        className="inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50"
                                    >
                                        Read Full Story
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="bg-gray-50 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Recent News
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Discover the latest updates, milestones, and insights from XchangeBox
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {newsArticles.map((article, index) => {
                            const Icon = article.icon;
                            return (
                                <motion.article
                                    key={article.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link href={`/news/${article.slug}`}>
                                        <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-red-500 hover:shadow-xl">
                                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                                <div className={`absolute inset-0 bg-linear-to-br ${article.color} opacity-20`} />
                                                <div className="flex h-full items-center justify-center">
                                                    <Icon className="h-16 w-16 text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="mb-3">
                                                    <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                                                        {article.category}
                                                    </span>
                                                </div>
                                                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-red-600">
                                                    {article.title}
                                                </h3>
                                                <p className="mb-4 text-gray-600 line-clamp-3">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        <span>{article.readTime}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold transition-all group-hover:gap-3">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-linear-to-br from-red-600 to-red-700 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                            Stay Updated
                        </h2>
                        <p className="mb-8 text-xl text-red-100">
                            Subscribe to our newsletter and never miss an update about our journey to transform financial inclusion
                        </p>
                        <form className="flex flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/60 backdrop-blur-sm transition-all focus:border-white focus:bg-white/20 focus:outline-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                            >
                                Subscribe
                                <ArrowRight className="h-5 w-5" />
                            </motion.button>
                        </form>
                        <p className="mt-4 text-sm text-red-100">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
