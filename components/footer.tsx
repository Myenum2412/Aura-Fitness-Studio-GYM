import Link from "next/link"
import Image from "next/image"
import {
  Dumbbell,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Booking", href: "/booking" },
  ],
  services: [
    { name: "Gym Access", href: "/services" },
    { name: "Personal Training", href: "/services" },
    { name: "Swimming Pool", href: "/services" },
    { name: "Group Classes", href: "/services" },
    { name: "Wellness Programs", href: "/services" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <ScrollAnimation>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/Images/Logo/logo.jpeg"
                  alt="Aura Fitness Studio Logo"
                  width={60}
                  height={60}
                  className="rounded-full object-contain"
                />
                <span className="text-xl font-bold group-hover:text-accent-orange transition-colors duration-300">
                  Aura Fitness Studio
                </span>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Transform your fitness journey with our premium facilities, expert trainers, and supportive community.
                Your health and wellness are our priority.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-accent-orange transition-all duration-300 transform hover:scale-110"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="sr-only">{item.name}</span>
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <ScrollAnimation delay={200}>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-accent-orange">Navigation</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.main.map((item, index) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={400}>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-accent-orange">Services</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.services.map((item, index) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation delay={600}>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-accent-orange">Contact Info</h3>
                  <div className="mt-6 space-y-4 text-sm text-gray-300">
                    <div className="flex items-start gap-3 group">
                      <MapPin className="h-4 w-4 mt-0.5 text-accent-orange group-hover:text-orange-500 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-white">Address</p>
                        <a
                          href="https://www.google.com/maps/place/Aura+Fitness+Studio/@11.6668878,78.170566,994m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf15db672f29d:0xcd6aef5dc0538236!8m2!3d11.6668826!4d78.1731463!16s%2Fg%2F11y98tmsrb?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-orange transition-colors duration-300"
                        >
                          Arthanari Bakkiam Complex, 39/7, Vasagasalai St, near ponganapathi temple, Ponnammapet, Salem, Tamil Nadu 636001
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                      <Phone className="h-4 w-4 text-accent-orange group-hover:text-orange-500 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <a
                          href="tel:+919943799969"
                          className="hover:text-accent-orange transition-colors duration-300"
                        >
                          +91 99437 99969
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                      <Mail className="h-4 w-4 text-accent-orange group-hover:text-orange-500 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <a
                          href="mailto:aurafitness@email.com"
                          className="hover:text-accent-orange transition-colors duration-300"
                        >
                          aurafitness@email.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <Clock className="h-4 w-4 mt-0.5 text-accent-orange group-hover:text-orange-500 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-white">Hours</p>
                        <p>Mon-Sun 5:30 am – 9:30 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={800}>
          <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs leading-5 text-gray-400">&copy; 2025 Aura Fitness Studio. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
