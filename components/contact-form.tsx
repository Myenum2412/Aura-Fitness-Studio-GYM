"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  interest: string
}

const interestOptions = [
  "General Information",
  "Membership Plans",
  "Personal Training",
  "Group Classes",
  "Swimming Pool",
  "Wellness Programs",
  "Corporate Memberships",
  "Other",
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white/5 border-gray-800 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </div>
          <Badge className="bg-green-400/20 text-green-400 border-green-400/30">Response within 24 hours</Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/5 border-gray-800 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                <User className="h-4 w-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone and Interest Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                <Phone className="h-4 w-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-white mb-2">
                Interest Area
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
              >
                <option value="" className="bg-gray-800">
                  Select an option
                </option>
                {interestOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-gray-800">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
              placeholder="What can we help you with?"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              <MessageSquare className="h-4 w-4 inline mr-2" />
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300 resize-vertical"
              placeholder="Tell us more about your fitness goals or questions..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting} className="w-full btn-primary text-lg py-4 group">
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            )}
          </Button>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-400 text-center">
            By submitting this form, you agree to our privacy policy. We'll never share your information with third
            parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
