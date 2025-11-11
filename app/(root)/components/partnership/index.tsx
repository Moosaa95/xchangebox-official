'use client';

import { motion } from 'framer-motion';

const partners = [
    { name: 'AgroVista', src: '/logos/agrovista.jpg', width: 120 },
    { name: 'Cascador', src: '/logos/cascador.jpg', width: 100 },
    { name: 'Extension Africa', src: '/logos/exaf-logo.png', width: 110 },
    { name: 'FalGates', src: '/logos/falgates.png', width: 115 },
    { name: 'Hoft', src: '/logos/hoft.png', width: 115 },
    { name: 'Sagad Farms', src: '/logos/sagadfarms-logo.png', width: 115 },
    { name: 'Gates Foundation', src: '/logos/gates_foundation.png', width: 115 },
    { name: 'Farmatrix', src: '/logos/farmatrixng.jpeg', width: 115 },
    { name: 'CCHUB', src: '/logos/cchub.png', width: 115 },

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
