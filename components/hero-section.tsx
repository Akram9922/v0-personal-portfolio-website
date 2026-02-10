'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl w-full flex items-center gap-12 relative z-10">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            I am Akram,
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            an onchain explorer building on{' '}
            <span className="text-primary font-semibold">Base</span>. I create content, ship
            mini-apps, and occasionally take heroic losses in trades, but I'm always early where
            the future is being built.
          </p>
        </motion.div>

        {/* Right side portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 hidden lg:flex items-center justify-center"
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 blur-3xl opacity-50"></div>
            <Image
              src="/akram-portrait.jpg"
              alt="Akram portrait"
              fill
              className="object-cover relative z-10"
              priority
            />
            {/* Floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
