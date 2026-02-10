'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © Akram — Built onchain
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Crafted with framer-motion and Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
