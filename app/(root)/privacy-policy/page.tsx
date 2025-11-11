'use client';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const sections = [
    {
        icon: Shield,
        title: 'Who We Are',
        id: 'who-we-are',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: UserCheck,
        title: 'Your Rights',
        id: 'your-rights',
        color: 'from-green-500 to-green-600',
    },
    {
        icon: Eye,
        title: 'Data We Collect',
        id: 'data-collection',
        color: 'from-purple-500 to-purple-600',
    },
    {
        icon: FileText,
        title: 'How We Use Data',
        id: 'data-usage',
        color: 'from-red-500 to-red-600',
    },
    {
        icon: Lock,
        title: 'Data Protection',
        id: 'data-protection',
        color: 'from-orange-500 to-orange-600',
    },
];

export default function PrivacyPolicyPage() {
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
                            <Shield className="h-12 w-12 text-red-500" />
                        </div>
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Data Privacy{' '}
                            <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Policy
                            </span>
                        </h1>
                        <p className="mb-4 text-xl text-gray-300">
                            Your privacy is our priority. Learn how we protect and use your data.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                            <span>Version 1.0</span>
                            <span>•</span>
                            <span>Last Updated: October 2024</span>
                            <span>•</span>
                            <span>Next Review: October 2027</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="bg-white py-12 sticky top-20 z-30 border-b-2 border-gray-100">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600 hover:shadow-lg"
                                >
                                    <Icon className="h-4 w-4" />
                                    {section.title}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Background */}
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
                                <h2 className="text-2xl font-bold text-gray-900">Background</h2>
                            </div>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Xchange Box Solutions Ltd and its affiliate companies (together "Xchange Box Solutions Ltd"
                                    or "We" or "Our") are totally committed to protecting and respecting the privacy of our
                                    customers and agents.
                                </p>
                                <p>
                                    When you sign up and use Xchange Box Solutions Ltd services, you accept the terms described
                                    within this agreement. We will not share your personal information with anyone except as
                                    described in this Privacy policy.
                                </p>
                                <p>
                                    This Privacy Policy is intended to meet our obligations under the Nigeria Data Protection Act
                                    (NDPA), a legal framework that sets guidelines for the protection and processing of personal
                                    information of individuals within the Federal Republic of Nigeria.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="who-we-are" className="scroll-mt-32 bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-blue-500 to-blue-600 p-3">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Who We Are and How to Contact Us</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Xchange Box Solutions Ltd is a FinTech company dedicated to supporting rural SMEs by
                                providing them with access to credit and digitized transaction records. Our platform, PayRep,
                                uses low-end technology to enable credit access, repayments, and collections, while also
                                generating empirical transaction records. This approach supports sustainable growth for
                                businesses in rural communities.
                            </p>
                            <div className="mt-6 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-blue-600" />
                                        <a href="mailto:contact@xchangeboxng.com" className="text-blue-600 hover:underline">
                                            contact@xchangeboxng.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-blue-600" />
                                        <a href="tel:08137083075" className="text-blue-600 hover:underline">
                                            08137083075
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="scroll-mt-32 bg-gray-50 py-16">
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
                                <UserCheck className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Your Rights Relating to Personal Data</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">
                                You have the following rights under this Privacy Policy:
                            </p>
                            <div className="grid gap-4">
                                {[
                                    {
                                        title: 'Request access to your personal data',
                                        description: 'Receive a copy of the personal data we hold about you and check that we are lawfully processing it.',
                                    },
                                    {
                                        title: 'Request correction',
                                        description: 'Have any incorrect or incomplete information about you corrected.',
                                    },
                                    {
                                        title: 'Request erasure',
                                        description: 'Ask us to delete or remove personal data where there is no good reason for us continuing to process it.',
                                    },
                                    {
                                        title: 'Object to processing',
                                        description: 'Object to processing of your personal data where we are relying on a legitimate interest.',
                                    },
                                    {
                                        title: 'Request restriction',
                                        description: 'Ask us to suspend the processing of personal data about you.',
                                    },
                                    {
                                        title: 'Request transfer',
                                        description: 'Receive your personal data in a structured, commonly used, machine-readable format.',
                                    },
                                    {
                                        title: 'Withdraw consent',
                                        description: 'Withdraw your consent at any time where we are relying on consent to process your personal data.',
                                    },
                                ].map((right, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="rounded-xl border-2 border-gray-200 bg-white p-6"
                                    >
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">{right.title}</h3>
                                        <p className="text-gray-600">{right.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Data Collection */}
            <section id="data-collection" className="scroll-mt-32 bg-white py-16">
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
                                <Eye className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">What Personal Data We Collect</h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">1. Customer Information</h3>
                                <p className="mb-4 text-gray-700">
                                    To use the Xchange Box Solutions Ltd Services, you must provide customer information via
                                    our registration, wallet upgrade or profile forms. This includes:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                                        <span>Full name, email address, phone number, address, gender, date of birth</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                                        <span>Bank Verification Number (BVN), ID documentation and photograph (where applicable)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                                        <span>Communication records with our Customer Services team</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">2. Device Information</h3>
                                <p className="mb-4 text-gray-700">
                                    The following information may be collected automatically when you use our mobile app:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                                        <span>Device details, unique identifiers (IMEI or serial number), SIM card information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                                        <span>Mobile network, operating system and browser settings</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">3. Location Information</h3>
                                <p className="text-gray-700">
                                    Certain features may require location information from your device's GPS. With your
                                    consent, this information will be collected for these services. You can turn off location
                                    services, though some features may become unavailable.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">4. Analytics & Tracking</h3>
                                <p className="text-gray-700">
                                    We use in-app analytics technologies like Google Analytics to help improve and simplify
                                    the overall app design and service. We also use cookies to identify and track visitors and
                                    their usage patterns.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Data Usage */}
            <section id="data-usage" className="scroll-mt-32 bg-gray-50 py-16">
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
                                <FileText className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">How We Use Your Personal Data</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">
                                We collect and use your personal data only where we have lawful bases. The lawful basis
                                depends on the services you use and how you use them:
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Service Delivery',
                                        description: 'To provide you the services, including operating the platform, customer support, and personalized features.',
                                    },
                                    {
                                        title: 'Payment Processing',
                                        description: 'To process payments and share necessary information with transaction parties (excluding full card/account numbers).',
                                    },
                                    {
                                        title: 'Identity Verification',
                                        description: 'To comply with financial regulations and prevent fraud.',
                                    },
                                    {
                                        title: 'Legitimate Interests',
                                        description: 'For research and development, marketing, and protecting our legal rights.',
                                    },
                                    {
                                        title: 'Legal Compliance',
                                        description: 'To comply with legal or regulatory obligations.',
                                    },
                                ].map((usage, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="rounded-xl border-2 border-gray-200 bg-white p-6"
                                    >
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">{usage.title}</h3>
                                        <p className="text-gray-600">{usage.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Data Protection */}
            <section id="data-protection" className="scroll-mt-32 bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <div className="inline-flex rounded-xl bg-linear-to-br from-orange-500 to-orange-600 p-3">
                                <Lock className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">How We Protect Your Personal Data</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">
                                Xchange Box Solutions Ltd is entirely committed to protecting the information we collect from
                                you. We maintain appropriate administrative, technical and physical safeguards designed to
                                prevent accidental, unlawful or unauthorized destruction, loss, alteration, access, disclosure
                                or use of your information.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                {[
                                    { icon: '🔒', title: 'Data Encryption', description: 'End-to-end encryption for all sensitive data' },
                                    { icon: '🛡️', title: 'Firewalls', description: 'Advanced firewall protection for our systems' },
                                    { icon: '👮', title: 'Security Guards', description: 'Physical security at our facilities' },
                                    { icon: '🔐', title: 'Access Control', description: 'Strict access controls and authentication' },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6 text-center"
                                    >
                                        <div className="mb-3 text-4xl">{feature.icon}</div>
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6">
                                <h3 className="mb-3 text-lg font-bold text-gray-900">Data Retention</h3>
                                <p className="text-gray-700">
                                    We retain your information for as long as your account is active or as reasonably needed
                                    for the purposes outlined in this policy. We are required to retain transaction details
                                    for the period mandated under financial regulations.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Your Responsibilities */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Your Responsibilities</h2>
                        <div className="rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <AlertCircle className="h-6 w-6 text-yellow-600" />
                                <h3 className="text-xl font-bold text-gray-900">Important Security Notice</h3>
                            </div>
                            <div className="space-y-3 text-gray-700">
                                <p>
                                    You are responsible for the protection of your password or PIN. You must not share your
                                    credentials with anyone.
                                </p>
                                <p>
                                    <strong>We will never request for your PIN or password via email, SMS, or any other means.</strong> If
                                    you receive such communication, please disregard and contact us immediately.
                                </p>
                                <p>
                                    If you believe your password or PIN has been compromised, please change it immediately
                                    and contact us.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact & Complaints */}
            <section className="bg-white py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact & Complaints</h2>
                        <div className="space-y-6">
                            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
                                <h3 className="mb-3 text-lg font-bold text-gray-900">Questions or Concerns?</h3>
                                <p className="mb-4 text-gray-700">
                                    If you have any questions about this Privacy Policy or our practices, please contact us:
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
                            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
                                <h3 className="mb-3 text-lg font-bold text-gray-900">Filing a Complaint</h3>
                                <p className="text-gray-700">
                                    If you would like to submit a complaint regarding this Privacy Policy or our practices,
                                    please contact us. We endeavor to reply to complaints as soon as possible. If you feel
                                    your complaint has not been adequately resolved, the NDPA gives you the right to contact
                                    the National Information Technology Development Agency (NITDA).
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Changes to Policy */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Changes to this Privacy Policy</h2>
                        <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
                            <p className="text-gray-700">
                                Xchange Box Solutions Ltd may change its Privacy Policy from time to time, at our sole
                                discretion. We will notify you when changes have been made. By continuing to use the mobile
                                application or website after the change, you agree to accept the new policy.
                            </p>
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
                            Have Questions About Your Privacy?
                        </h2>
                        <p className="mb-8 text-xl text-red-100">
                            Our team is here to help you understand how we protect your data
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                        >
                            <Mail className="h-5 w-5" />
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
