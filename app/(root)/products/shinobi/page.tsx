'use client';
import { motion } from 'framer-motion';
import { Database, Cpu, Shield, Zap, ArrowRight, Lock, FileCheck, Users, BarChart2, Globe, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { ImagePlaceholder } from '../../components/ui/image-placeholder';

export default function ShinobiPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Database className="h-4 w-4" /> Banking Infrastructure
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">Shinobi Core</h1>
            <p className="mb-8 text-xl text-purple-50">
              The digital core for microfinance. Complete banking infrastructure from core banking to compliance, all in one platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 hover:bg-gray-100">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Web Dashboard Showcase */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold">Shinobi Core Banking Platform</h2>
            <p className="text-xl text-gray-600">
              Complete digital infrastructure for microfinance institutions
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 mb-20">
            <div>
              <ImagePlaceholder
                type="web"
                label="Core Banking Dashboard"
                bgColor="from-purple-50 to-violet-100"
                accentColor="text-purple-600"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Unified Dashboard</h3>
                <p className="text-gray-600">Manage accounts, loans, and transactions from one interface</p>
              </div>
            </div>

            <div>
              <ImagePlaceholder
                type="web"
                label="Compliance & Reporting"
                bgColor="from-purple-50 to-violet-100"
                accentColor="text-purple-600"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Compliance Center</h3>
                <p className="text-gray-600">Automated regulatory reporting and audit trails</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <ImagePlaceholder
              type="web"
              label="Loan Management System"
              bgColor="from-purple-50 to-violet-100"
              accentColor="text-purple-600"
              className="max-w-5xl mx-auto"
            />
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">End-to-End Loan Management</h3>
              <p className="text-gray-600">From origination to collections, manage the complete loan lifecycle</p>
            </div>
          </div>

          {/* Core Features */}
          <div className="mx-auto max-w-5xl mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Banking</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Database,
                  title: 'Core Banking',
                  description: 'Complete account and transaction management'
                },
                {
                  icon: Lock,
                  title: 'Security First',
                  description: 'Bank-grade encryption and access controls'
                },
                {
                  icon: FileCheck,
                  title: 'Compliance',
                  description: 'Automated CBN and regulatory reporting'
                },
                {
                  icon: Users,
                  title: 'Multi-Branch',
                  description: 'Manage multiple branches from one platform'
                },
                {
                  icon: BarChart2,
                  title: 'Analytics',
                  description: 'Real-time financial insights and reports'
                },
                {
                  icon: Globe,
                  title: 'API Integration',
                  description: 'Connect to payment gateways and third parties'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-50 py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold">Complete Banking Suite</h2>
            <p className="text-xl text-gray-600">
              Everything you need to run a modern microfinance institution
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Database,
                title: 'Core Banking',
                features: ['Account Management', 'Transaction Processing', 'General Ledger', 'Chart of Accounts']
              },
              {
                icon: Cpu,
                title: 'Loan Management',
                features: ['Loan Origination', 'Credit Scoring', 'Collections', 'Restructuring']
              },
              {
                icon: Shield,
                title: 'Compliance',
                features: ['KYC/AML', 'CBN Reporting', 'Audit Trails', 'Risk Management']
              },
              {
                icon: RefreshCw,
                title: 'Operations',
                features: ['Teller System', 'Cash Management', 'Branch Network', 'Mobile Banking']
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100">
                  <module.icon className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{module.title}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 text-purple-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Institution?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Join leading microfinance institutions using Shinobi Core
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-4 font-semibold text-white hover:from-purple-700 hover:to-violet-700"
            >
              Schedule a Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
