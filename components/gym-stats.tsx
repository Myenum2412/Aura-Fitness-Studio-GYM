"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, TrendingUp, Heart, Star, Dumbbell, Calendar } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const mainStats = [
  {
    icon: Users,
    number: "500",
    suffix: "+",
    label: "Active Members",
    description: "Growing community of fitness enthusiasts",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Award,
    number: "2",
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving the community since 2009",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Star,
    number: "4.9",
    suffix: "/5",
    label: "Member Rating",
    description: "Consistently rated as the best gym in the city",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
  },
  {
    icon: TrendingUp,
    number: "98",
    suffix: "%",
    label: "Success Rate",
    description: "Members achieving their fitness goals",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
]

const additionalStats = [
  {
    icon: Dumbbell,
    number: "100",
    suffix: "+",
    label: "Equipment Pieces",
    subtext: "State-of-the-art machines",
  },
  {
    icon: Users,
    number: "50",
    suffix: "+",
    label: "Expert Staff",
    subtext: "Certified professionals",
  },
  {
    icon: Calendar,
    number: "100",
    suffix: "+",
    label: "Weekly Classes",
    subtext: "Diverse fitness programs",
  },
  {
    icon: Heart,
    number: "2",
    suffix: "+",
    label: "Success Stories",
    subtext: "Lives transformed",
  },
]

const achievements = [
  {
    year: "2024",
    title: "Best Gym in the City",
    organization: "City Fitness Awards",
    description: "Recognized for outstanding facilities and member satisfaction",
  },
  {
    year: "2023",
    title: "Excellence in Customer Service",
    organization: "Regional Business Awards",
    description: "Awarded for exceptional member care and support",
  },
  {
    year: "2022",
    title: "Top Fitness Facility",
    organization: "State Health & Wellness Association",
    description: "Honored for innovative programs and community impact",
  },
]

export default function GymStats() {
  return (
    <section className="py-20 bg-primary-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-orange/5 rounded-full animate-float"></div>
        <div
          className="absolute top-60 right-20 w-24 h-24 bg-accent-orange/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-accent-orange/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">Our Impact</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Numbers That Tell Our Story</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Over 15 years of dedication to fitness excellence, community building, and helping thousands achieve
                their health goals.
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                    <CardContent className="p-8">
                      <div className={`mx-auto p-4 ${stat.bgColor} rounded-xl mb-6 w-fit`}>
                        <IconComponent className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <div className="mb-4">
                        <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">
                          {stat.number}
                          <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                        </div>
                        <div className="text-lg font-semibold text-gray-300 mt-2">{stat.label}</div>
                      </div>
                      <p className="text-sm text-gray-400">{stat.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>

          {/* Additional Stats */}
<ScrollAnimation delay={600}>
  <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 mb-16 max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold text-white text-center mb-8">
      More About Aura Fitness
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {additionalStats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <div key={index} className="text-center group w-40">
            <div className="p-3 bg-accent-orange/20 rounded-lg mb-3 w-fit mx-auto group-hover:bg-accent-orange/30 transition-colors duration-300">
              <IconComponent className="h-6 w-6 text-accent-orange" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">
              {stat.number}
              <span className="text-lg">{stat.suffix}</span>
            </div>
            <div className="text-sm font-medium text-gray-300">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.subtext}</div>
          </div>
        )
      })}
    </div>
  </div>
</ScrollAnimation>




          {/* Member Testimonial Stats */}
          <ScrollAnimation delay={1000}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-orange rounded-2xl p-8 md:p-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-white fill-current" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 rounded-2xl">What Our Members Say</h3>
                <blockquote className="text-lg text-white/90 mb-6 max-w-3xl mx-auto italic">
                  "The statistics speak for themselves, but what really matters is how Aura Fitness has transformed my
                  life. The community, the facilities, and the support are unmatched. I'm proud to be part of this
                  amazing gym family."
                </blockquote>
                <div className="text-white font-semibold">- Sarah M., Member since 2019</div>
                <div className="mt-6">
                  <button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 transition-all duration-300 transform hover:scale-105 rounded-2xl">
                    Join Our Community
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
