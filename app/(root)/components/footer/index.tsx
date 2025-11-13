'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Facebook, Instagram, Send, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const footerLinks = {
    // Products: [
    //     { name: 'Farm4Factory', href: '/products/farm4factory' },
    //     { name: 'Kidashi', href: '/products/kidashi' },
    //     { name: 'Shinobi Core', href: '/products/shinobi' },
    // ],
    Company: [
        { name: 'About Us', href: '/about' },
        { name: 'Impact', href: '/impact' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ],
    Resources: [
        // { name: 'Products', href: '/products' },
        { name: 'Support', href: '/contact' },
    ],
    Legal: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Compliance', href: '/compliance' },
    ],
};

const socialLinks = [
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/xchangebox', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/xchangebox.ng', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Mail, href: 'mailto:contact@xchangeboxng.com', label: 'Email', color: 'hover:bg-red-600' },
];

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="border-t border-gray-200 bg-linear-to-br from-gray-50 to-white">
            <div className="container-custom py-16">
                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Logo */}
                            <Link href="/" className="mb-6 inline-block">
                                <Image
                                    src="/logos/xchangebox_logo.png"
                                    alt="XchangeBox"
                                    width={180}
                                    height={45}
                                    className="h-10 w-auto"
                                    priority
                                />
                                <p className="mt-2 text-sm text-gray-600">
                                    Inclusive. Scalable. Transparent.
                                </p>
                            </Link>

                            <p className="mb-6 text-gray-600">
                                Building financial and digital infrastructure that powers real-world growth
                                from farms to factories to financial systems.
                            </p>

                            {/* Newsletter */}
                            <div className="mb-6">
                                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                    Stay Updated
                                </h3>
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 text-sm transition-colors focus:border-red-500 focus:outline-none"
                                        disabled={subscribed}
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700 disabled:opacity-50"
                                        disabled={subscribed}
                                    >
                                        {subscribed ? 'Subscribed!' : <Send className="h-4 w-4" />}
                                    </motion.button>
                                </form>
                                {subscribed && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-xs text-green-600"
                                    >
                                        Thanks for subscribing!
                                    </motion.p>
                                )}
                            </div>

                            {/* Contact info */}
                            <div className="mb-6 space-y-2">
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                                    <span>Fct Abuja, Nigeria</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                                    <a href="mailto:contact@xchangeboxng.com" className="hover:text-red-600 transition-colors">
                                        contact@xchangeboxng.com
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:border-transparent hover:text-white ${social.color}`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1 text-gray-600 transition-colors hover:text-red-600"
                                        >
                                            {link.name}
                                            <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 border-t border-gray-200 pt-8"
                >
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
                        <p>© 2025 XchangeBox Technologies | All Rights Reserved</p>
                        {/* <div className="flex items-center gap-2">
                            <span className="text-gray-500">Built with</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                className="text-red-500"
                            >
                                ❤️
                            </motion.span>
                            <span className="text-gray-500">by</span>
                            <Link
                                href="https://www.linkedin.com/in/abdullahi-musa-986147180"
                                className="text-gray-500"
                            >
                                Musa
                            </Link>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
