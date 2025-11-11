'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LucideIcon, ArrowRight, TrendingUp, Users } from 'lucide-react';

interface ProductCardProps {
    name: string;
    tagline: string;
    category: string;
    icon: LucideIcon;
    image: string;
    color: string;
    bgColor: string;
    borderColor: string;
    stats: {
        label: string;
        value: string;
    };
    features?: string[];
    index: number;
}

export function EnhancedProductCard({
    name,
    tagline,
    category,
    icon: Icon,
    image,
    color,
    bgColor,
    borderColor,
    stats,
    features = [],
    index
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative h-full"
        >
            <div className={`relative h-full overflow-hidden rounded-3xl border-2 ${borderColor} bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-${color.split('-')[1]}-500/20`}>
                {/* Image Section with Skeleton Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Product Image */}
                    <motion.img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 0.3 : 1
                        }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Skeleton/Wireframe Overlay on Hover */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Gradient Backdrop */}
                        <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-90`} />

                        {/* Wireframe SVG */}
                        <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 2 }}>
                            {/* Grid Pattern */}
                            <defs>
                                <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />

                            {/* Corner Nodes */}
                            {[
                                { x: '5%', y: '5%' },
                                { x: '95%', y: '5%' },
                                { x: '5%', y: '95%' },
                                { x: '95%', y: '95%' }
                            ].map((pos, i) => (
                                <g key={i}>
                                    <motion.circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="6"
                                        fill="white"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                    />
                                    <motion.circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="12"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={isHovered ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                    />
                                </g>
                            ))}

                            {/* Connecting Lines */}
                            <motion.rect
                                x="5%"
                                y="5%"
                                width="90%"
                                height="90%"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="10,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isHovered ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            />

                            {/* Center Cross */}
                            <motion.line
                                x1="50%"
                                y1="20%"
                                x2="50%"
                                y2="80%"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isHovered ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            />
                            <motion.line
                                x1="20%"
                                y1="50%"
                                x2="80%"
                                y2="50%"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isHovered ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            />

                            {/* Center Node */}
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="8"
                                fill="white"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                            />
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="16"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isHovered ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                            />
                        </svg>

                        {/* Hover Text Overlay */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={isHovered ? { scale: 1 } : { scale: 0.8 }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                                >
                                    <Icon className="mx-auto h-16 w-16 text-white mb-4" strokeWidth={1.5} />
                                </motion.div>
                                <p className="text-lg font-semibold text-white">Explore {name}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                        className="absolute top-4 right-4"
                        animate={{ y: isHovered ? -5 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
                            {category}
                        </span>
                    </motion.div>

                    {/* Icon Badge */}
                    <motion.div
                        className={`absolute bottom-4 left-4 rounded-xl bg-linear-to-br ${color} p-3 shadow-lg`}
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            y: isHovered ? -5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                    {/* Title and Tagline */}
                    <div className="mb-6">
                        <motion.h3
                            className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl"
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {name}
                        </motion.h3>
                        <p className="text-gray-600 leading-relaxed">{tagline}</p>
                    </div>

                    {/* Stats Card */}
                    <motion.div
                        className={`mb-6 rounded-xl ${bgColor} border ${borderColor} p-4`}
                        animate={{
                            scale: isHovered ? 1.02 : 1,
                            borderColor: isHovered ? color : borderColor
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`rounded-lg bg-linear-to-br ${color} p-2`}>
                                <TrendingUp className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-2xl font-bold text-gray-900">{stats.value}</div>
                                <div className="text-sm text-gray-600">{stats.label}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features List (if provided) */}
                    {features.length > 0 && (
                        <div className="mb-6 space-y-2">
                            {features.slice(0, 3).map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <div className={`mt-0.5 h-1.5 w-1.5 rounded-full bg-linear-to-br ${color}`} />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* CTA Button */}
                    <motion.button
                        className={`group/btn inline-flex items-center gap-2 rounded-lg bg-linear-to-r ${color} px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl cursor-pointer`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn More
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                </div>

                {/* Animated Border Accent */}
                <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                />
            </div>
        </motion.div>
    );
}
