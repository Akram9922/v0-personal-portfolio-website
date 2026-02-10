'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    title: 'Multichain Explorer',
    description: 'Working across L1, L2, and Solana ecosystems. Early user of new protocols and onchain tools.',
  },
  {
    title: 'Content & Experiments',
    description: 'Love to experiment with new apps, test protocols, and create content.',
  },
]

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
