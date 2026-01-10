"use client"

import type React from "react"

import { useState } from "react"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { Button } from "@/components/ui/moving-border"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("access_key", "333586d5-ae7a-4231-914f-4c3e817eb590")
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert("Error sending message. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-10">
      <div className="container mx-auto px-4">
        <GooeyText
          texts={["Contact Me", "Get in Touch"]}
          textClassName="text-4xl font-bold text-center text-black dark:text-white"
          className="h-20 mb-12"
        />
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 border border-gray-600 rounded-lg bg-white dark:bg-neutral-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            borderRadius="1.75rem"
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-semibold text-lg"
            containerClassName="w-full h-14"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {showSuccess && <p className="text-green-500 font-semibold text-center mt-4">Message sent successfully!</p>}
      </div>
    </section>
  )
}
