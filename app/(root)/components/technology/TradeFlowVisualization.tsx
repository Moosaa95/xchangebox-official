'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, DollarSign, Zap, ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export function TradeFlowVisualization() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            id: 1,
            icon: FileText,
            title: 'Invoice Generated',
            description: 'Seller delivers goods, creates invoice',
            color: 'bg-blue-500',
            position: { x: 10, y: 50 },
        },
        {
            id: 2,
            icon: Zap,
            title: 'XchangeBox Platform',
            description: 'Instant verification & processing',
            color: 'bg-red-500',
            position: { x: 50, y: 50 },
            isCenter: true,
        },
        {
            id: 3,
            icon: DollarSign,
            title: 'Instant Liquidity',
            description: 'Seller receives cash immediately',
            color: 'bg-green-500',
            position: { x: 90, y: 50 },
        },
    ];

    const metrics = [
        { label: 'Processing Time', value: '<5 min', icon: Clock },
        { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
        { label: 'Growth Rate', value: '300%', icon: TrendingUp },
    ];

    return (
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Main content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Digital Trade Finance Rails
                    </h3>
                    <p className="text-gray-400 text-sm">
                        From Invoice to Cash in Minutes, Not Months
                    </p>
                </motion.div>

                {/* Flow visualization */}
                <div className="relative w-full max-w-4xl h-64 mb-12">
                    {/* SVG for flow lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        {/* Animated flow line from step 1 to 2 */}
                        <motion.path
                            d="M 20% 50% Q 35% 30% 50% 50%"
                            stroke="url(#flow-gradient-1)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />

                        {/* Animated flow line from step 2 to 3 */}
                        <motion.path
                            d="M 50% 50% Q 70% 70% 90% 50%"
                            stroke="url(#flow-gradient-2)"
                            strokeWidth="3"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 0.5,
                            }}
                        />

                        {/* Gradients */}
                        <defs>
                            <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="flow-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                                <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Animated particles flowing through */}
                        {[0, 1, 2].map((i) => (
                            <motion.circle
                                key={`particle-1-${i}`}
                                r="4"
                                fill="#ef4444"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.7,
                                }}
                            >
                                <animateMotion
                                    dur="2s"
                                    repeatCount="indefinite"
                                    begin={`${i * 0.7}s`}
                                    path="M 20% 50% Q 35% 30% 50% 50%"
                                />
                            </motion.circle>
                        ))}

                        {[0, 1, 2].map((i) => (
                            <motion.circle
                                key={`particle-2-${i}`}
                                r="4"
                                fill="#22c55e"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0.5 + i * 0.7,
                                }}
                            >
                                <animateMotion
                                    dur="2s"
                                    repeatCount="indefinite"
                                    begin={`${0.5 + i * 0.7}s`}
                                    path="M 50% 50% Q 70% 70% 90% 50%"
                                />
                            </motion.circle>
                        ))}
                    </svg>

                    {/* Step nodes */}
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === step.id;
                        const isCenter = step.isCenter;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="absolute"
                                style={{
                                    left: `${step.position.x}%`,
                                    top: `${step.position.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 10,
                                }}
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Node circle */}
                                <motion.div
                                    className={`relative ${isCenter ? 'w-24 h-24' : 'w-20 h-20'} ${step.color} rounded-full shadow-2xl cursor-pointer flex items-center justify-center`}
                                    animate={{
                                        scale: isActive ? 1.2 : 1,
                                        boxShadow: isActive
                                            ? '0 0 60px rgba(239, 68, 68, 0.8)'
                                            : '0 20px 40px rgba(0, 0, 0, 0.5)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Pulsing ring */}
                                    {isCenter && (
                                        <motion.div
                                            className={`absolute inset-0 ${step.color} rounded-full opacity-50`}
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <Icon className="h-10 w-10 text-white relative z-10" />
                                </motion.div>

                                {/* Label below */}
                                <motion.div
                                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                >
                                    <div className={`text-sm font-bold ${isCenter ? 'text-red-400' : 'text-white'} mb-1`}>
                                        {step.title}
                                    </div>
                                    <div className="text-xs text-gray-400 max-w-[140px]">
                                        {step.description}
                                    </div>
                                </motion.div>

                                {/* Tooltip on hover */}
                                {isActive && !isCenter && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/20 rounded-lg px-4 py-2 shadow-2xl backdrop-blur-sm whitespace-nowrap z-50"
                                    >
                                        <p className="text-xs text-white font-medium">
                                            {index === 0 ? '60 days → 5 minutes' : 'Same-day settlement'}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Metrics bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="w-full max-w-3xl"
                >
                    <div className="grid grid-cols-3 gap-4">
                        {metrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all"
                                >
                                    <Icon className="h-6 w-6 text-red-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="text-xs text-white/80 font-medium">
                            Hover over nodes to see transformation metrics
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
