import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Users } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Aura Fitness Studio",
  description:
    "Get in touch with Aura Fitness Studio. Schedule a tour, ask questions, or learn more about our premium fitness services and membership options.",
  keywords: "contact aura fitness, gym contact, fitness consultation, schedule tour, gym membership",
  openGraph: {
    title: "Contact Us - Aura Fitness Studio",
    description: "Contact Aura Fitness Studio for membership information, tours, and fitness consultations.",
    type: "website",
  },
}

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our friendly staff",
    details: "+91 99437 99969",
    action: "Call Now",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    href: "tel:+919943799969",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    details: "aurafitness@email.com",
    action: "Send Email",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    href: "mailto:aurafitness@email.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    details: "Available 9AM-9PM daily",
    action: "Start Chat",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    href: "#live-chat",
  },
]

const locationInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Arthanari Bakkiam Complex, 39/7",
      "Vasagasalai St, near ponganapathi temple",
      "Ponnammapet, Salem",
      "Tamil Nadu 636001"
    ],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Sun: 5:30 am – 9:30 pm"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 99437 99969"],
  },
  {
    icon: Users,
    title: "Departments",
    details: ["Membership", "Personal Training", "Group Classes"],
  },
]

const faqs = [
  {
    question: "What are your membership options?",
    answer:
      "We offer flexible membership plans including basic gym access, premium with pool access, and elite with all services included. All memberships include access to our state-of-the-art equipment and facilities.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes! Our certified personal trainers offer one-on-one sessions, small group training, and specialized programs. All trainers are certified by nationally recognized organizations like NASM, ACSM, or ACE.",
  },
  {
    question: "Can I try the gym before joining?",
    answer:
      "We offer a 7-day free trial for new members, which includes access to all facilities and a complimentary fitness assessment with one of our trainers.",
  },
  {
    question: "What safety measures do you have in place?",
    answer:
      "We maintain the highest safety standards with regular equipment maintenance, trained staff on-site, emergency procedures, and comprehensive cleaning protocols throughout the day.",
  },
  {
    question: "Do you have parking available?",
    answer:
      "Yes, we provide free parking for all members and visitors. Our parking lot is well-lit and monitored for security.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Just bring comfortable workout clothes, athletic shoes, and a water bottle. We provide towels, and all equipment is available for use. Don't forget a valid ID for registration!",
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 bg-primary-black">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent-orange/20 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-accent-orange/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-accent-orange/30 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">Contact Us</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Get in Touch</h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                Ready to start your fitness journey? We're here to help you every step of the way. Contact us today to
                learn more about our services and schedule your free consultation.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background-dark">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
            How to Reach Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Multiple Ways to Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the method that works best for you. Our team is ready to assist with any questions or help you
            get started.
          </p>
        </div>
      </ScrollAnimation>

      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="h-full hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className={`mx-auto p-4 ${method.bgColor} rounded-xl mb-4 w-fit`}>
                      <IconComponent className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{method.details}</p>
                    <a href={method.href} className="btn-secondary w-full text-sm block">
                      {method.action}
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Form & Location Info */}
      <section className="py-20 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollAnimation>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours. Let us know how we can help you
                    achieve your fitness goals.
                  </p>
                  <ContactForm />
                </div>
              </ScrollAnimation>

              {/* Location Information */}
              <ScrollAnimation delay={300}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Visit Our Studio</h2>
                  <p className="text-gray-300 mb-8">
                    Located in the heart of Salem, our premium facility is easily accessible with ample parking space.
                  </p>

                  <div className="space-y-6">
                    {locationInfo.map((info, index) => {
                      const IconComponent = info.icon
                      return (
                        <Card key={index} className="bg-white/5 border-gray-800 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-accent-orange/20 rounded-lg">
                                <IconComponent className="h-6 w-6 text-accent-orange" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                <div className="space-y-1">
                                  {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-gray-300">
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Map Placeholder */}
                  {/* Map Placeholder - Updated with your Google Maps link */}
<div className="mt-8 h-64 bg-gray-800 rounded-lg overflow-hidden">
  <a 
    href="https://maps.app.goo.gl/hR15i2pNB77394U69" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block h-full w-full relative"
  >
    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="h-12 w-12 text-accent-orange mx-auto mb-2" />
        <p className="text-gray-300">Arthanari Bakkiam Complex</p>
        <p className="text-gray-400 text-sm">Vasagasalai St, Ponnammapet, Salem</p>
        <div className="mt-4">
          <button className="btn-secondary text-sm px-4 py-2">
            View on Google Maps
          </button>
        </div>
      </div>
    </div>
  </a>
</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">FAQ</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Find answers to common questions about our services, membership, and facilities
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={800}>
              <div className="text-center mt-12">
                <p className="text-gray-300 mb-4">Still have questions? We're here to help!</p>
                <a href="#contact-form" className="btn-primary">
                  Contact Our Team
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule your free consultation and facility tour today. Experience the Aura Fitness difference
                firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#schedule-tour"
                  className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Tour
                </a>
                <a
                  href="tel:+919943799969"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-orange font-semibold py-3 px-8 text-lg rounded-lg transition-all duration-300"
                >
                  Call +91 99437 99969
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>© 2024 Aura Fitness Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}