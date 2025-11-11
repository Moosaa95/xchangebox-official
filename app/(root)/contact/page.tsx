'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
    {
        icon: Mail,
        title: 'Email Us',
        detail: 'contact@xchangeboxng.com',
        description: 'Send us an email anytime',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: Phone,
        title: 'Call Us',
        detail: '08091024666',
        description: 'Mon-Fri from 8am to 6pm',
        color: 'from-green-500 to-green-600',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        detail: 'Plot 2787, Shehu Shagari Way, Maitama, Abuja',
        description: 'Come say hello at our office',
        color: 'from-red-500 to-red-600',
    },
];

const faqs = [
    {
        question: 'How quickly can I get started?',
        answer: 'Most partners are onboarded within 7-14 days. We handle all the setup and integration for you.',
    },
    {
        question: 'What are the fees?',
        answer: 'We charge a small transaction fee based on your volume. Contact us for a custom quote.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes! We\'re NDPC compliant with end-to-end encryption and regular security audits.',
    },
    {
        question: 'Can I integrate with my existing systems?',
        answer: 'Absolutely. Our API is designed for easy integration with most ERPs and financial systems.',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'general',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send the data to your backend
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen pt-20">
            {/* Hero */}
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
                        <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                            Let's Build Something{' '}
                            <span className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Amazing Together
                            </span>
                        </h1>
                        <p className="mb-8 text-xl text-gray-300">
                            Whether you're a farmer, factory, investor, or partner — we'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="bg-white py-16">
                <div className="container-custom">
                    <div className="grid gap-8 md:grid-cols-3">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all hover:border-red-500 hover:shadow-xl">
                                        <div className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${method.color} p-4`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">{method.title}</h3>
                                        <p className="mb-1 text-lg font-semibold text-red-600">{method.detail}</p>
                                        <p className="text-sm text-gray-600">{method.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-gray-50 py-24">
                <div className="container-custom">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Send Us a Message</h2>
                            <p className="mb-8 text-lg text-gray-600">
                                Fill out the form and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-gray-700">
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="+234 XXX XXX XXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-gray-700">
                                        I'm interested in *
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        required
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="farm4factory">Farm4Factory</option>
                                        <option value="kidashi">Kidashi</option>
                                        <option value="shinobi">Shinobi Core</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="investment">Investment Opportunity</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-red-500 focus:outline-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50 disabled:opacity-50"
                                    disabled={submitted}
                                >
                                    {submitted ? (
                                        <>
                                            <MessageCircle className="h-5 w-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-lg bg-green-50 border-2 border-green-200 p-4 text-center text-green-800"
                                    >
                                        Thank you! We'll get back to you within 24 hours.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* FAQ */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">
                                Frequently Asked Questions
                            </h2>
                            <p className="mb-8 text-lg text-gray-600">
                                Quick answers to common questions
                            </p>

                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-red-500 hover:shadow-lg"
                                    >
                                        <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-8 rounded-2xl bg-linear-to-br from-red-600 to-red-700 p-8 text-white"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Clock className="h-8 w-8" />
                                    <h3 className="text-2xl font-bold">Response Time</h3>
                                </div>
                                <p className="text-red-100">
                                    We typically respond to all inquiries within <span className="font-bold">24 hours</span> during business days.
                                    For urgent matters, please call us directly.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
                            Find Us
                        </h2>
                        <p className="mb-12 text-center text-lg text-gray-600">
                            Located in Maitama, Abuja, Nigeria
                        </p>
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9267944836385!2d7.4869395!3d9.0850101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2698640729%3A0xc5e504bf85354941!2sxchangebox!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="XchangeBox Office Location"
                            />
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="https://www.google.com/maps/place/xchangebox/@9.0850101,7.4869395,17z/data=!3m1!4b1!4m6!3m5!1s0x104e0b2698640729:0xc5e504bf85354941!8m2!3d9.0850101!4d7.4895144!16s%2Fg%2F11jl30sm3y?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
                            >
                                <MapPin className="h-5 w-5" />
                                View on Google Maps
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
