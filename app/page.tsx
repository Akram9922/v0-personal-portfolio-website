'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  const floatVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const bounceVariants = {
    animate: {
      y: [0, -40, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-primary"
          >
            akram ⚡️
          </motion.div>
          <div className="flex gap-4 text-xs md:text-sm">
            <a href="#socials" className="hover:text-primary transition">Twitter</a>
            <a href="#socials" className="hover:text-primary transition">Telegram</a>
            <a href="#socials" className="hover:text-primary transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          {/* Decorative floating elements */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-10 right-10 text-6xl opacity-30"
          >
            ⚡
          </motion.div>
          <motion.div
            variants={floatVariants}
            animate="animate"
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-20 left-5 text-6xl opacity-30"
          >
            🧑‍🌾
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              <div>
                <h1 className="text-6xl md:text-7xl font-black mb-2">
                  i am <span className="text-primary">akram</span>⚡️
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  a legendary onchain explorer
                </p>
              </div>

              <p className="text-lg leading-relaxed max-w-md">
                known for <span className="font-bold">building on base</span> and exploring the blockchain. a content creator. mini-app builder. research enthusiast.
              </p>

              <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                <p>⚡ sometimes i trade</p>
                <p>👨‍🌾 hanging out with familia</p>
                <p>✈️ a lot of travelling</p>
              </div>
            </motion.div>

            {/* Right: Animated Character */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, scale: 0.8 }}
              className="relative h-96 md:h-full min-h-96 order-1 md:order-2 flex items-center justify-center"
            >
              <Image
                src="/frog-character.jpg"
                alt="Akram Frog Character"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Hobbies Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black mb-12"
        >
          my hobbies
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            {[
              'onchain explorer - deep dive into blockchain data. analyzing trends.',
              'content creator - sharing web3 knowledge. building community.',
              'mini-app builder - developing dApps. building tools on base.',
              'research & airdrop hunting - finding emerging opportunities.'
            ].map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-2xl font-bold border-b-2 border-border pb-6 hover:border-primary transition-colors"
              >
                {hobby}
              </motion.div>
            ))}
          </div>

          {/* Animated Frog Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex justify-center lg:justify-end"
          >
            <svg
              width="250"
              height="300"
              viewBox="0 0 250 300"
              className="drop-shadow-2xl"
            >
              <defs>
                <style>{`
                  @keyframes kickLeft {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-25deg); }
                  }
                  @keyframes kickRight {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(25deg); }
                  }
                  .left-leg { animation: kickLeft 1.5s ease-in-out infinite; transform-origin: 90px 180px; }
                  .right-leg { animation: kickRight 1.5s ease-in-out infinite 0.3s; transform-origin: 160px 180px; }
                  @keyframes headBob {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                  .frog-head { animation: headBob 1.5s ease-in-out infinite; }
                `}</style>
              </defs>

              {/* Body */}
              <ellipse cx="125" cy="140" rx="70" ry="80" fill="#6DD5ED" opacity="0.9" />
              
              {/* Head */}
              <g className="frog-head">
                <circle cx="125" cy="50" r="45" fill="#6DD5ED" />
                {/* Eyes */}
                <circle cx="105" cy="35" r="12" fill="#FFF" />
                <circle cx="145" cy="35" r="12" fill="#FFF" />
                <circle cx="105" cy="35" r="7" fill="#000" />
                <circle cx="145" cy="35" r="7" fill="#000" />
                {/* Mouth */}
                <path d="M 110 55 Q 125 65 140 55" stroke="#000" strokeWidth="2" fill="none" />
              </g>

              {/* Left Arm */}
              <ellipse cx="70" cy="130" rx="15" ry="40" fill="#6DD5ED" opacity="0.8" />
              
              {/* Right Arm */}
              <ellipse cx="180" cy="130" rx="15" ry="40" fill="#6DD5ED" opacity="0.8" />

              {/* Left Leg */}
              <g className="left-leg">
                <ellipse cx="90" cy="200" rx="18" ry="50" fill="#5BC9E1" opacity="0.9" />
                <ellipse cx="75" cy="240" rx="22" ry="25" fill="#5BC9E1" opacity="0.8" />
              </g>

              {/* Right Leg */}
              <g className="right-leg">
                <ellipse cx="160" cy="200" rx="18" ry="50" fill="#5BC9E1" opacity="0.9" />
                <ellipse cx="175" cy="240" rx="22" ry="25" fill="#5BC9E1" opacity="0.8" />
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* We All Live In Section */}
      <section className="py-20 px-4 text-center relative">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            and we all live in..........
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-black text-primary mb-12"
          >
            THE BLOCKCHAIN
          </motion.p>

          {/* Animated decorative elements */}
          <div className="flex justify-center gap-8 flex-wrap">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-5xl"
            >
              ⚡
            </motion.div>
            <motion.div
              variants={bounceVariants}
              animate="animate"
              className="text-5xl"
            >
              🔗
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-5xl"
            >
              ⚡
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find Me On Section */}
      <section id="socials" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black mb-12 text-center"
        >
          find me on x
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Twitter', url: '#' },
            { name: 'Telegram', url: '#' },
            { name: 'GitHub', url: '#' },
            { name: 'Base Profile', url: '#' }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 bg-card border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              <span className="text-2xl font-bold group-hover:text-primary transition">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <p className="text-4xl md:text-5xl font-black">
            bye love you 💙
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>made with ❤️ by akram © 2024</p>
      </footer>
    </div>
  )
}
