"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=100&width=100&text=Jennifer+M",
    rating: 5,
    text: "Aura Fitness Studio completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence in just 6 months!",
    program: "Weight Loss Program",
    achievement: "Lost 30 lbs in 6 months",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100&text=Michael+C",
    rating: 5,
    text: "The swimming pool and aqua fitness classes are amazing! As someone who works long hours at a desk, the low-impact workouts have been perfect for my back issues. The facilities are always clean and well-maintained.",
    program: "Aqua Fitness",
    achievement: "Improved back health",
  },
  {
    name: "Sarah Thompson",
    role: "Teacher",
    image: "/placeholder.svg?height=100&width=100&text=Sarah+T",
    rating: 5,
    text: "I was intimidated by gyms before, but the staff at Aura made me feel welcome from day one. The group fitness classes are so much fun, and I've made great friends here. It's become my second home!",
    program: "Group Fitness Classes",
    achievement: "Built lasting friendships",
  },
  {
    name: "David Rodriguez",
    role: "Business Owner",
    image: "/placeholder.svg?height=100&width=100&text=David+R",
    rating: 5,
    text: "The personal training sessions have been game-changing. My trainer created a program specifically for my goals and schedule. I've gained 15 pounds of muscle and feel stronger than ever at 45!",
    program: "Personal Training",
    achievement: "Gained 15 lbs muscle",
  },
  {
    name: "Lisa Park",
    role: "Nurse",
    image: "/placeholder.svg?height=100&width=100&text=Lisa+P",
    rating: 5,
    text: "Working night shifts made it hard to maintain a fitness routine. The 24/7 access has been a lifesaver! I can work out whenever my schedule allows, and the equipment is top-notch.",
    program: "24/7 Gym Access",
    achievement: "Consistent routine despite shift work",
  },
  {
    name: "Robert Kim",
    role: "Retired Veteran",
    image: "/placeholder.svg?height=100&width=100&text=Robert+K",
    rating: 5,
    text: "The wellness programs here go beyond just physical fitness. The nutrition counseling and recovery services have helped me manage my chronic pain and improve my overall quality of life.",
    program: "Wellness Program",
    achievement: "Improved quality of life",
  },
]

const stats = [
  { number: "4.9", label: "Average Rating", suffix: "/5" },
  { number: "500", label: "Happy Members", suffix: "+" },
  { number: "98", label: "Satisfaction Rate", suffix: "%" },
  { number: "2", label: "Years of Excellence", suffix: "+" },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-orange/5 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent-orange/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-accent-orange/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                Member Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white rounded-2xl">What Our Members Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real stories from real people who have transformed their lives at Aura Fitness Studio
              </p>
            </div>
          </ScrollAnimation>

          {/* Stats Row */}
          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover-lift"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">
                    {stat.number}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="h-full hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-accent-orange/20">
                    <Quote className="h-8 w-8" />
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent-orange text-accent-orange" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 mb-6 flex-grow italic">"{testimonial.text}"</blockquote>

                    {/* Program Badge */}
                    <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30 w-fit">
                      {testimonial.program}
                    </Badge>

                    {/* Achievement */}
                    <div className="text-sm text-accent-orange font-semibold mb-4">✓ {testimonial.achievement}</div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-accent-orange transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollAnimation delay={800}>
            <div className="text-center mt-16">
              <div className="bg-gradient-orange rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied members who have achieved their fitness goals with our expert guidance and
                  premium facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Start Your Trial
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-orange font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                    Schedule Tour
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
