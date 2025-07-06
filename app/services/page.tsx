import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Waves, Users, User, Heart, Zap, Clock, Star, CheckCircle, Award } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Services - Aura Fitness Studio",
  description:
    "Explore our comprehensive fitness services including gym access, swimming pool, personal training, group classes, and wellness programs with detailed pricing and schedules.",
  keywords: "gym services, personal training, swimming pool, group fitness, wellness programs, fitness classes",
  openGraph: {
    title: "Services - Aura Fitness Studio",
    description:
      "Comprehensive fitness services including gym access, swimming pool, personal training, and wellness programs with expert instructors.",
    type: "website",
  },
}

const services = [
  {
    icon: Dumbbell,
    title: "Premium Gym Access",
    description:
      "State-of-the-art equipment including cardio machines, free weights, and strength training equipment from leading brands like Technogym and Life Fitness.",
    image: "/Images/Services/PremiumGym Access.jpeg?height=400&width=600&text=Modern+Gym+Equipment",
    features: ["24/7 Access", "200+ Equipment Pieces", "Climate Controlled", "Locker Rooms", "Towel Service"],
    schedule: "24/7 Access Available",
    instructor: "Self-guided with staff support",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: [
        "Cardio: Treadmills, Ellipticals, Bikes",
        "Strength: Free weights, Cable machines",
        "Functional: Kettlebells, Medicine balls",
      ],
      amenities: ["Spacious workout areas", "Air conditioning", "Water stations", "Equipment sanitization"],
      membership: ["No enrollment fees", "Month-to-month options", "Family discounts available"],
    },
  },
  {
    icon: Waves,
    title: "Swimming Pool & Aqua Fitness",
    description:
      "Olympic-size swimming pool with dedicated lanes for lap swimming, aqua fitness classes, and recreational activities.",
    image: "/Images/Services/Swimmingpool.jpeg?height=400&width=600&text=Olympic+Swimming+Pool",
    features: ["Olympic Size Pool", "Heated Water", "8 Swimming Lanes", "Aqua Classes", "Swimming Lessons"],
    schedule: "Mon-Sun: 5AM-10PM",
    instructor: "Certified Swim Instructors",
    popular: true,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: ["25-meter Olympic pool", "Heated to 82°F year-round", "Advanced filtration system"],
      amenities: ["Pool deck seating", "Changing rooms", "Pool equipment rental", "Lifeguard on duty"],
      membership: ["Includes pool access", "Guest passes available", "Swimming lesson discounts"],
    },
  },
  {
    icon: Users,
    title: "Group Fitness Classes",
    description:
      "Dynamic group classes including yoga, HIIT, spinning, Zumba, Pilates, and dance fitness led by certified instructors.",
    image: "/Images/Services/GroupFitnessClasses.jpeg?height=400&width=600&text=Group+Fitness+Class",
    features: ["25+ Class Types", "100+ Weekly Classes", "All Skill Levels", "Expert Instructors", "Small Class Sizes"],
    schedule: "Classes every hour, 6AM-9PM",
    instructor: "Certified Group Fitness Instructors",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: ["Yoga: Mats, blocks, straps", "HIIT: Functional equipment", "Spin: Premium bikes"],
      amenities: ["Mirrored studios", "Sound systems", "Climate control", "Equipment provided"],
      membership: ["Unlimited classes", "Online booking", "Class recordings available"],
    },
  },
  {
    icon: User,
    title: "Personal Training",
    description:
      "One-on-one training sessions with certified personal trainers specializing in weight loss, strength building, and athletic performance.",
    image: "/Images/Services/PersonalTraining.jpeg?height=400&width=600&text=Personal+Training+Session",
    features: [
      "Customized Programs",
      "NASM Certified Trainers",
      "Progress Tracking",
      "Nutrition Guidance",
      "Flexible Scheduling",
    ],
    schedule: "Available 6AM-10PM daily",
    instructor: "Certified Personal Trainers",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: ["Full gym access", "Specialized equipment", "Body composition analysis"],
      amenities: ["Private training areas", "Progress tracking app", "Nutritional consultations"],
      membership: ["Package discounts", "Couples training", "Online coaching available"],
    },
  },
  {
    icon: Zap,
    title: "Functional Training",
    description:
      "Functional training area with artificial turf for agility, speed, sport-specific training, and athletic performance enhancement.",
    image: "/Images/Services/Functional.jpeg?height=400&width=600&text=Functional+Training+Area",
    features: [
      "2000 sq ft Turf Area",
      "Agility Equipment",
      "Sport-Specific Training",
      "Small Groups",
      "Athletic Performance",
    ],
    schedule: "Mon-Fri: 6AM-10PM, Weekends: 7AM-8PM",
    instructor: "Sports Performance Specialists",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: ["Battle ropes", "Kettlebells", "TRX systems", "Plyometric boxes", "Agility ladders"],
      amenities: ["Artificial turf surface", "Performance tracking", "Video analysis"],
      membership: ["Open gym access", "Small group sessions", "Performance assessments"],
    },
  },
  {
    icon: Heart,
    title: "Wellness & Recovery",
    description:
      "Comprehensive wellness programs including nutrition counseling, massage therapy, recovery services, and mindfulness sessions.",
    image: "/Images/Services/Wellness&Recovery.jpeg?height=400&width=600&text=Wellness+Recovery+Center",
    features: [
      "Nutrition Counseling",
      "Massage Therapy",
      "Recovery Services",
      "Health Assessments",
      "Mindfulness Programs",
    ],
    schedule: "Mon-Fri: 8AM-8PM, Weekends: 9AM-6PM",
    instructor: "Licensed Wellness Professionals",
    popular: false,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    details: {
      equipment: ["Massage tables", "Recovery equipment", "Meditation space"],
      amenities: ["Private consultation rooms", "Relaxation areas", "Wellness library"],
      membership: ["Monthly consultations", "Wellness workshops", "Recovery sessions"],
    },
  },
]

const instructors = [
  {
    name: "S. Ajith",
    role: "Fitness and Boxing Coach",
    image: "/Images/About/Staffs/AJITH.jpeg?height=300&width=300&text=S+Ajith",
    bio: "S. Ajith is a certified fitness and boxing coach with 8 years of hands-on experience. With a Diploma in IT, he blends tech-savvy insights with advanced training methods to specialize in boxing, weight loss, weight gain, and CrossFit.",
    certifications: ["Diploma in IT"],
    specialties: ["Boxing", "Weight Loss", "Weight Gain", "CrossFit Training"],
  },
  {
    name: "Arunkumar R",
    role: "Fitness Trainer",
    image: "/Images/About/Staffs/ARUNKUMARR.jpeg?height=300&width=300&text=Arunkumar+R",
    bio: "Arunkumar R has 2 years of training experience and holds the prestigious Senior Mr. Salem Gold title. His dedication to personalized fitness plans makes him a valued asset at Aura Fitness Studio.",
    certifications: ["Senior Mr. Salem – Gold 🥇"],
    specialties: [
      "Body Sculpting",
      "Personal Training",
      "Strength & Conditioning",
    ],
    email: "arunr2599@gmail.com",
  },
  {
    name: "Champion Trainer",
    role: "Strength & Powerlifting Expert",
    image: "/Images/About/Staffs/uname.jpeg?height=300&width=300&text=Champion+Trainer",
    bio: "With 5 years of gym experience and 2 years as a trainer, this expert has achieved honors across multiple strength competitions at the district, state, and national levels.",
    certifications: [
      "National Arm Wrestling – Bronze 🥉",
      "Anna University Powerlifting – Bronze 🥉",
      "District Bench Press – Gold 🥇",
      "State Bench Press – Gold 🥇",
      "State Weightlifting – Bronze 🥉",
    ],
    specialties: [
      "Powerlifting",
      "Weightlifting",
      "Muscle Gain",
      "Strength Coaching",
    ],
  },
]

const scheduleData = [
  {
    time: "6:00 AM",
    monday: "HIIT",
    tuesday: "Yoga Flow",
    wednesday: "Aqua Fitness",
    thursday: "Strength Circuit",
    friday: "Spin Class",
  },
  {
    time: "7:00 AM",
    monday: "Yoga Flow",
    tuesday: "HIIT",
    wednesday: "Swimming Laps",
    thursday: "Functional Training",
    friday: "Pilates",
  },
  {
    time: "8:00 AM",
    monday: "Swimming Laps",
    tuesday: "Strength Circuit",
    wednesday: "HIIT",
    thursday: "Yoga Flow",
    friday: "Aqua Fitness",
  },
  {
    time: "9:00 AM",
    monday: "Pilates",
    tuesday: "Aqua Fitness",
    wednesday: "Yoga Flow",
    thursday: "Swimming Laps",
    friday: "HIIT",
  },
  {
    time: "10:00 AM",
    monday: "Functional Training",
    tuesday: "Swimming Laps",
    wednesday: "Strength Circuit",
    thursday: "Pilates",
    friday: "Yoga Flow",
  },
  {
    time: "6:00 PM",
    monday: "Strength Circuit",
    tuesday: "Spin Class",
    wednesday: "HIIT",
    thursday: "Aqua Fitness",
    friday: "Yoga Flow",
  },
  {
    time: "7:00 PM",
    monday: "HIIT",
    tuesday: "Yoga Flow",
    wednesday: "Swimming Laps",
    thursday: "Functional Training",
    friday: "Pilates",
  },
  {
    time: "8:00 PM",
    monday: "Spin Class",
    tuesday: "Pilates",
    wednesday: "Strength Circuit",
    thursday: "HIIT",
    friday: "Aqua Fitness",
  },
]

export default function Services() {
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
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
                Comprehensive Fitness Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                Discover our full range of premium fitness services designed to help you achieve your health and
                wellness goals
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <ScrollAnimation key={index} delay={index * 200}>
                    <div
                      className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <div className="relative h-96 rounded-2xl overflow-hidden group">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          {service.popular && (
                            <Badge className="absolute top-4 right-4 bg-accent-orange text-white">
                              <Star className="h-3 w-3 fill-current mr-1" />
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-6`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-4 ${service.bgColor} rounded-xl`}>
                            <IconComponent className={`h-8 w-8 ${service.color}`} />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg">{service.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-accent-orange" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent-orange rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock className="h-4 w-4 text-accent-orange" />
                              <span className="text-sm">{service.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <User className="h-4 w-4 text-accent-orange" />
                              <span className="text-sm">{service.instructor}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                          <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <h5 className="text-accent-orange font-medium mb-2">Equipment</h5>
                              <ul className="space-y-1 text-gray-300">
                                {service.details.equipment.map((item, i) => (
                                  <li key={i}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-accent-orange font-medium mb-2">Amenities</h5>
                              <ul className="space-y-1 text-gray-300">
                                {service.details.amenities.map((item, i) => (
                                  <li key={i}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-accent-orange font-medium mb-2">Membership</h5>
                              <ul className="space-y-1 text-gray-300">
                                {service.details.membership.map((item, i) => (
                                  <li key={i}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button className="btn-primary bg-white text-black rounded-xl">
                            <Link href="/booking">Book Now</Link>
                          </Button>
                          <Button className="btn-secondary">
                            <Link href="/contact">Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Centered "Instructors" Title */}
            <ScrollAnimation>
              <div className="flex justify-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-accent-orange text-center">
                  Instructors
                </h1>
              </div>
            </ScrollAnimation>

            {/* Section Heading and Description */}
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Meet Our Team
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Expert <span className="text-accent-orange">Instructors</span> & Trainers
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our certified professionals bring years of experience and passion to help you achieve your fitness goals.
                </p>
              </div>
            </ScrollAnimation>

            {/* Instructor Cards */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instructors.map((instructor, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                          {instructor.name}
                        </CardTitle>
                        <p className="text-accent-orange font-semibold">{instructor.role}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                              <Award className="h-4 w-4 text-accent-orange" />
                              Certifications
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {instructor.certifications.map((cert, certIndex) => (
                                <Badge
                                  key={certIndex}
                                  variant="outline"
                                  className="text-xs border-accent-orange/30 text-gray-300"
                                >
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-accent-orange" />
                              Specialties
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {instructor.specialties.map((spec, specIndex) => (
                                <Badge
                                  key={specIndex}
                                  variant="outline"
                                  className="text-xs border-accent-orange/30 text-gray-300"
                                >
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-300">{instructor.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied members who have transformed their lives at Aura Fitness Studio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 text-lg">
                  <Link href="/booking">Start Your Trial</Link>
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-orange font-semibold py-3 px-8 text-lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}