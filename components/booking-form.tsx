"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Users, Dumbbell, Waves, Heart } from "lucide-react"

interface BookingData {
  service: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  goals: string
  experience: string
  notes: string
}

const services = [
  {
    id: "consultation",
    title: "Free Fitness Consultation",
    description: "45-minute session with fitness assessment and goal setting",
    duration: "45 minutes",
    price: "Free",
    icon: User,
    popular: true,
  },
  {
    id: "tour",
    title: "Facility Tour",
    description: "Guided tour of all facilities with membership information",
    duration: "30 minutes",
    price: "Free",
    icon: Users,
    popular: false,
  },
  {
    id: "personal-training",
    title: "Personal Training Session",
    description: "One-on-one training session with certified trainer",
    duration: "60 minutes",
    price: "$80",
    icon: Dumbbell,
    popular: false,
  },
  {
    id: "swimming-lesson",
    title: "Swimming Lesson",
    description: "Private swimming instruction for all skill levels",
    duration: "45 minutes",
    price: "$60",
    icon: Waves,
    popular: false,
  },
  {
    id: "wellness-consultation",
    title: "Wellness Consultation",
    description: "Comprehensive wellness assessment and program design",
    duration: "60 minutes",
    price: "$50",
    icon: Heart,
    popular: false,
  },
]

const timeSlots = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
]

const experienceLevels = ["Complete Beginner", "Some Experience", "Intermediate", "Advanced", "Former Athlete"]

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    goals: "",
    experience: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleServiceSelect = (serviceId: string) => {
    setBookingData((prev) => ({ ...prev, service: serviceId }))
    setStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate booking submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const selectedService = services.find((s) => s.id === bookingData.service)

  if (isSubmitted) {
    return (
      <Card className="bg-white/5 border-gray-800 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
          <p className="text-lg text-gray-300 mb-6">
            Your {selectedService?.title.toLowerCase()} has been scheduled successfully.
          </p>
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Booking Details</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Service:</strong> {selectedService?.title}
              </p>
              <p>
                <strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {bookingData.time}
              </p>
              <p>
                <strong>Duration:</strong> {selectedService?.duration}
              </p>
            </div>
          </div>
          <Badge className="bg-green-400/20 text-green-400 border-green-400/30 mb-6">
            Confirmation email sent to {bookingData.email}
          </Badge>
          <div className="space-y-4">
            <p className="text-gray-300">We'll send you a reminder 24 hours before your appointment.</p>
            <Button
              className="btn-primary"
              onClick={() => {
                setStep(1)
                setIsSubmitted(false)
                setBookingData({
                  service: "",
                  date: "",
                  time: "",
                  name: "",
                  email: "",
                  phone: "",
                  goals: "",
                  experience: "",
                  notes: "",
                })
              }}
            >
              Book Another Session
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                step >= stepNumber ? "bg-accent-orange text-white" : "bg-gray-700 text-gray-400"
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div
                className={`w-16 h-1 mx-2 transition-all duration-300 ${
                  step > stepNumber ? "bg-accent-orange" : "bg-gray-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Select a Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm cursor-pointer relative"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-accent-orange text-white">Most Popular</Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto p-4 bg-accent-orange/20 rounded-xl mb-4 w-fit">
                      <IconComponent className="h-8 w-8 text-accent-orange" />
                    </div>
                    <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </span>
                      <span className="text-accent-orange font-semibold text-lg">{service.price}</span>
                    </div>
                    <Button className="btn-secondary w-full">Select This Service</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Step 2: Date & Time Selection */}
      {step === 2 && (
        <Card className="bg-white/5 border-gray-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-center">Schedule Your {selectedService?.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  <Clock className="h-4 w-4 inline mr-2" />
                  Select Time
                </label>
                <select
                  name="time"
                  value={bookingData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="" className="bg-gray-800">
                    Select a time
                  </option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-gray-800">
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="button" onClick={() => setStep(1)} className="btn-secondary">
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                disabled={!bookingData.date || !bookingData.time}
                className="btn-primary flex-1"
              >
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Personal Information */}
      {step === 3 && (
        <Card className="bg-white/5 border-gray-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-center">Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={bookingData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">
                      Select your level
                    </option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level} className="bg-gray-800">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Fitness Goals</label>
                <textarea
                  name="goals"
                  value={bookingData.goals}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Any special requirements or questions?"
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" onClick={() => setStep(2)} className="btn-secondary">
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting} className="btn-primary flex-1">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Booking...
                    </div>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
