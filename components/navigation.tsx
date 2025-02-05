"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-XtF6iwjyZtbJ6yBInPvr869Pf3txz1.svg"
        alt="Infinite Creator Logo"
        width={120}
        height={40}
        className="dark:invert"
      />
      <nav className="flex items-center gap-8">
        <a href="#hero" className="text-zinc-900 dark:text-white">Home</a>
        <a href="#products" className="text-zinc-900 dark:text-white">Products</a>
        <a href="#services" className="text-zinc-900 dark:text-white">Services</a>
        <a href="#contact" className="text-zinc-900 dark:text-white">Contact</a>
        <Button className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
          Try Now
        </Button>
      </nav>
    </motion.header>
  )
}

