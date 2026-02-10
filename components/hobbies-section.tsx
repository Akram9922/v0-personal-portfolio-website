'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Code } from 'lucide-react'
import { HeroCharacter } from './hero-character'

const hobbies = [
  {
    title: 'Creating content',
    icon: Sparkles,
    description: 'Sharing insights on blockchain and Web3',
  },
  {
    title: 'Exploring new chains',
    icon: Zap,
    description: 'Testing emerging protocols and ecosystems',
  },
  {
    title: 'Experimenting with apps',
    icon: Code,
    description: 'Building and shipping mini-apps',
  },
]

export function HobbiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
        >
          My Hobbies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors group-hover:scale-110 transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm">{hobby.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* 3D Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card/50 to-background border border-border/50"
        >
          <HeroCharacter />
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 px-3 py-2 rounded-lg backdrop-blur-sm">
            Made with Web3 ✨
          </div>
        </motion.div>
      </div>
    </section>
  )
}
