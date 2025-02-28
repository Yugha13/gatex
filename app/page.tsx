import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import Footer from "@/components/footer"
import Services from "@/components/services"
import BackToTop from "@/components/back-to-top"
import Contact from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 to-white">
      <Navigation />
      <div id="hero"><Hero /></div>
      <div id="rooms"><Rooms /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <BackToTop />
    </main>
  )
}

