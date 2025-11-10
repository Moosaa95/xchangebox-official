'use client';

import { motion } from 'framer-motion';
import { Wheat, Users, Car, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'Farm4Factory',
    tagline: 'Turning supplies into bankable assets',
    description: 'Bridge the liquidity gap in agricultural supply chains. Farmers get paid instantly, factories get flexible terms.',
    category: 'Agriculture Finance',
    icon: Wheat,
    emoji: '🌾',
    href: '/products/farm4factory',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    stats: { label: '₦200M+ trades financed', value: '₦200M+' },
  },
  {
    name: 'Kidashi',
    tagline: 'Empowering women through trust-circle finance',
    description: 'Digitize traditional savings groups and unlock formal credit access for women entrepreneurs across Nigeria.',
    category: 'Women Inclusion',
    icon: Users,
    emoji: '👥',
    href: '/products/kidashi',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    stats: { label: '70% women-led programs', value: '70%' },
  },
  {
    name: 'Rouche',
    tagline: 'Urban mobility, powered by data',
    description: 'Asset financing platform for urban transport. Get drivers on the road with flexible payment plans and real-time monitoring.',
    category: 'Mobility',
    icon: Car,
    emoji: '🚗',
    href: '/products/rouche',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    stats: { label: 'Active mobility platform', value: 'Live' },
  },
  {
    name: 'Shinobi Core',
    tagline: 'The digital core for microfinance',
    description: 'Complete banking infrastructure for microfinance institutions. From core banking to compliance, all in one platform.',
    category: 'Infrastructure',
    icon: Database,
    emoji: '💾',
    href: '/products/shinobi',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    stats: { label: 'Complete MFB infrastructure', value: 'Core' },
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-darker))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-darker))] py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-purple-500/10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
              An Ecosystem,{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Not Just an App
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Four interconnected platforms powering finance, trade, and inclusion across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="grid gap-12 md:gap-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                        <Icon className="h-4 w-4" />
                        {product.category}
                      </div>
                      <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        {product.name}
                      </h2>
                      <p className="mb-4 text-xl font-semibold text-gray-700">
                        {product.tagline}
                      </p>
                      <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="mb-8 rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
                        <div className="text-3xl font-bold text-gray-900">
                          {product.stats.value}
                        </div>
                        <div className="text-gray-600">{product.stats.label}</div>
                      </div>
                      <Link
                        href={product.href}
                        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${product.color} px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-${product.color.split('-')[1]}-500/50`}
                      >
                        Learn More
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <div className={`relative overflow-hidden rounded-2xl border-4 ${product.borderColor} ${product.bgColor} p-12 aspect-square flex items-center justify-center transition-all group-hover:shadow-2xl`}>
                        <div className="text-center">
                          <div className="mb-6 text-9xl">{product.emoji}</div>
                          <div className={`inline-flex rounded-xl bg-gradient-to-br ${product.color} px-6 py-3`}>
                            <Icon className="h-12 w-12 text-white" />
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${product.color} opacity-10 blur-3xl`} />
                        <div className={`absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br ${product.color} opacity-10 blur-3xl`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-red-100">
              Choose the product that fits your needs or talk to our team
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Contact Sales
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
