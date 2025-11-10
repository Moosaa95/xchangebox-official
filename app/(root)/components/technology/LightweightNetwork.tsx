'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface NetworkNode {
    id: string;
    x: number;
    y: number;
    color: string;
    label: string;
    description: string;
}

const nodes: NetworkNode[] = [
    {
        id: 'platform',
        x: 50,
        y: 50,
        color: 'bg-red-500',
        label: 'Platform',
        description: 'Central exchange hub connecting all stakeholders',
    },
    {
        id: 'farmers',
        x: 20,
        y: 25,
        color: 'bg-green-500',
        label: 'Farmers',
        description: 'Agricultural producers accessing instant financing',
    },
    {
        id: 'buyers',
        x: 80,
        y: 25,
        color: 'bg-blue-500',
        label: 'Buyers',
        description: 'Businesses purchasing goods with flexible payment',
    },
    {
        id: 'women',
        x: 25,
        y: 75,
        color: 'bg-pink-500',
        label: 'Women-led SMEs',
        description: 'Empowered businesses with equal access to capital',
    },
    {
        id: 'banks',
        x: 75,
        y: 75,
        color: 'bg-purple-500',
        label: 'Financial Institutions',
        description: 'Banks providing liquidity and credit facilities',
    },
    {
        id: 'finance',
        x: 50,
        y: 15,
        color: 'bg-amber-500',
        label: 'Alternative Finance',
        description: 'Innovative funding sources and investors',
    },
];

const connections = [
    { from: 'platform', to: 'farmers', animated: true },
    { from: 'platform', to: 'buyers', animated: true },
    { from: 'platform', to: 'women', animated: true },
    { from: 'platform', to: 'banks', animated: true },
    { from: 'platform', to: 'finance', animated: true },
    { from: 'farmers', to: 'buyers', animated: false },
    { from: 'women', to: 'banks', animated: false },
    { from: 'farmers', to: 'finance', animated: false },
    { from: 'buyers', to: 'banks', animated: false },
];

function getNodePosition(nodeId: string) {
    const node = nodes.find((n) => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

export function LightweightNetwork() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                    {/* Gradient for animated lines */}
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {connections.map((conn, index) => {
                    const from = getNodePosition(conn.from);
                    const to = getNodePosition(conn.to);

                    return (
                        <g key={index}>
                            {/* Base line */}
                            <line
                                x1={`${from.x}%`}
                                y1={`${from.y}%`}
                                x2={`${to.x}%`}
                                y2={`${to.y}%`}
                                stroke={conn.animated ? '#ef4444' : '#6b7280'}
                                strokeWidth="2"
                                strokeOpacity={conn.animated ? '0.4' : '0.2'}
                                strokeDasharray={conn.animated ? '5,5' : '0'}
                            >
                                {conn.animated && (
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        from="10"
                                        to="0"
                                        dur="1s"
                                        repeatCount="indefinite"
                                    />
                                )}
                            </line>

                            {/* Animated pulse */}
                            {conn.animated && (
                                <circle r="4" fill="#ef4444">
                                    <animateMotion
                                        dur="3s"
                                        repeatCount="indefinite"
                                        path={`M ${from.x}% ${from.y}% L ${to.x}% ${to.y}%`}
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;0"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0" style={{ zIndex: 2 }}>
                {nodes.map((node, index) => {
                    const isActive = activeNode === node.id;
                    const isCenter = node.id === 'platform';

                    return (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="absolute"
                            style={{
                                left: `${node.x}%`,
                                top: `${node.y}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            onMouseEnter={() => setActiveNode(node.id)}
                            onMouseLeave={() => setActiveNode(null)}
                        >
                            {/* Node circle */}
                            <motion.div
                                className={`relative ${isCenter ? 'w-20 h-20' : 'w-16 h-16'} ${node.color} rounded-full shadow-2xl cursor-pointer`}
                                animate={{
                                    scale: isActive ? 1.2 : 1,
                                    boxShadow: isActive
                                        ? '0 0 40px rgba(239, 68, 68, 0.8)'
                                        : '0 10px 25px rgba(0, 0, 0, 0.5)',
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Pulsing ring */}
                                <motion.div
                                    className={`absolute inset-0 ${node.color} rounded-full opacity-50`}
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.5, 0, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        delay: index * 0.2,
                                    }}
                                />

                                {/* Center dot */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                </div>
                            </motion.div>

                            {/* Label */}
                            <motion.div
                                className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                animate={{ opacity: 1 }}
                            >
                                <div className="text-center">
                                    <div
                                        className={`text-sm font-semibold ${isCenter ? 'text-red-400' : 'text-white'} ${isActive ? 'scale-110' : ''} transition-transform`}
                                    >
                                        {node.label}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Tooltip */}
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full mt-12 left-1/2 -translate-x-1/2 w-56 z-50"
                                >
                                    <div className="bg-gray-900 border border-white/20 rounded-lg p-4 shadow-2xl backdrop-blur-sm">
                                        <p className="text-xs text-gray-300 leading-relaxed">
                                            {node.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Interaction hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20"
                >
                    <p className="text-xs text-white/80 font-medium">
                        Hover over nodes to learn more
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
