'use client';

import { motion } from 'framer-motion';

const partners = [
    { name: 'Payrep Mfb', src: '/logos/xchangebox_logo.png', width: 120 },
    { name: 'DPI', src: '/logos/xchangebox_logo.png', width: 100 },
    { name: 'NDIC', src: '/logos/xchangebox_logo.png', width: 110 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },
    { name: 'CBN', src: '/logos/xchangebox_logo.png', width: 115 },

];

export function PartnerLogos() {
    return (
        <section className="bg-white py-16">
            <div className="container-custom text-center">
                <p className="mb-12 text-sm font-medium uppercase tracking-wide text-gray-600">
                    Trusted by partners across finance, agriculture, and impact
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={partner.src}
                                alt={partner.name}
                                style={{ width: partner.width }}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
