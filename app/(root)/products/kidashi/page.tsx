'use client';

import { motion } from 'framer-motion';
import { Users, Heart, TrendingUp, Shield, ArrowRight, CheckCircle2, Target, Award, Smartphone, FileCheck, Zap, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ImagePlaceholder } from '../../components/ui/image-placeholder';

const stats = [
  {
    icon: Users,
    value: '5,000',
    label: 'Women to Onboard',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: TrendingUp,
    value: '70%',
    label: 'Targeted DPI-Ready',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Award,
    value: '90%',
    label: 'Target Repayment Rate',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'NDPC Compliant',
    color: 'from-blue-500 to-indigo-600',
  },
];

const problemPoints = [
  {
    title: '20% Gender Gap',
    description: 'Only 40% of women in Kaduna have formal financial access vs 60% of men',
    icon: '📊',
  },
  {
    title: 'Traditional Barriers',
    description: 'Gender roles, low literacy, and inadequate digital infrastructure exclude women',
    icon: '🚧',
  },
  {
    title: 'No Credit History',
    description: 'Lack of identification (NIN/BVN) and formal financial records',
    icon: '📋',
  },
  {
    title: 'Informal Savings',
    description: 'Reliance on unsafe informal groups with no growth opportunities',
    icon: '💰',
  },
];

const features = [
  {
    icon: Users,
    title: 'Community Agent Network',
    description: 'Trusted local traders onboard women into formal financial services, eliminating traditional barriers.',
  },
  {
    icon: Smartphone,
    title: 'Low-Tech Solutions',
    description: 'USSD and basic mobile interfaces designed for low-literacy users and areas with limited internet.',
  },
  {
    icon: Eye,
    title: 'AI-Powered Monitoring',
    description: 'Smart algorithms track repayment patterns and provide early intervention for at-risk accounts.',
  },
  {
    icon: FileCheck,
    title: 'DPI Integration',
    description: 'Seamless NIN/BVN registration and verification powered by Nigeria\'s Digital Public Infrastructure.',
  },
  {
    icon: Zap,
    title: 'Daily Repayment Model',
    description: 'Flexible micro-credit with daily repayment cycles matching women traders\' cash flow patterns.',
  },
  {
    icon: Shield,
    title: 'NDPC-Compliant',
    description: '100% compliant data handling with explicit consent and privacy protection for all users.',
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Agent Identifies Woman',
    description: 'Trusted community trader identifies unbanked women in their network',
    icon: '👥',
  },
  {
    step: '2',
    title: 'Low-Tech Onboarding',
    description: 'USSD or basic mobile app guides through registration, including NIN/BVN enrollment if needed',
    icon: '📱',
  },
  {
    step: '3',
    title: 'Account Activation',
    description: 'Tier 0 or Tier 1 Payrep MFB account created with full NDPC consent',
    icon: '✅',
  },
  {
    step: '4',
    title: 'Access to Credit',
    description: 'Woman receives trade financing with daily repayment schedule',
    icon: '💳',
  },
  {
    step: '5',
    title: 'AI Monitoring',
    description: 'System tracks repayments and provides support, building credit history',
    icon: '🤖',
  },
  {
    step: '6',
    title: 'Financial Growth',
    description: 'Graduated access to larger credit facilities and formal banking services',
    icon: '📈',
  },
];

const objectives = [
  'Onboard 5,000 women into Tier 0 or Tier 1 Payrep MFB accounts',
  'Enable 70% of unbanked women to become DPI-ready through NIN/BVN registration',
  'Achieve 90% repayment rate for digital credit in first year',
  'Maintain 100% NDPC-compliant consent and data handling',
  'Process 95% of agent transactions in under 10 seconds',
];

const beneficiaries = [
  {
    title: 'Women Traders',
    description: 'Rural women gain access to formal financial services, secure savings, and fair credit',
    icon: '👩‍💼',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Community Agents',
    description: 'Local shop owners earn commissions while empowering their communities',
    icon: '🏪',
    color: 'from-purple-500 to-violet-600',
  },
  {
    title: 'Payrep MFB',
    description: 'Microfinance bank expands reach and fulfills financial inclusion mandate',
    icon: '🏦',
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function KidashiPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm w-fit">
                <Users className="h-4 w-4" />
                Women Financial Inclusion
              </div>
              <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
                Kidashi
              </h1>
              <p className="mb-4 text-2xl font-semibold text-pink-100">
                Empowering Women Through Digital Trust-Circle Finance
              </p>
              <p className="mb-8 text-lg text-pink-50">
                Bridging the 20% gender financial inclusion gap in Kaduna State by transforming
                informal savings groups into formal, DPI-powered financial networks.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-pink-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                >
                  Partner With Us
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
                  src="/images/kidashi-woman.jpg"
                  alt="Kidashi - Empowering Women Through Financial Inclusion"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-800/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4 text-5xl font-bold">70%</div>
                  <div className="text-xl text-pink-100 mb-6">Women-Led Programs</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                      <div className="text-2xl font-bold">5,000</div>
                      <div className="text-sm text-pink-100">Target Users</div>
                    </div>
                    <div className="rounded-lg bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                      <div className="text-2xl font-bold">90%</div>
                      <div className="text-sm text-pink-100">Repayment Goal</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-1 text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
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
              The Challenge We're Solving
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Women in Kaduna State face systemic barriers to formal financial services.
              National surveys show only <span className="font-bold text-pink-600">40% of women</span> have
              formal financial access, compared to 60% of men — a critical 20% gender gap.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {problemPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border-2 border-pink-200 bg-white p-6 text-center transition-all hover:border-pink-500 hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{point.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{point.title}</h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 rounded-2xl border-2 border-pink-200 bg-pink-50 p-8 text-center"
          >
            <p className="text-lg font-semibold text-gray-900">
              <span className="text-pink-600">The Impact:</span> Women traders operate in the informal
              sector without access to secure savings, fair credit, or growth opportunities. They rely
              on unsafe informal savings groups with no legal protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How Kidashi Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From informal savings to formal financial inclusion in 6 simple steps
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-pink-500 hover:shadow-xl">
                  <div className="mb-4 text-6xl">{item.icon}</div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
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
              The Kidashi Mobile App
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Designed for low-literacy users with USSD fallback for areas with limited internet
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-3 items-start">
            {/* App Screenshot 1 - Onboarding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <ImagePlaceholder
                type="mobile"
                label="Onboarding Screen"
                bgColor="from-pink-50 to-rose-100"
                accentColor="text-pink-600"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Simple Registration</h3>
              <p className="mt-2 text-gray-600">
                Agent-assisted onboarding with NIN/BVN capture in local languages
              </p>
            </motion.div>

            {/* App Screenshot 2 - Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <ImagePlaceholder
                type="mobile"
                label="Main Dashboard"
                bgColor="from-pink-50 to-rose-100"
                accentColor="text-pink-600"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Clear Dashboard</h3>
              <p className="mt-2 text-gray-600">
                Large buttons, visual icons, and voice guidance for easy navigation
              </p>
            </motion.div>

            {/* App Screenshot 3 - Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <ImagePlaceholder
                type="mobile"
                label="Daily Repayment"
                bgColor="from-pink-50 to-rose-100"
                accentColor="text-pink-600"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Easy Payments</h3>
              <p className="mt-2 text-gray-600">
                Daily repayment tracking with SMS reminders and offline capabilities
              </p>
            </motion.div>
          </div>

          {/* App Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-8 md:p-12"
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Built for Inclusion
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '🌍', title: 'Local Languages', desc: 'Available in Hausa, Igbo, Yoruba, and English' },
                { icon: '📶', title: 'Offline Mode', desc: 'Works without internet connection' },
                { icon: '🔊', title: 'Voice Guidance', desc: 'Audio instructions for all actions' },
                { icon: '📲', title: 'USSD Fallback', desc: '*123# access for basic phones' },
                { icon: '🔐', title: 'Biometric Login', desc: 'Fingerprint and face ID support' },
                { icon: '💬', title: 'SMS Alerts', desc: 'Transaction confirmations via SMS' },
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

      {/* Features */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Platform Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Built on Digital Public Infrastructure for scale and inclusivity
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-4 rounded-2xl border-2 border-pink-200 bg-white p-8 transition-all hover:border-pink-500 hover:shadow-xl"
                >
                  <div className="inline-flex w-fit rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Our Goals & Objectives
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Aligned with Nigeria's financial inclusion targets and SDG goals
              </p>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-pink-600 mt-1" />
                    <span className="text-lg text-gray-700">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[500px]">
                <Image
                  src="/images/kidashi-woman.jpg"
                  alt="Women Empowerment in Kaduna State"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/95 via-pink-800/80 to-pink-700/70" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
                  <h3 className="mb-6 text-3xl font-bold">Context: Kaduna State</h3>
                  <div className="space-y-4 text-pink-50">
                    <p className="text-lg">
                      Kaduna State faces a <span className="font-bold text-white">20% gender gap</span> in
                      access to formal financial services (40% women vs 60% men).
                    </p>
                    <p className="text-lg">
                      Barriers include traditional gender roles, low literacy, and inadequate digital infrastructure.
                    </p>
                    <p className="text-lg">
                      Kidashi aligns with <span className="font-bold text-white">Nigeria's financial inclusion goals</span>,
                      leveraging NIN/BVN systems and NDPC-compliant data handling.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
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
              Who Benefits
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A win-win ecosystem for women, communities, and financial institutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {beneficiaries.map((beneficiary, index) => (
              <motion.div
                key={beneficiary.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-8 text-center transition-all hover:border-pink-500 hover:shadow-xl">
                  <div className="mb-6 text-7xl">{beneficiary.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{beneficiary.title}</h3>
                  <p className="text-gray-600">{beneficiary.description}</p>
                  <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${beneficiary.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Join the Financial Inclusion Movement
            </h2>
            <p className="mb-8 text-xl text-pink-100">
              Partner with us to empower 5,000 women in Kaduna State and beyond
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-pink-600 transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Become a Partner
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
