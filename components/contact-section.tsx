'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Twitter, Send, Wallet } from 'lucide-react'

const contacts = [
  {
    name: 'X',
    url: 'https://x.com/beingakramraja',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/beingakramraja',
    icon: Send,
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Akram9922',
    icon: Github,
    color: 'hover:text-gray-300',
  },
  {
    name: 'Base Profile',
    url: 'https://base.app/profile/0x20F13F4Ef110a6b2F56Ebe0A89c376703D47A25F',
    icon: Wallet,
    color: 'hover:text-blue-300',
  },
]

export function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
        >
          Find me on the internet
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex items-center gap-4">
                  <Icon className={`w-8 h-8 text-muted-foreground transition-all duration-300 ${contact.color}`} />
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {contact.url.split('/').pop()}
                    </p>
                  </div>
                  <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
