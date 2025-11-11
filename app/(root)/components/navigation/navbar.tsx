'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    {
        name: 'Farm4Factory',
        description: 'Turning supplies into bankable assets',
        href: '/products/farm4factory',
        icon: '🌾',
    },
    {
        name: 'Kidashi',
        description: 'Empowering women through trust-circle finance',
        href: '/products/kidashi',
        icon: '👥',
    },
    {
        name: 'Shinobi Core',
        description: 'The digital core for microfinance',
        href: '/products/shinobi',
        icon: '💾',
    },
];

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(true); // Start as true for visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Set initial state based on scroll position
        setIsScrolled(window.scrollY > 10);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
                    : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src="/logos/xchangebox_logo.png"
                                alt="XchangeBox"
                                width={180}
                                height={45}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {/* Products Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductsOpen(true)}
                                onMouseLeave={() => setIsProductsOpen(false)}
                            >
                                <button
                                    className="flex items-center gap-1 font-medium text-gray-700 transition-colors hover:text-red-600 cursor-pointer"
                                >
                                    Products
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isProductsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px]"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 overflow-hidden">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {products.map((product) => (
                                                        <Link
                                                            key={product.name}
                                                            href={product.href}
                                                            className="group p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="text-2xl">{product.icon}</div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                                                        {product.name}
                                                                    </div>
                                                                    <div className="text-sm text-gray-600 line-clamp-2">
                                                                        {product.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other nav links */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-medium text-gray-700 transition-colors hover:text-red-600 cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 cursor-pointer"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-900 transition-colors hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden"
                    >
                        <div className="container-custom py-6 space-y-6">
                            {/* Products Section */}
                            <div>
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                    Products
                                </div>
                                <div className="space-y-2">
                                    {products.map((product) => (
                                        <Link
                                            key={product.name}
                                            href={product.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="text-xl">{product.icon}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-gray-900">{product.name}</div>
                                                <div className="text-sm text-gray-600">{product.description}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Other Links */}
                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-3 py-2 text-gray-700 font-medium hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="border-t border-gray-200 pt-4">
                                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
