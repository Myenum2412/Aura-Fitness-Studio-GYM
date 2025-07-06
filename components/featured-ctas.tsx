"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const ctaCards = [
  {
    title: "Start Your Your Trial",
    description: "Experience our premium facilities with a 2-day trial. No commitment required.",
    image: "/Images/Home/ChooseYourPath/StartYourYourTrial.jpeg?height=300&width=400&text=Free+Trial",
    badge: "Most Popular",
    badgeColor: "bg-accent-orange text-white",
    features: ["7 days unlimited access", "Fitness assessment", "Complimentary guest pass", "No enrollment fees"],
    buttonText: "Claim Your Trial",
    buttonStyle: "btn-primary",
    href: "/booking",
    stats: { icon: Users, value: "500+", label: "Members joined" },
  },
  {
    title: "Personal Training",
    description: "Work one-on-one with certified trainers to achieve your specific fitness goals faster.",
    image: "/Images/Home/ChooseYourPath/PersonalTrainingGym.jpeg?height=300&width=400&text=Personal+Training",
    badge: "Expert Guidance",
    badgeColor: "bg-blue-500 text-white",
    features: ["Certified trainers", "Customized programs", "Progress tracking", "Nutrition guidance"],
    buttonText: "Book Session",
    buttonStyle: "btn-secondary",
    href: "/booking",
    stats: { icon: Award, value: "98%", label: "Success rate" },
  },
  {
    title: "Group Fitness Classes",
    description: "Join our energetic group classes and build lasting friendships while getting fit.",
    image: "/Images/Home/ChooseYourPath/GroupFitnessClasses.jpeg?height=300&width=400&text=Group+Classes",
    badge: "Community",
    badgeColor: "bg-green-500 text-white",
    features: ["25+ class types", "All skill levels", "Expert instructors", "Flexible schedule"],
    buttonText: "View Schedule",
    buttonStyle: "btn-secondary",
    href: "/services",
    stats: { icon: Clock, value: "100+", label: "Classes weekly" },
  },
]

export default function FeaturedCTAs() {
  return (
    <section className="py-20 bg-primary-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent-orange/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-accent-orange/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                Get Started Today
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Choose Your Path to Fitness</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're just starting out or looking to take your fitness to the next level, we have the perfect
                program for you.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-8">
            {ctaCards.map((card, index) => {
              const StatsIcon = card.stats.icon
              return (
                <ScrollAnimation key={index} delay={index * 200}>
                  <Card className="h-full hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <Badge className={`absolute top-4 left-4 ${card.badgeColor}`}>{card.badge}</Badge>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                        <StatsIcon className="h-5 w-5 text-accent-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">{card.stats.value}</div>
                        <div className="text-xs text-gray-300">{card.stats.label}</div>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300 mb-3">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{card.description}</p>

                        <div className="space-y-2">
                          {card.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-accent-orange rounded-full flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Button className={`${card.buttonStyle} w-full group/btn`}>
                          <Link href={card.href} className="flex items-center justify-center gap-2">
                            {card.buttonText}
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

          {/* Bottom CTA */}
          <ScrollAnimation delay={800}>
            <div className="text-center mt-16">
              <div className="bg-gradient-orange rounded-2xl p-8 md:p-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-white fill-current" />
                  <Star className="h-6 w-6 text-white fill-current" />
                  <Star className="h-6 w-6 text-white fill-current" />
                  <Star className="h-6 w-6 text-white fill-current" />
                  <Star className="h-6 w-6 text-white fill-current" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join 500+ Satisfied Members</h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  "Best gym in the city! The facilities are amazing and the staff is incredibly supportive. I've
                  achieved goals I never thought possible." - Jennifer M.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-2xl">
                    <Link href="/booking">Start Your Journey</Link>
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-orange font-semibold py-3 px-8 text-lg rounded-2xl">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
