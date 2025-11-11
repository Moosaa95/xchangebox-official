'use client';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, ShieldAlert, UserX, DollarSign, Scale, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const quickLinks = [
    { title: 'User Responsibilities', id: 'user-responsibilities' },
    { title: 'Account Security', id: 'account-security' },
    { title: 'Services & Fees', id: 'services-fees' },
    { title: 'Prohibited Activities', id: 'prohibited-activities' },
    { title: 'Liability', id: 'liability' },
    { title: 'Termination', id: 'termination' },
];

export default function TermsOfServicePage() {
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
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-red-500/10 p-4">
                            <FileText className="h-12 w-12 text-red-500" />
                        </div>
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Terms of{' '}
                            <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Service
                            </span>
                        </h1>
                        <p className="mb-4 text-xl text-gray-300">
                            Please read these terms carefully before using our services
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                            <span>Effective Date: October 2024</span>
                            <span>•</span>
                            <span>Last Updated: October 2024</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="bg-white py-12 sticky top-20 z-30 border-b-2 border-gray-100">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {quickLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600 hover:shadow-lg"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <AlertCircle className="h-6 w-6 text-red-600" />
                                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
                            </div>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Welcome to Xchange Box Solutions Ltd. By accessing or using our services, including our
                                    mobile applications, websites, and platforms (collectively, the "Services"), you agree to
                                    be bound by these Terms of Service ("Terms").
                                </p>
                                <p>
                                    These Terms constitute a legally binding agreement between you and Xchange Box Solutions
                                    Ltd and its affiliates ("we," "us," or "our"). If you do not agree to these Terms, you may
                                    not access or use our Services.
                                </p>
                                <p className="font-semibold text-red-600">
                                    By continuing to use our Services, you acknowledge that you have read, understood, and
                                    agree to be bound by these Terms and our Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Acceptance & Eligibility */}
            <section className="bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-8 text-3xl font-bold text-gray-900">1. Acceptance and Eligibility</h2>
                        <div className="space-y-6">
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                                <h3 className="mb-3 text-xl font-bold text-gray-900">Eligibility Requirements</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>You must be at least 18 years old to use our Services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>You must have the legal capacity to enter into binding contracts</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>You must provide accurate and complete registration information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>You must comply with all applicable laws and regulations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* User Responsibilities */}
            <section id="user-responsibilities" className="scroll-mt-32 bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-8 text-3xl font-bold text-gray-900">2. User Responsibilities</h2>
                        <div className="space-y-6">
                            <p className="text-gray-700">
                                As a user of our Services, you agree to:
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                {[
                                    {
                                        title: 'Accurate Information',
                                        description: 'Provide true, accurate, current, and complete information during registration and use',
                                    },
                                    {
                                        title: 'Account Maintenance',
                                        description: 'Maintain and promptly update your account information to keep it accurate and complete',
                                    },
                                    {
                                        title: 'Lawful Use',
                                        description: 'Use the Services only for lawful purposes and in accordance with these Terms',
                                    },
                                    {
                                        title: 'Compliance',
                                        description: 'Comply with all applicable local, state, national, and international laws and regulations',
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="rounded-xl border-2 border-gray-200 bg-white p-6"
                                    >
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Account Security */}
            <section id="account-security" className="scroll-mt-32 bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3">
                                <ShieldAlert className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">3. Account Security</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-8">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Password and PIN Security</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        You are responsible for maintaining the confidentiality of your account password and PIN.
                                        You agree to:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-600" />
                                            <span>Not share your password, PIN, or account credentials with anyone</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-600" />
                                            <span>Notify us immediately of any unauthorized use of your account</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-600" />
                                            <span>Change your password immediately if you suspect it has been compromised</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-600" />
                                            <span>Accept responsibility for all activities that occur under your account</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4 font-semibold text-yellow-800">
                                        We will NEVER ask for your password or PIN via email, SMS, or phone. Any such request
                                        is fraudulent and should be reported to us immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services & Fees */}
            <section id="services-fees" className="scroll-mt-32 bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-green-500 to-green-600 p-3">
                                <DollarSign className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">4. Services and Fees</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Service Description</h3>
                                <p className="mb-4 text-gray-700">
                                    Xchange Box Solutions Ltd provides financial technology services including but not limited to:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>Trade financing through Farm4Factory</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>Community savings and lending through Kidashi</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>Digital payment and transaction services through PayRep</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <span>Financial infrastructure solutions through Shinobi Core</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Fees and Charges</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        We charge fees for certain services and transactions. You agree to pay all applicable fees as
                                        disclosed at the time of transaction.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                            <span>Transaction fees are displayed before you confirm any transaction</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                            <span>Fees may vary based on transaction type, amount, and service used</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                            <span>We reserve the right to modify fees with 30 days' notice</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                            <span>All fees are non-refundable unless otherwise stated</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prohibited Activities */}
            <section id="prohibited-activities" className="scroll-mt-32 bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3">
                                <UserX className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">5. Prohibited Activities</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">You may not use our Services to:</p>
                            <div className="space-y-3">
                                {[
                                    'Violate any laws, regulations, or third-party rights',
                                    'Engage in fraudulent, deceptive, or manipulative activities',
                                    'Conduct money laundering, terrorist financing, or other financial crimes',
                                    'Provide false, inaccurate, or misleading information',
                                    'Use another user\'s account without permission',
                                    'Interfere with or disrupt the integrity or performance of the Services',
                                    'Attempt to gain unauthorized access to our systems or networks',
                                    'Use the Services for any illegal or unauthorized purpose',
                                    'Transmit viruses, malware, or other harmful code',
                                    'Circumvent any security features or access controls',
                                ].map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.03 }}
                                        className="flex items-start gap-3 rounded-lg border-2 border-red-100 bg-red-50 p-4"
                                    >
                                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                                        <span className="text-gray-700">{activity}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Liability */}
            <section id="liability" className="scroll-mt-32 bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-purple-500 to-purple-600 p-3">
                                <Scale className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">6. Limitation of Liability</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-700">
                                    To the fullest extent permitted by law, Xchange Box Solutions Ltd and its affiliates shall
                                    not be liable for:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                                        <span>Indirect, incidental, special, consequential, or punitive damages</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                                        <span>Loss of profits, revenue, data, or business opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                                        <span>Damages resulting from unauthorized access to your account</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                                        <span>Service interruptions, delays, or errors</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6">
                                <p className="text-gray-700">
                                    <strong>Disclaimer:</strong> Our Services are provided "as is" and "as available" without
                                    warranties of any kind, either express or implied. We do not guarantee that the Services
                                    will be uninterrupted, secure, or error-free.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Termination */}
            <section id="termination" className="scroll-mt-32 bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-8 text-3xl font-bold text-gray-900">7. Termination</h2>
                        <div className="space-y-6">
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Our Right to Terminate</h3>
                                <p className="mb-4 text-gray-700">
                                    We reserve the right to suspend or terminate your access to the Services at any time,
                                    without notice, for any reason, including but not limited to:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                        <span>Violation of these Terms</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                        <span>Suspected fraudulent, abusive, or illegal activity</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                        <span>Failure to complete KYC verification</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                        <span>Prolonged inactivity</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Your Right to Terminate</h3>
                                <p className="text-gray-700">
                                    You may terminate your account at any time by contacting us. Upon termination, you remain
                                    responsible for any outstanding obligations, and we may retain certain information as
                                    required by law or regulation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Changes to Terms */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">8. Changes to Terms</h2>
                        <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                            <p className="mb-4 text-gray-700">
                                We reserve the right to modify these Terms at any time. We will notify you of material changes
                                through the Services or via email. Your continued use of the Services after such modifications
                                constitutes your acceptance of the updated Terms.
                            </p>
                            <p className="text-gray-700">
                                It is your responsibility to review these Terms periodically. The "Last Updated" date at the top
                                of this page indicates when these Terms were last revised.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">9. Contact Information</h2>
                        <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
                            <p className="mb-4 text-gray-700">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-red-600" />
                                    <a href="mailto:contact@xchangeboxng.com" className="text-red-600 hover:underline">
                                        contact@xchangeboxng.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-red-600" />
                                    <a href="tel:08137083075" className="text-red-600 hover:underline">
                                        08137083075
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-red-600 to-red-700 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-white">
                            Questions About Our Terms?
                        </h2>
                        <p className="mb-8 text-xl text-red-100">
                            Our team is here to help clarify any concerns
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                            >
                                <Mail className="h-5 w-5" />
                                Contact Us
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
