"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Star, Users, Award, Clock } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const heroStats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Clock, value: "24*7", label: "Access Available" },
]

const heroFeatures = [
  "State-of-the-art equipment",
  "Olympic-size swimming pool",
  "Certified personal trainers",
  "Group fitness classes",
  "Wellness & recovery programs",
  "Nutritional counseling",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/Images/Home/home.jpeg?height=800&width=1200&text=Modern+Gym+Equipment",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Aura Fitness Studio ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-orange/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent-orange/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-accent-orange/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <ScrollAnimation>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-semibold mb-4 animate-pulse-glow">
                    #1 Fitness Studio in the City
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up">
                    Transform Your
                    <span className="block gradient-text">Fitness Journey</span>
                  </h1>
                  <p
                    className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up max-w-2xl mx-auto lg:mx-0"
                    style={{ animationDelay: "300ms" }}
                  >
                    Experience premium fitness facilities, expert training, and a supportive community that will help
                    you achieve your health and wellness goals.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button className="btn-primary text-lg px-8 py-4 hover-lift group btn-secondary rounded-2xl">
                    <Link href="/booking" className="flex items-center gap-2 bg-">
                      Start Your Journey
                      <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button className="btn-secondary text-lg px-8 py-4 hover-lift rounded-2xl">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={900}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {heroStats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover-lift"
                        style={{ animationDelay: `${1000 + index * 100}ms` }}
                      >
                        <IconComponent className="h-6 w-6 text-accent-orange mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column - Features & Benefits */}
            <div className="lg:pl-8">
              <ScrollAnimation delay={1200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Aura Fitness?</h3>
                  <div className="space-y-4">
                    {heroFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 group animate-fade-in-up"
                        style={{ animationDelay: `${1400 + index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-accent-orange rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-accent-orange/20 border border-accent-orange/30 rounded-2xl">
                    <h4 className="text-lg font-semibold text-white mb-2">Special Offer</h4>
                    <p className="text-gray-300 mb-4">
                      New members get 2 days trial + complimentary fitness assessment
                    </p>
                    <Button className="btn-primary w-full bg-white rounded-2xl text-black">
                      <Link href="/booking">Claim Your Trial</Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-accent-orange" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
