'use client';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, FileCheck, AlertTriangle, Building2, Mail, Phone, Award, Globe } from 'lucide-react';
import Link from 'next/link';

const complianceFrameworks = [
    {
        icon: Shield,
        title: 'NDPA Compliance',
        description: 'Fully compliant with Nigeria Data Protection Act',
        color: 'from-blue-500 to-blue-600',
        details: [
            'Personal data protection measures',
            'Data subject rights implementation',
            'Regular compliance audits',
            'Privacy by design approach',
        ],
    },
    {
        icon: Lock,
        title: 'Data Security',
        description: 'End-to-end encryption and secure infrastructure',
        color: 'from-green-500 to-green-600',
        details: [
            'AES-256 encryption standards',
            'Secure data transmission (SSL/TLS)',
            'Regular security audits',
            'Multi-factor authentication',
        ],
    },
    {
        icon: FileCheck,
        title: 'Financial Regulations',
        description: 'Adherence to Nigerian financial regulatory requirements',
        color: 'from-purple-500 to-purple-600',
        details: [
            'CBN compliance for financial services',
            'Anti-money laundering (AML) protocols',
            'Know Your Customer (KYC) verification',
            'Transaction monitoring systems',
        ],
    },
    {
        icon: Award,
        title: 'Industry Standards',
        description: 'Following global best practices',
        color: 'from-red-500 to-red-600',
        details: [
            'ISO 27001 alignment',
            'PCI DSS for payment processing',
            'GDPR principles adoption',
            'Regular third-party audits',
        ],
    },
];

const regulatoryBodies = [
    {
        name: 'NITDA',
        fullName: 'National Information Technology Development Agency',
        role: 'Data Protection Regulation',
        icon: Building2,
    },
    {
        name: 'CBN',
        fullName: 'Central Bank of Nigeria',
        role: 'Financial Services Regulation',
        icon: Building2,
    },
    {
        name: 'EFCC',
        fullName: 'Economic and Financial Crimes Commission',
        role: 'Anti-Money Laundering Compliance',
        icon: Building2,
    },
];

const dataProtectionPrinciples = [
    {
        title: 'Lawfulness, Fairness, and Transparency',
        description: 'We process personal data lawfully, fairly, and in a transparent manner.',
    },
    {
        title: 'Purpose Limitation',
        description: 'Data is collected for specified, explicit, and legitimate purposes only.',
    },
    {
        title: 'Data Minimization',
        description: 'We only collect data that is adequate, relevant, and necessary.',
    },
    {
        title: 'Accuracy',
        description: 'Personal data is kept accurate and up to date.',
    },
    {
        title: 'Storage Limitation',
        description: 'Data is retained only for as long as necessary for the purposes collected.',
    },
    {
        title: 'Integrity and Confidentiality',
        description: 'Appropriate security measures protect against unauthorized access and data breaches.',
    },
    {
        title: 'Accountability',
        description: 'We are responsible for and can demonstrate compliance with all principles.',
    },
];

export default function CompliancePage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-green-500/10" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-500/10 p-4">
                            <Shield className="h-12 w-12 text-blue-500" />
                        </div>
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Regulatory{' '}
                            <span className="bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                                Compliance
                            </span>
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            Committed to the highest standards of regulatory compliance, data protection, and security
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>NDPA Compliant</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>CBN Registered</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>AML Compliant</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Compliance Overview */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Our Compliance Commitment
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            At Xchange Box Solutions Ltd, compliance isn't just about meeting requirements—it's about
                            building trust with our customers, partners, and the communities we serve.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {complianceFrameworks.map((framework, index) => {
                            const Icon = framework.icon;
                            return (
                                <motion.div
                                    key={framework.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-blue-500 hover:shadow-xl">
                                        <div className={`mb-6 inline-flex rounded-xl bg-linear-to-br ${framework.color} p-4`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-bold text-gray-900">{framework.title}</h3>
                                        <p className="mb-6 text-gray-600">{framework.description}</p>
                                        <ul className="space-y-2">
                                            {framework.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Data Protection Principles */}
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
                            Data Protection Principles
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            We adhere to the seven fundamental principles of data protection as outlined in the NDPA
                        </p>
                    </motion.div>

                    <div className="mx-auto max-w-4xl space-y-6">
                        {dataProtectionPrinciples.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">{principle.title}</h3>
                                        <p className="text-gray-600">{principle.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory Bodies */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Regulatory Oversight
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            We operate under the supervision of key Nigerian regulatory bodies
                        </p>
                    </motion.div>

                    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
                        {regulatoryBodies.map((body, index) => {
                            const Icon = body.icon;
                            return (
                                <motion.div
                                    key={body.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-blue-500 hover:shadow-xl">
                                        <div className="mb-4 inline-flex rounded-xl bg-linear-to-br from-blue-500 to-blue-600 p-4">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">{body.name}</h3>
                                        <p className="mb-3 text-sm text-gray-600">{body.fullName}</p>
                                        <p className="text-sm font-semibold text-blue-600">{body.role}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Security Measures */}
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
                            Security Infrastructure
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Multi-layered security approach to protect your data and transactions
                        </p>
                    </motion.div>

                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: '🔒',
                                    title: 'Encryption',
                                    items: ['AES-256 encryption', 'SSL/TLS protocols', 'End-to-end security', 'Encrypted backups'],
                                },
                                {
                                    icon: '🛡️',
                                    title: 'Access Control',
                                    items: ['Multi-factor authentication', 'Role-based access', 'IP whitelisting', 'Session management'],
                                },
                                {
                                    icon: '👁️',
                                    title: 'Monitoring',
                                    items: ['24/7 system monitoring', 'Intrusion detection', 'Threat intelligence', 'Security alerts'],
                                },
                                {
                                    icon: '📊',
                                    title: 'Compliance Audits',
                                    items: ['Regular security audits', 'Penetration testing', 'Vulnerability assessments', 'Third-party reviews'],
                                },
                                {
                                    icon: '🔐',
                                    title: 'Data Protection',
                                    items: ['Data encryption at rest', 'Secure data centers', 'Backup & recovery', 'Data anonymization'],
                                },
                                {
                                    icon: '📋',
                                    title: 'Incident Response',
                                    items: ['Incident response plan', 'Breach notification', 'Recovery procedures', 'Forensic analysis'],
                                },
                            ].map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="rounded-xl border-2 border-gray-200 bg-white p-6"
                                >
                                    <div className="mb-4 text-4xl">{category.icon}</div>
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">{category.title}</h3>
                                    <ul className="space-y-2">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* KYC/AML */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">
                                KYC & AML Compliance
                            </h2>
                            <div className="space-y-6 text-gray-700">
                                <p>
                                    As a financial services provider, we maintain strict Know Your Customer (KYC) and
                                    Anti-Money Laundering (AML) protocols to prevent fraud, money laundering, and terrorist
                                    financing.
                                </p>

                                <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Our KYC Process</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Identity verification using government-issued IDs',
                                            'Bank Verification Number (BVN) validation',
                                            'Biometric authentication where applicable',
                                            'Address verification',
                                            'Source of funds verification for high-value transactions',
                                            'Ongoing monitoring of customer activities',
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8">
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900">AML Measures</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Transaction monitoring systems',
                                            'Suspicious activity reporting',
                                            'Risk-based customer due diligence',
                                            'Enhanced due diligence for high-risk customers',
                                            'Regular staff training on AML compliance',
                                            'Cooperation with regulatory authorities',
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reporting */}
            <section className="bg-gray-50 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-8 text-4xl font-bold text-gray-900">
                            Report a Compliance Concern
                        </h2>
                        <div className="rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-8">
                            <div className="mb-6 flex items-center gap-3">
                                <AlertTriangle className="h-8 w-8 text-yellow-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Speak Up</h3>
                            </div>
                            <p className="mb-6 text-gray-700">
                                If you have concerns about our compliance practices or suspect any violations, we encourage
                                you to report them. We take all reports seriously and investigate them thoroughly.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-yellow-600" />
                                    <a href="mailto:contact@xchangeboxng.com" className="text-yellow-600 hover:underline font-semibold">
                                        contact@xchangeboxng.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-yellow-600" />
                                    <a href="tel:08137083075" className="text-yellow-600 hover:underline font-semibold">
                                        08137083075
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-blue-600 to-blue-700 py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                            Questions About Our Compliance?
                        </h2>
                        <p className="mb-8 text-xl text-blue-100">
                            Our compliance team is here to address your concerns
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                            >
                                <Mail className="h-5 w-5" />
                                Contact Compliance Team
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
                            >
                                View Privacy Policy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
