"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComparisonSlider } from "./comparison-slider"

interface Product {
  title: string
  description: string
  videoUrl?: string
  imageUrl?: string
  downloadUrl?: string
  type: "video" | "comparison"
}

const products: Product[] = [
  {
    title: "Content Creation App",
    description:
      "Create stunning content with our AI-powered tools. Transform your ideas into reality with just a few clicks.",
    videoUrl: "https://infinitecreator.com/assets/videos/how-it-works/video-1.mp4",
    downloadUrl: "#",
    type: "video",
  },
  {
    title: "AI Property Generation",
    description: "Transform still images into captivating videos. Drag the slider to see the magic happen.",
    videoUrl: "https://xs0ac6w6tbrs4s5r.public.blob.vercel-storage.com/videoloop-D10YuCawIvMy6CWc7OuHuykkFpt9g3.mp4",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ald4ZmyDkqhobazkvvI54s1HW8374l.png",
    type: "comparison",
  },
]

export function Products() {
  return (
    <div className="relative bg-zinc-100 py-32">
      <div className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
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
            {product.type === "video" && product.videoUrl && (
              <>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={product.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </>
            )}
            {product.type === "comparison" && product.videoUrl && product.imageUrl && (
              <ComparisonSlider videoUrl={product.videoUrl} imageUrl={product.imageUrl} />
            )}
          </div>
          <div className="relative p-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">{product.title}</h3>
            <p className="text-zinc-600 text-lg mb-6">{product.description}</p>
            {product.downloadUrl && (
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

