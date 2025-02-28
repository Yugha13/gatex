"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "./ui/button"
import SplitText from "./SplitText";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-zinc-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      >
        <source
          src="https://xs0ac6w6tbrs4s5r.public.blob.vercel-storage.com/infinte%20video-CWW6SXvhVOtyn4RO85WPZEyPxOOtNO.mp4"
          type="video/mp4"
        />
      </video>
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/20 to-zinc-900/70" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white"
        >
          Explore Your Dream
          <br />

          <SplitText
            text="GATEX"
            className="italic text-6xl md:text-8xl font-bold tracking-tight text-orange-500"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-zinc-200 max-w-2xl"
        >
          Find your perfect space with our curated selection of rooms for rent. From cozy apartments to spacious houses, we've got you covered.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Button
            className="px-5 py-3 text-white"
          >
            Browse Rooms
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

