'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, XCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    // Simulate form submission
    setIsSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    setIsSubmitting(false)
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 5000)
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#3D0C11] p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <Send size={20} className="mr-2" />
                info@modiaproperties.com
              </p>
              <p className="flex items-center">
                <Send size={20} className="mr-2" />
                +234 803 974 3274
              </p>
              <p className="flex items-center">
                <Send size={20} className="mr-2" />
                No 2 Michika street off Ahmadu Bello way Area 11 Garki Abuja Nigeria
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-12">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#3D0C11] hover:bg-[#2D090D] text-white font-semibold py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-6 max-w-sm"
          >
            <div className="flex items-center">
              {isSuccess ? (
                <CheckCircle className="text-green-500 mr-3" size={24} />
              ) : (
                <XCircle className="text-red-500 mr-3" size={24} />
              )}
              <p className="text-lg font-semibold">
                {isSuccess ? 'Message Sent Successfully!' : 'Failed to Send Message'}
              </p>
            </div>
            <p className="mt-2 text-gray-600">
              {isSuccess
                ? "Thank you for reaching out. We'll get back to you soon."
                : errorMessage || "There was an error sending your message. Please try again later."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
