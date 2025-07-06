import type { Metadata } from "next"
import Hero from "@/components/hero"
import GymServices from "@/components/gym-services"
import FeaturedCTAs from "@/components/featured-ctas"
import Testimonials from "@/components/testimonials"
import GymStats from "@/components/gym-stats"
import FacilityShowcase from "@/components/facility-showcase"

export const metadata: Metadata = {
  title: "Aura Fitness Studio - Premium Gym & Wellness Center",
  description:
    "Transform your fitness journey at Aura Fitness Studio. Premium gym equipment, swimming pool, personal training, and wellness programs in a modern facility.",
  keywords: "gym, fitness, personal training, swimming pool, wellness, workout, health",
  openGraph: {
    title: "Aura Fitness Studio - Premium Gym & Wellness Center",
    description:
      "Transform your fitness journey at Aura Fitness Studio. Premium gym equipment, swimming pool, personal training, and wellness programs.",
    type: "website",
    url: "https://aurafitnessstudio.in",
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-primary-black">
      <Hero />
      <FeaturedCTAs />
      <GymServices />
      <FacilityShowcase />
      <GymStats />
      <Testimonials />
    </main>
  )
}