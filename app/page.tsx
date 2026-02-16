'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // Suppress unhandled MetaMask connection errors from browser extensions
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('MetaMask') || event.reason?.message?.includes('Failed to connect')) {
        event.preventDefault()
      }
    }
    
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    return () => window.removeEventListener('unhandledrejection', handleUnhandledRejection)
  }, [])

  useEffect(() => {
    let lastScrollY = 0
    let scrollVelocity = 0
    let animationId: NodeJS.Timeout
    let swingAngle = 0
    const maxSwingAngle = 15
    const baseSwingSpeed = 2000

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = currentScrollY - lastScrollY
      lastScrollY = currentScrollY
    }

    const animate = () => {
      const gif = document.getElementById('hanging-gif')
      if (gif) {
        swingAngle = Math.max(-maxSwingAngle, Math.min(maxSwingAngle, swingAngle + scrollVelocity * 0.1))
        scrollVelocity *= 0.95
        
        gif.style.transform = `rotateZ(${swingAngle}deg)`
      }

      animationId = setTimeout(animate, 1000 / 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    animationId = setTimeout(animate, 1000 / 60)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(animationId)
    }
  }, [])
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
              className="space-y-6 order-2 md:order-1 md:pr-8"
            >
              <div>
                <div className="relative">
                  <h1 className="text-6xl md:text-7xl font-black">
                    i <span className="relative inline-block">am<div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-12 w-10 h-10 md:w-12 md:h-12"><img src="https://media1.tenor.com/m/fkiPeSRzYOQAAAAC/pepe-skill-issue.gif" alt="skill issue" className="w-full h-full object-contain" /></div></span> <span className="text-primary">akram</span>⚡️
                  </h1>
                </div>
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

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 flex items-center justify-end relative"
            >
              <style>{`
                @keyframes float-premium {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-3px); }
                }
                
                .profile-container {
                  position: relative;
                  animation: float-premium 5s ease-in-out infinite;
                }
                
                .profile-img-wrapper {
                  position: relative;
                  overflow: hidden;
                }
                
                .profile-img {
                  display: block;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center top;
                }
                
                .bottom-fade {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: 40%;
                  background: linear-gradient(to bottom, transparent 0%, rgba(10, 20, 30, 0.3) 50%, rgba(10, 20, 30, 0.8) 100%);
                  pointer-events: none;
                }
                
                .soft-shadow {
                  position: absolute;
                  bottom: -30px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 90%;
                  height: 60px;
                  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.12) 0%, transparent 70%);
                  filter: blur(20px);
                  pointer-events: none;
                }
                
                .smoke-blend {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: 30%;
                  background: linear-gradient(to bottom, transparent 0%, rgba(100, 150, 200, 0.05) 100%);
                  filter: blur(15px);
                  pointer-events: none;
                }
              `}</style>
              
              {/* Profile image container */}
              <div className="profile-container relative w-96 md:w-full md:max-w-md">
                <div className="profile-img-wrapper h-96 md:h-full md:min-h-96">
                  <img
                    src="https://i.ibb.co/tpRmrsjB/Picsart-26-02-15-11-52-26-004.png"
                    alt="Akram Profile"
                    className="profile-img"
                  />
                  
                  {/* Bottom fade gradient */}
                  <div className="bottom-fade" />
                  
                  {/* Soft smoke blend at bottom */}
                  <div className="smoke-blend" />
                </div>
                
                {/* Subtle shadow under portrait */}
                <div className="soft-shadow" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Hobbies Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto relative pt-24">
        {/* Animated Pepe sitting on top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 -top-12 -translate-x-1/2 z-10"
        >
          <img
            src="https://media.tenor.com/LhbC58wWZrMAAAAj/pepe-transparent.gif"
            alt="Pepe"
            className="h-32 w-auto drop-shadow-lg"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black mb-12 text-center"
        >
          my hobbies
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            'onchain explorer - deep dive into blockchain data. analyzing trends.',
            'content creator - sharing web3 knowledge. building community.',
            'mini-app builder - developing dApps. building tools on base.',
            'research & airdrop hunting - finding emerging opportunities.'
          ].map((hobby, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-2xl font-bold border-b-2 border-border pb-6 hover:border-primary transition-colors"
              >
                {hobby}
              </motion.div>
              
              {/* Happy cat GIF below research & airdrop hunting */}
              {i === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mt-6"
                >
                  <img
                    src="https://media.tenor.com/bpHKtJCDixAAAAAi/happy-cat.gif"
                    alt="happy cat"
                    className="h-16 md:h-20 w-auto"
                  />
                </motion.div>
              )}
            </div>
          ))}
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-black mb-12 text-center flex items-center justify-center gap-3"
        >
          <span>and we all live in a dream that isn't really ours…</span>
          <img
            src="https://media.tenor.com/_EY3vJNgjgUAAAAi/meme-pepe.gif"
            alt="pepe dream"
            className="h-8 w-auto"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black mb-12 text-center"
        >
          find me on x
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <style>{`
            @keyframes borderGlow {
              0%, 100% { box-shadow: 0 0 20px rgba(69, 129, 255, 0.3), inset 0 0 20px rgba(69, 129, 255, 0.1); }
              50% { box-shadow: 0 0 30px rgba(69, 129, 255, 0.5), inset 0 0 30px rgba(69, 129, 255, 0.2); }
            }
            .x-link {
              animation: borderGlow 4s ease-in-out infinite;
            }
            .x-link:hover {
              transform: scale(1.02);
              box-shadow: 0 0 40px rgba(69, 129, 255, 0.6), inset 0 0 40px rgba(69, 129, 255, 0.3) !important;
            }
            @keyframes swing {
              0%, 100% { transform: rotateZ(0deg); }
              50% { transform: rotateZ(3deg); }
            }
            .hanging-gif {
              animation: swing 2s ease-in-out infinite;
              transform-origin: top center;
            }
          `}</style>
          
          {/* Hanging GIF - positioned in the gap between screenshots */}
          <div 
            id="hanging-gif-container"
            className="absolute left-1/2 z-10 hidden md:block"
            style={{ 
              width: '100px',
              transform: 'translateX(-50%)',
              top: '50%',
              marginTop: '-50px'
            }}
          >
            <img
              id="hanging-gif"
              src="https://framerusercontent.com/images/0s9a6uVq9FijNsX5y67NSlYO5Mc.webp"
              alt="hanging"
              className="hanging-gif w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://x.com/beingakramraja"
              target="_blank"
              rel="noopener noreferrer"
              className="x-link rounded-2xl transition-all duration-300 ease-out block border border-primary/20"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-12%20194433-Dj0pnsJT7TMj1WISWAyKyGFfUxRk1J.png"
                alt="Akram X Profile"
                className="w-full rounded-2xl shadow-lg"
              />
            </a>
            <a
              href="https://x.com/i/status/2020803063251173609"
              target="_blank"
              rel="noopener noreferrer"
              className="x-link rounded-2xl transition-all duration-300 ease-out block border border-primary/20"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-12%20194500-aRh2ulhn43hKlBy0eo5lcEaVlaSyoz.png"
                alt="Akram X Post"
                className="w-full rounded-2xl shadow-lg"
              />
            </a>
          </div>
        </motion.div>

        {/* Follow text with alarm GIF */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 md:py-16"
        >
          <style>{`
            @keyframes pulse-alarm {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
            .alarm-gif {
              animation: pulse-alarm 1s ease-in-out infinite;
            }
            .follow-text {
              color: hsl(45, 96%, 56%);
              transition: all 0.3s ease;
            }
            .follow-text:hover {
              text-shadow: 0 0 20px hsl(45, 96%, 56%);
              opacity: 0.9;
            }
          `}</style>
          <div className="flex items-center justify-center gap-4 md:gap-5 flex-wrap">
            <span className="follow-text text-3xl md:text-4xl font-semibold cursor-pointer">
              If you visit my X, don't forget to follow me.
            </span>
            <img
              src="https://media1.tenor.com/m/iRkL6OMGhU4AAAAC/alarm.gif"
              alt="alarm"
              className="alarm-gif h-24 md:h-24 w-auto"
            />
          </div>
        </motion.div>

        {/* Buttons section with increased spacing */}
        <div className="pt-8 md:pt-12"></div>

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
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <p className="text-4xl md:text-5xl font-black">
              bye love you
            </p>
            <img
              src="https://media.tenor.com/qGSeUrlS1qkAAAAi/sending-lots-of-love-sending-love.gif"
              alt="sending love"
              className="h-20 md:h-24 w-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>made with ❤️ by akram © 2024</p>
      </footer>
    </div>
  )
}
