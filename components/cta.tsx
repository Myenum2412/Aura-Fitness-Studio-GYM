"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Clock, Award } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const benefits = [
  "7-day free trial for new members",
  "No enrollment fees or hidden costs",
  "Access to all premium facilities",
  "Complimentary fitness assessment",
  "Guest passes for friends and family",
  "Cancel anytime with 30-day notice",
]

const socialProof = [
  { icon: Users, value: "5,000+", label: "Happy Members" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Access Available" },
]

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main CTA */}
            <ScrollAnimation>
              <div>
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Limited Time Offer
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of members who have already discovered the Aura Fitness difference. Start your journey
                  today with our exclusive new member offer.
                </p>

                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-accent-orange rounded-full flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="btn-primary text-lg px-8 py-4 group">
                    <Link href="/booking" className="flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button className="btn-secondary text-lg px-8 py-4">
                    <Link href="/contact">Schedule Tour</Link>
                  </Button>
                </div>

                <div className="text-sm text-gray-400">
                  <p>* No commitment required. Cancel anytime during your trial period.</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Social Proof */}
            <ScrollAnimation delay={300}>
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Join Our Community</h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {socialProof.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                        <IconComponent className="h-6 w-6 text-accent-orange mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{item.value}</div>
                        <div className="text-sm text-gray-300">{item.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Testimonial */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent-orange fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic mb-4">
                    "Best decision I ever made! The facilities are incredible, the staff is amazing, and I've never felt
                    stronger or more confident."
                  </blockquote>
                  <div className="text-sm">
                    <div className="text-white font-semibold">Jennifer Martinez</div>
                    <div className="text-gray-400">Member since 2022</div>
                  </div>
                </div>

                {/* Urgency Element */}
                <div className="mt-6 p-4 bg-accent-orange/20 rounded-lg border border-accent-orange/30">
                  <div className="text-center">
                    <div className="text-accent-orange font-semibold mb-1">Special Offer Ends Soon!</div>
                    <div className="text-sm text-gray-300">
                      Join this month and save $100 on your first year membership
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Section - Additional CTAs */}
          <ScrollAnimation delay={600}>
            <div className="mt-16 text-center">
              <div className="bg-accent-orange/10 rounded-2xl p-8 border border-accent-orange/30">
                <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our friendly team is here to help you find the perfect fitness solution. Contact us today for
                  personalized guidance and answers to all your questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-secondary">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button className="btn-secondary">
                    <Link href="/about">Learn More</Link>
                  </Button>
                  <Button className="btn-secondary">
                    <Link href="/services">View Services</Link>
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
