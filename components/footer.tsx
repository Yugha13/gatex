import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A0507] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">GATEX</h3>
            <p className="text-white/70 mb-4">Your trusted room rental service, helping you find the perfect space.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Rooms</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Agents</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Room Rentals</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Short-term Rentals</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Long-term Rentals</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Investment Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-white/70 mb-2">123 Rental St, City, Country</p>
            <p className="text-white/70 mb-2">Phone: +123 456 7890</p>
            <p className="text-white/70 mb-2">Email: contact@gatex.com</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">&copy; 2025 GATEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

