'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            akram ⚡️
          </motion.div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition">about</a>
            <a href="#hobbies" className="hover:text-primary transition">hobbies</a>
            <a href="#socials" className="hover:text-primary transition">socials</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border-4 border-primary"
            >
              <Image
                src="/akram-portrait.jpg"
                alt="Akram"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-5xl font-bold mb-2">i am akram⚡️</p>
                <p className="text-xl text-muted-foreground">a legendary onchain explorer</p>
              </div>

              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  building on <span className="font-bold text-primary">base</span>. content creator. mini-app builder. research enthusiast.
                </p>
                <p>
                  deep diving into blockchain data. exploring the web3 ecosystem. sometimes i trade.
                </p>
                <p className="text-muted-foreground text-base">
                  hanging out with familia. a lot of travelling. discovering new things.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-2xl font-bold mb-2">my hobbies</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>⚡ Building cool stuff</li>
                  <li>🎮 Gaming & exploring</li>
                  <li>📱 Creating content</li>
                  <li>🌍 Traveling the world</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            my hobbies
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: 'onchain explorer',
                desc: 'deep dive into blockchain data. analyzing trends. uncovering insights. base is my home.'
              },
              {
                title: 'content creator',
                desc: 'sharing web3 knowledge. building community. creating videos. writing threads. making memes.'
              },
              {
                title: 'mini-app builder',
                desc: 'developing dApps. building tools. experimenting on base. shipping fast.'
              },
              {
                title: 'research & airdrop hunting',
                desc: 'investigating emerging protocols. finding opportunities. researching tokenomics. finding gems.'
              }
            ].map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border-b border-border pb-6 group-hover:border-primary transition-colors">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition">
                    {hobby.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{hobby.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live In Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-2xl font-bold">and we all live in..........</p>
            <p className="text-5xl font-bold text-primary">🔗 THE BLOCKCHAIN 🔗</p>
          </motion.div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            find me on
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Twitter', emoji: '𝕏', url: '#' },
              { name: 'Telegram', emoji: '📱', url: '#' },
              { name: 'GitHub', emoji: '👨‍💻', url: '#' },
              { name: 'Base Profile', emoji: '⚡️', url: '#' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{social.emoji}</span>
                  <span className="text-xl font-semibold group-hover:text-primary transition">
                    {social.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            life is short. build cool stuff. have fun. repeat.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl"
          >
            bye love you 💙
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>made with ❤️ by akram © 2024</p>
      </footer>
    </div>
  )
}
