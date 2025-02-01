"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#212529] dark:text-white sm:text-4xl">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#24cdd5]" />
                <p className="text-gray-600 dark:text-gray-300">your.email@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#24cdd5]" />
                <p className="text-gray-600 dark:text-gray-300">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#24cdd5]" />
                <p className="text-gray-600 dark:text-gray-300">Your Location, City, Country</p>
              </div>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763931327!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1696361605498!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 text-3xl font-bold text-[#212529] dark:text-white">
                Get in Touch
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                {`Fill out the form below and I'll get back to you as soon as possible.`}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#212529] focus:ring-[#212529] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#212529] dark:focus:ring-[#212529]"
                      placeholder="Rupesh"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#212529] focus:ring-[#212529] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#212529] dark:focus:ring-[#212529]"
                      placeholder="Thakuri"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#212529] focus:ring-[#212529] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#212529] dark:focus:ring-[#212529]"
                    placeholder="abc@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#212529] focus:ring-[#212529] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-[#212529] dark:focus:ring-[#212529]"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#24cdd5] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-[#24cdd5]/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}