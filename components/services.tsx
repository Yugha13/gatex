"use client"
import { Service } from './types'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const services: Service[] = [
  {
    id: '01',
    title: 'Room Rentals',
    description: 'Find the perfect room for your stay with our extensive listings.',
  },
  {
    id: '02',
    title: 'Short-term Rentals',
    description: 'Flexible rental options for short stays in prime locations.',
  },
  {
    id: '03',
    title: 'Long-term Rentals',
    description: 'Secure long-term accommodations tailored to your needs.',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="min-h-screen flex items-center justify-center p-6 bg-zinc-100 dark:bg-zinc-900"
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="absolute -left-20 top-0 w-40 h-40 bg-zinc-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 w-40 h-40 bg-zinc-300 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-4xl font-bold mb-20 text-center">Why Choose GATEX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
                  {service.id}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

