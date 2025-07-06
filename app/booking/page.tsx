import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/scroll-animation"
import BookingForm from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book Now - Aura Fitness Studio",
  description:
    "Book your fitness consultation, personal training session, or facility tour at Aura Fitness Studio. Start your fitness journey today with our expert team.",
  keywords: "book fitness consultation, personal training booking, gym tour, fitness appointment",
  openGraph: {
    title: "Book Now - Aura Fitness Studio",
    description: "Schedule your fitness consultation or facility tour at Aura Fitness Studio. Expert guidance awaits.",
    type: "website",
  },
}

export default function Booking() {
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
              <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                Book Your Session
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Start Your Fitness Journey</h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                Schedule your free consultation, facility tour, or personal training session. Our expert team is ready
                to help you achieve your fitness goals.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Service</h2>
                <p className="text-lg text-gray-300">
                  Select the service that best fits your needs and schedule your appointment
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <BookingForm />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
