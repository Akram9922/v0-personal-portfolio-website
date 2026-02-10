'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Hey, I'm <span className="text-primary">Akram</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Onchain explorer building on Base. I create content, develop mini-apps, and explore the Web3 ecosystem.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Passionate about blockchain, creativity, and building products that matter.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                View My Work
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                Connect
              </button>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-60" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative h-full rounded-2xl overflow-hidden border border-primary/20"
            >
              <Image
                src="/akram-portrait.jpg"
                alt="Akram"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Multichain Explorer',
                desc: 'Deep dive into blockchain data, analyze trends, and uncover onchain insights across networks.'
              },
              {
                title: 'Content Creator',
                desc: 'Share Web3 knowledge through engaging content and educational materials.'
              },
              {
                title: 'Mini-App Builder',
                desc: 'Develop innovative dApps and tools on Base and other blockchains.'
              },
              {
                title: 'Research & Analysis',
                desc: 'Investigate airdrop opportunities and emerging protocols in the Web3 space.'
              }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-background border border-primary/20 rounded-lg hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                name: 'Base Analytics Dashboard',
                desc: 'Real-time monitoring and analysis of Base network activity with interactive charts.'
              },
              {
                name: 'Farcaster Mini-Apps',
                desc: 'Innovative tools and applications built for the Farcaster ecosystem.'
              },
              {
                name: 'Airdrop Research Platform',
                desc: 'Comprehensive research and tracking tool for emerging airdrops and token distributions.'
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Beyond Code
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🎮', title: 'Gaming', desc: 'Exploring virtual worlds and competitive gaming' },
              { emoji: '🎵', title: 'Music', desc: 'Discovering new sounds and music production' },
              { emoji: '🎨', title: 'Design', desc: 'Creating visual art and UI/UX experiments' }
            ].map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 text-center bg-background border border-primary/20 rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="text-5xl mb-4">{hobby.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'X (Twitter)', url: '#' },
              { label: 'Telegram', url: '#' },
              { label: 'GitHub', url: '#' },
              { label: 'Base Profile', url: '#' }
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-4 bg-card border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/10 text-center text-sm text-muted-foreground">
        <p>Crafted with Next.js and framer-motion © 2024 Akram</p>
      </footer>
    </div>
  )
}
