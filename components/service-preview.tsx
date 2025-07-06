import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Waves, Users, User, Heart, Zap } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const services = [
  {
    icon: Dumbbell,
    title: "Premium Gym",
    description: "State-of-the-art equipment and spacious workout areas for all fitness levels.",
    href: "/services",
    color: "text-highlight-yellow",
    bgColor: "bg-highlight-yellow/10",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Olympic-size pool with dedicated lanes for lap swimming and aqua fitness.",
    href: "/services",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Dynamic fitness classes including yoga, HIIT, spinning, and more.",
    href: "/services",
    color: "text-highlight-yellow",
    bgColor: "bg-highlight-yellow/10",
  },
  {
    icon: User,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your goals.",
    href: "/services",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
  },
  {
    icon: Zap,
    title: "Turf Training",
    description: "Functional training area for agility, speed, and sport-specific workouts.",
    href: "/services",
    color: "text-highlight-yellow",
    bgColor: "bg-highlight-yellow/10",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Holistic approach including nutrition counseling and recovery services.",
    href: "/services",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
  },
]

export default function ServicePreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-black">Our Services</h2>
              <p className="text-xl text-text-gray max-w-2xl mx-auto">
                Comprehensive fitness solutions designed to help you achieve your goals
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="hover-lift bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-3 ${service.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className={`h-6 w-6 ${service.color}`} />
                        </div>
                        <CardTitle className="text-xl text-text-black group-hover:text-primary-maroon transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <p className="text-text-gray mb-6 flex-grow">{service.description}</p>
                      <Link
                        href={service.href}
                        className="text-highlight-yellow hover:text-accent-orange font-medium text-sm transition-colors duration-300 group-hover:translate-x-2 transform inline-block"
                      >
                        Learn More →
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>

          <ScrollAnimation delay={600}>
            <div className="text-center">
              <Button className="btn-primary text-lg px-8 py-4 hover-lift">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
