"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComparisonSlider } from "./comparison-slider"

interface Room {
  title: string
  description: string
  videoUrl?: string
  imageUrl?: string
  downloadUrl?: string
  type: "video" | "comparison"
}

const rooms: Room[] = [
  {
    title: "Luxury Apartment",
    description:
      "Experience the epitome of luxury living in our spacious apartments. Enjoy top-notch amenities and breathtaking views.",
    videoUrl: "https://infinitecreator.com/assets/videos/how-it-works/video-1.mp4",
    downloadUrl: "#",
    type: "video",
  },
  {
    title: "Online Room Booking",
    description: "Switch from the hassle of traditional room booking to our seamless online system. Let us handle the work while you enjoy more time with the ones you love!",
    videoUrl: "https://xs0ac6w6tbrs4s5r.public.blob.vercel-storage.com/videoloop-D10YuCawIvMy6CWc7OuHuykkFpt9g3.mp4",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ald4ZmyDkqhobazkvvI54s1HW8374l.png",
    type: "comparison",
  },
]

export function Rooms() {
  return (
    <div className="relative bg-zinc-100 py-32">
      <div className="max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}

function RoomCard({ room, index }: { room: Room; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? 200 : -200, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
      }}
      className="mb-32 px-6"
    >
      <div className="relative max-w-4xl mx-auto">
        <motion.div className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-zinc-200/50 shadow-xl">
          <div className="aspect-video relative overflow-hidden">
            {room.type === "video" && room.videoUrl && (
              <>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={room.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </>
            )}
            {room.type === "comparison" && room.videoUrl && room.imageUrl && (
              <ComparisonSlider videoUrl={room.videoUrl} imageUrl={room.imageUrl} />
            )}
          </div>
          <div className="relative p-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">{room.title}</h3>
            <p className="text-zinc-600 text-lg mb-6">{room.description}</p>
            {room.downloadUrl && (
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

