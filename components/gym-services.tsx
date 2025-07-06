"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Waves, Users, User, Heart, Zap, ArrowRight, Star, CheckCircle } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const services = [
  {
    icon: Dumbbell,
    title: "Premium Gym Access",
    description:
      "State-of-the-art equipment including the latest cardio machines, free weights, and strength training equipment from top brands.",
    image: "/Images/Services/PremiumGym Access.jpeg?height=300&width=400&text=Modern+Gym+Equipment",
    features: [ "Latest Equipment", "Spacious Layout", "Climate Controlled"],
    price: "$49",
    period: "/month",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: "Access to over 200 pieces of equipment including Technogym, Life Fitness, and Hammer Strength machines.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "Mini Olympic-size swimming pool with dedicated lanes for lap swimming, aqua fitness classes, and recreational swimming.",
    image: "/Images/Services/Swimmingpool.jpeg?height=300&width=400&text=Olympic+Swimming+Pool",
    features: ["Mini Olympic Size Pool", "Aqua Fitness Classes", "Swimming Lessons"],
    price: "$69",
    period: "/month",
    popular: true,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details:
      "25-meter pool with 8 lanes, maintained at optimal temperature year-round with advanced filtration system.",
  },
  {
    icon: Users,
    title: "Group Fitness Classes",
    description:
      "Dynamic group classes including yoga, HIIT, spinning, Zumba, and dance fitness led by certified instructors.",
    image: "/Images/Services/GroupFitnessClasses.jpeg?height=300&width=400&text=Group+Fitness+Class",
    features: ["25+ Class Types", "All Skill Levels", "Expert Instructors", "Flexible Schedule"],
    price: "$39",
    period: "/month",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: "Over 100 members per week with options for beginners to advanced fitness enthusiasts.",
  },
]

export default function GymServices() {
  return (
   <section className="py-20 bg-background-dark">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Comprehensive Fitness Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From beginner-friendly programs to advanced training, we offer everything you need to achieve your
            fitness goals in a supportive and motivating environment.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="h-full hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent-orange text-white">
                      <Star className="h-3 w-3 fill-current mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 ${service.bgColor} rounded-lg backdrop-blur-sm`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-accent-orange transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <p className="text-gray-400 text-xs">{service.details}</p>
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-accent-orange flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-accent-orange">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <Button className="btn-primary w-full group/btn">
                      <Link href="/booking" className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          )
        })}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Button className="bg-accent-orange text-white hover:bg-accent-orange/90 transition-colors duration-300 px-6 py-3 rounded-full text-lg">
          <Link href="/services">View More</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

  )
}
