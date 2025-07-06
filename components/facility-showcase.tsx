"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Waves, Users, Heart, Zap, Shield, Wifi, Car } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const facilities = [
  {
    title: "Strength Training Zone",
    description:
      "Over 200 pieces of premium equipment from leading brands including Technogym, Life Fitness, and Hammer Strength.",
    image: "/Images/Home/StrengthTrainingZone.jpeg?height=400&width=600&text=Strength+Training+Zone",
    icon: Dumbbell,
    features: ["Free weights up to 150lbs", "Cable machines", "Smith machines", "Olympic platforms"],
    size: "3,000 sq ft",
    capacity: "50+ people",
  },
  {
    title: "Olympic Swimming Pool",
    description:
      "25-meter, 8-lane pool with advanced filtration system and temperature control, perfect for lap swimming and aqua fitness.",
    image: "/Images/Home/OlympicSwimmingPool.jpeg?height=400&width=600&text=Olympic+Swimming+Pool",
    icon: Waves,
    features: ["Heated to 82°F", "8 swimming lanes", "Diving area", "Pool deck seating"],
    size: "25m x 12.5m",
    capacity: "40+ swimmers",
  },
  {
    title: "Group Fitness Studios",
    description:
      "Three spacious studios with premium sound systems, mirrors, and climate control for optimal workout conditions.",
    image: "/Images/Home/GroupFitnessStudios.jpeg?height=400&width=600&text=Group+Fitness+Studios",
    icon: Users,
    features: ["Mirrored walls", "Premium sound", "Climate controlled", "Equipment storage"],
    size: "1,200 sq ft each",
    capacity: "30+ per class",
  },
  {
    title: "Functional Training Area",
    description:
      "2,000 sq ft of artificial turf with specialized equipment for functional movement and athletic performance training.",
    image: "/Images/Home/FunctionalTrainingArea.jpeg?height=400&width=600&text=Functional+Training+Area",
    icon: Zap,
    features: ["Artificial turf", "Battle ropes", "Kettlebells", "TRX systems"],
    size: "2,000 sq ft",
    capacity: "25+ people",
  },
  {
    title: "Wellness & Recovery Center",
    description:
      "Dedicated space for massage therapy, stretching, meditation, and recovery services with licensed professionals.",
    image: "/Images/Home/Wellness&RecoveryCenter.jpeg?height=400&width=600&text=Wellness+Recovery+Center",
    icon: Heart,
    features: ["Massage rooms", "Meditation space", "Recovery equipment", "Consultation rooms"],
    size: "800 sq ft",
    capacity: "Private sessions",
  },
  {
    title: "Cardio Theater",
    description: "State-of-the-art cardio equipment with individual entertainment systems and panoramic city views.",
    image: "/Images/Home/CardioTheater.jpeg?height=400&width=600&text=Cardio+Theater",
    icon: Dumbbell,
    features: ["Individual TVs", "City views", "Latest equipment", "Heart rate monitoring"],
    size: "2,500 sq ft",
    capacity: "60+ machines",
  },
]

const amenities = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security monitoring and keycard access for member safety.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Complimentary parking for all members with well-lit and monitored lot.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the entire facility.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Body composition analysis and health tracking services available.",
  },
]

export default function FacilityShowcase() {
  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                Our Facilities
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">World-Class Fitness Facilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience premium fitness in our state-of-the-art facility designed with your success in mind. Every
                detail has been carefully crafted to provide the ultimate workout environment.
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Facilities Grid */}
          <div className="space-y-16">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <ScrollAnimation key={index} delay={index * 200}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="relative h-96 rounded-2xl overflow-hidden group">
                        <Image
                          src={facility.image || "/placeholder.svg"}
                          alt={facility.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between text-white">
                            <div>
                              <div className="text-sm opacity-90">Size</div>
                              <div className="font-semibold">{facility.size}</div>
                            </div>
                            <div>
                              <div className="text-sm opacity-90">Capacity</div>
                              <div className="font-semibold">{facility.capacity}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6`}>
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-accent-orange/20 rounded-xl">
                          <IconComponent className="h-8 w-8 text-accent-orange" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{facility.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">{facility.description}</p>

                      <div className="grid grid-cols-2 gap-4">
                        {facility.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-accent-orange rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                        <h4 className="font-semibold text-white mb-3">Key Highlights:</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-accent-orange font-medium">Area:</span>
                            <span className="text-gray-300 ml-2">{facility.size}</span>
                          </div>
                          <div>
                            <span className="text-accent-orange font-medium">Capacity:</span>
                            <span className="text-gray-300 ml-2">{facility.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>

          {/* Amenities Section */}
          <ScrollAnimation delay={1000}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Additional Amenities</h3>
                <p className="text-gray-300">
                  Enjoy these complimentary services and amenities designed for your convenience
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon
                  return (
                    <Card
                      key={index}
                      className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center"
                    >
                      <CardContent className="p-6">
                        <div className="mx-auto p-4 bg-accent-orange/20 rounded-xl mb-4 w-fit">
                          <IconComponent className="h-6 w-6 text-accent-orange" />
                        </div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-accent-orange transition-colors duration-300 mb-2">
                          {amenity.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{amenity.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Virtual Tour CTA */}
          <ScrollAnimation delay={1200}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-orange rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience Our Facilities Firsthand</h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Schedule a complimentary tour and see why our members love training at Aura Fitness Studio. Our team
                  will show you around and help you find the perfect membership plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 transition-all duration-300 transform hover:scale-105 rounded-2xl">
                    Schedule Your Tour
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-orange font-semibold py-3 px-8 rounded-2xl transition-all duration-300">
                    View Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
