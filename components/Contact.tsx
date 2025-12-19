'use client'

import { useState, FormEvent, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

let emailjsInitialized = false

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact_number: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const formDataRef = useRef(formData)

  // Keep ref in sync with state
  useEffect(() => {
    formDataRef.current = formData
  }, [formData])

  useEffect(() => {
    // Initialize EmailJS once when component mounts
    if (!emailjsInitialized) {
      emailjs.init('zEUGLcSxQ2BJS6iai')
      emailjsInitialized = true
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const currentFormData = formDataRef.current
      const templateParams = {
        name: currentFormData.name,
        contact_number: currentFormData.contact_number,
        message: currentFormData.message,
        time: new Date().toLocaleString(),
      }

      await emailjs.send('service_ic22dvo', 'template_g2o36ap', templateParams)

      setSubmitStatus('success')
      setFormData({ name: '', contact_number: '', message: '' })
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-300">
            Feel free to reach out to me
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                name="contact_number"
                id="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                placeholder="Contact Number"
                required
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 will-change-transform ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white shadow-lg hover:shadow-xl`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2" />
                  Sending...
                </span>
              ) : submitStatus === 'success' ? (
                <span className="flex items-center justify-center text-green-300">
                  <i className="fas fa-check-circle mr-2" />
                  Message Sent!
                </span>
              ) : submitStatus === 'error' ? (
                <span className="flex items-center justify-center text-red-300">
                  <i className="fas fa-exclamation-circle mr-2" />
                  Error - Please try again
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2" />
                  Send Message
                </span>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

