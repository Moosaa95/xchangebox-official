'use client';

import { motion } from 'framer-motion';
import { Wheat, TrendingUp, Clock, Shield, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ImagePlaceholder } from '../../components/ui/image-placeholder';


const features = [
  {
    icon: Clock,
    title: 'Instant Trade Finance',
    description: 'Convert purchase orders into immediate working capital',
  },
  {
    icon: Shield,
    title: 'Invoice Collateralization',
    description: 'Turn supplier invoices into bankable assets',
  },
  {
    icon: TrendingUp,
    title: 'Supply Chain Optimization',
    description: 'End-to-end visibility and liquidity management',
  },
  {
    icon: Users,
    title: 'Multi-Party Settlement',
    description: 'Automated payments between farmers, merchants, and factories',
  },
];

const benefits = [
  'Access working capital without traditional collateral',
  'Reduce payment cycles from 60-90 days to real-time',
  'Transparent pricing and instant approval decisions',
  'Integrated logistics and quality verification',
  'NDPC-compliant data handling',
  'Mobile-first interface for farmers',
];

const howItWorks = [
  {
    step: '1',
    title: 'Farmer Delivers',
    description: 'Farmer delivers produce to the factory or merchant',
    icon: '🚜',
  },
  {
    step: '2',
    title: 'Quality Check',
    description: 'Product quality verified and invoice generated',
    icon: '✅',
  },
  {
    step: '3',
    title: 'Instant Payment',
    description: 'Farmer receives payment within 24 hours',
    icon: '💰',
  },
  {
    step: '4',
    title: 'Factory Settles',
    description: 'Factory settles on agreed terms (30/60/90 days)',
    icon: '🏭',
  },
];

export default function Farm4FactoryPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm w-fit">
                <Wheat className="h-4 w-4" />
                Agriculture Finance
              </div>
              <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                Farm4Factory
              </h1>
              <p className="mb-8 text-xl text-green-50">
                Turning agricultural supplies into bankable assets. Finance the gap between
                harvest and payment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
                <Image
                  src="/images/tractor.png"
                  alt="Farm4Factory Agricultural Technology"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4 text-5xl font-bold">₦200M+</div>
                  <div className="text-xl text-green-100 mb-6">Trades Financed</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                      <div className="text-2xl font-bold">1,000+</div>
                      <div className="text-sm text-green-100">Farmers</div>
                    </div>
                    <div className="rounded-lg bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-green-100">Factories</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">The Problem We Solve</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Farmers deliver produce to factories but wait <span className="font-bold text-red-600">60-90 days</span> for payment.
                This liquidity gap cripples their ability to plant the next season, buy inputs, or
                support their families. Meanwhile, factories can't always find reliable suppliers
                because farmers lack working capital.
              </p>
              <div className="mt-12 rounded-2xl border-2 border-green-200 bg-green-50 p-8">
                <p className="text-lg font-semibold text-green-900">
                  Farm4Factory bridges this gap by providing instant liquidity to farmers while
                  giving factories flexible payment terms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Simple, transparent, and fast
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full rounded-2xl border-2 border-green-200 bg-white p-8 text-center transition-all hover:border-green-500 hover:shadow-xl">
                  <div className="mb-4 text-6xl">{item.icon}</div>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <ArrowRight className="h-8 w-8 text-green-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Key Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Built for the realities of agricultural supply chains
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-green-500 hover:shadow-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-24">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Why Farmers Choose Farm4Factory
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Partnership Model Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative h-64 overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src="/images/farm4factory-partnership-model.png"
                  alt="Farm4Factory Partnership Model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Partnership Ecosystem</p>
                  <p className="text-xs text-gray-200">Connecting Farmers, Factories & Finance</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 p-12">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 text-white">
                  <h3 className="mb-6 text-3xl font-bold">Real Impact Story</h3>
                  <div className="mb-4 text-6xl">👨‍🌾</div>
                  <blockquote className="mb-4 text-xl italic">
                    "Before Farm4Factory, I had to borrow from loan sharks at 20% monthly interest
                    just to survive until factory payments came. Now I get paid within 24 hours and
                    can reinvest immediately."
                  </blockquote>
                  <div className="font-semibold">— Cassava Farmer, Ogun State</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web App Showcase */}
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
              Farm4Factory Web Dashboard
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Real-time visibility and control for factories, merchants, and financial institutions
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                type="web"
                label="Supply Chain Dashboard"
                bgColor="from-green-50 to-emerald-100"
                accentColor="text-green-600"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Complete Visibility</h3>
              <p className="mt-2 text-gray-600">
                Track every transaction from farm to factory in real-time with AI-powered analytics
              </p>
            </motion.div>

            {/* Analytics Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <ImagePlaceholder
                type="web"
                label="Invoice Management"
                bgColor="from-green-50 to-emerald-100"
                accentColor="text-green-600"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Smart Financing</h3>
              <p className="mt-2 text-gray-600">
                Automated invoice factoring and instant liquidity provision for your suppliers
              </p>
            </motion.div>
          </div>

          {/* Platform Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-8 md:p-12"
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Enterprise-Grade Platform
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '📊', title: 'Real-Time Analytics', desc: 'Live dashboards and KPI tracking' },
                { icon: '🔗', title: 'API Integration', desc: 'Connect to your existing ERP systems' },
                { icon: '📱', title: 'Mobile Access', desc: 'Manage on-the-go with mobile app' },
                { icon: '🔐', title: 'Bank-Level Security', desc: 'End-to-end encryption and compliance' },
                { icon: '⚡', title: 'Instant Settlement', desc: 'Automated payments in milliseconds' },
                { icon: '📄', title: 'Smart Contracts', desc: 'Automated trade execution' },
                { icon: '🌍', title: 'Multi-Location', desc: 'Manage multiple sites from one dashboard' },
                { icon: '💼', title: 'Role-Based Access', desc: 'Granular permissions and audit logs' },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="mb-8 text-xl text-green-100">
              Join hundreds of farmers and factories already using Farm4Factory
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Start Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
