import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Heart,
  Target,
  Dumbbell,
  Waves,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

export const metadata: Metadata = {
  title: "About Us - Aura Fitness Studio",
  description:
    "Learn about Aura Fitness Studio's mission, values, and commitment to helping you achieve your fitness goals with premium facilities and expert guidance.",
  keywords:
    "about aura fitness, gym mission, fitness values, premium gym, fitness community",
  openGraph: {
    title: "About Us - Aura Fitness Studio",
    description:
      "Discover our mission to transform lives through fitness with premium facilities, expert trainers, and a supportive community.",
    type: "website",
  },
};

const values = [
  {
    icon: Heart,
    title: "Passion for Fitness",
    description:
      "We believe fitness is a journey, not a destination. Our passion drives us to help every member discover their potential and achieve their goals.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We foster an inclusive, supportive community where everyone feels welcome, regardless of their fitness level or background.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "We maintain the highest standards in equipment, facilities, and service to provide an exceptional fitness experience.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We're committed to helping you achieve measurable results through personalized programs and expert guidance.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

const team = [
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
];

const milestones = [
  {
    title: "Empowering Every Individual",
    description:
      "We help each person work towards their fitness goals with personalised plans, expert trainers, and constant encouragement.",
  },
  {
    title: "Premium Fitness Experience",
    description:
      "Our gym offers modern equipment, neat surroundings, and a motivating space where members enjoy every workout session.",
  },
  {
    title: "Building a Supportive Community",
    description:
      "At Aura, we believe every achievement counts—big or small. Our members uplift and support one another throughout their journey.",
  },
  {
    title: "Confidence Through Routine",
    description:
      "We focus on building confidence and discipline through regular workouts, helping members stay consistent and positive.",
  },
  {
    title: "Wellness Beyond Fitness",
    description:
      "Fitness is more than just exercise. We promote a complete lifestyle—balancing physical health, food habits, and mental wellness.",
  },
  {
    title: "Creating Daily Impact",
    description:
      "Each day, we guide individuals towards a healthier life—transforming not just their bodies, but their mindset too.",
  },
];

const stats = [
  { number: "2", label: "Years of Excellence", suffix: "+" },
  { number: "500", label: "Active Members", suffix: "+" },
  { number: "10", label: "Expert Staff", suffix: "+" },
  { number: "25", label: "Success Stories", suffix: "+" },
];

const facilities = [
  {
    icon: Dumbbell,
    title: "Strength Training Zone",
    description:
      "Over 200 pieces of premium equipment from Technogym, Life Fitness, and Hammer Strength.",
    image:
      "/Images/About/StrengthTrainingZone.jpeg?height=200&width=300&text=Strength+Training",
  },
  {
    icon: Waves,
    title: "Olympic Swimming Pool",
    description:
      "25-meter, 8-lane pool with advanced filtration and temperature control systems.",
    image:
      "/Images/About/OlympicSwimmingPool.jpeg?height=200&width=300&text=Swimming+Pool",
  },
  {
    icon: Users,
    title: "Group Fitness Studios",
    description:
      "Multiple studios with premium sound systems and climate control for optimal comfort.",
    image:
      "/Images/About/GroupFitnessStudios.jpeg?height=200&width=300&text=Group+Fitness",
  },
  {
    icon: Heart,
    title: "Wellness Center",
    description:
      "Dedicated space for recovery, massage therapy, and wellness consultations.",
    image:
      "/Images/About/WellnessCenter.jpeg?height=200&width=300&text=Wellness+Center",
  },
];

export default function About() {
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
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
                Transforming Lives Through Fitness
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-300 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                For over 2 years, Aura Fitness Studio has been the premier
                destination for fitness excellence, combining state-of-the-art
                facilities with expert guidance and a supportive community.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To empower individuals to achieve their fitness goals
                    through premium facilities, expert guidance, and a
                    supportive community that celebrates every victory, no
                    matter how small.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    We believe that fitness is not just about physical
                    transformation—it's about building confidence, creating
                    lasting habits, and improving overall quality of life.
                  </p>
                  <Button className="btn-primary">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/Images/About/OurMission.jpeg?height=400&width=600&text=Mission+Vision"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Our Values
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  What Drives Us Forward
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our core values guide everything we do, from the programs we
                  create to the community we build
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="h-full hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                      <CardHeader>
                        <div
                          className={`mx-auto p-4 ${value.bgColor} rounded-xl mb-4 w-fit`}
                        >
                          <IconComponent className={`h-8 w-8 ${value.color}`} />
                        </div>
                        <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{value.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-xl opacity-90">
                  Celebrating the milestones that define our journey
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold mb-2">
                      {stat.number}
                      <span className="text-2xl md:text-3xl">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-lg font-medium opacity-90">
                      {stat.label}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Leadership Team
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Meet Our Expert Team
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our passionate leaders bring decades of combined experience in
                  fitness, wellness, and member care
                </p>
              </div>
            </ScrollAnimation>

            {/* Centered flex card container */}
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="w-72 hover-lift bg-white/5 border border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                        {member.name}
                      </CardTitle>
                      <p className="text-accent-orange font-semibold">
                        {member.role}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-white font-semibold mb-2">
                            Certifications:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {member.certifications.map((cert, certIndex) => (
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
                          <h4 className="text-white font-semibold mb-2">
                            Specialties:
                          </h4>
                          <div className="text-sm text-gray-300">
                            {member.specialties.join(" • ")}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Our Journey
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Years of Growth & Innovation
                </h2>
                <p className="text-xl text-gray-300">
                  Key milestones that have shaped our journey to becoming the
                  premier fitness destination
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="flex gap-8 items-start group">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="w-4 h-4 bg-accent-orange rounded-full mx-auto group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <div className="flex-1 pb-8 border-l border-gray-800 pl-8 relative">
                      <div className="absolute left-0 top-6 w-px h-full bg-gray-800"></div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Our Facilities
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  State-of-the-Art Equipment
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Premium facilities designed to provide the ultimate fitness
                  experience
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={facility.image || "/placeholder.svg"}
                          alt={facility.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="p-3 bg-accent-orange/20 rounded-lg backdrop-blur-sm">
                            <IconComponent className="h-6 w-6 text-accent-orange" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                          {facility.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm">
                          {facility.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  Visit Us
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Come Experience Aura Fitness
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Schedule a tour and see why we're the premier fitness
                  destination in the city
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Location Card */}
              <ScrollAnimation delay={200}>
                <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-accent-orange/20 rounded-xl mb-4 w-fit">
                      <MapPin className="h-8 w-8 text-accent-orange" />
                    </div>
                    <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Arthanari Bakkiam Complex, 39/7, Vasagasalai St, near
                      ponganapathi temple, Ponnammapet, <br />
                      Salem, Tamil Nadu 636001
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/11.6602,78.1532/Arthanari+Bakkiam+Complex,+39%2F7,+Vasagasalai+St,+near+ponganapathi+temple,+Ponnammapet,+Salem,+Tamil+Nadu+636001/@11.6636902,78.1580126,1989m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3babf15db672f29d:0xcd6aef5dc0538236!2m2!1d78.1731463!2d11.6668826?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-accent-orange text-white hover:bg-accent-orange/80 rounded-2xl">
                        Open in Maps
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Hours Card */}
              <ScrollAnimation delay={300}>
                <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-accent-orange/20 rounded-xl mb-4 w-fit">
                      <Clock className="h-8 w-8 text-accent-orange" />
                    </div>
                    <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      <br />
                      Mon-Sun 5:30 am – 9:30 pm
                      <br />
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Contact Card */}
              <ScrollAnimation delay={400}>
                <Card className="hover-lift bg-white/5 border-gray-800 hover:border-accent-orange/50 transition-all duration-300 group backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-accent-orange/20 rounded-xl mb-4 w-fit">
                      <Phone className="h-8 w-8 text-accent-orange" />
                    </div>
                    <CardTitle className="text-white group-hover:text-accent-orange transition-colors duration-300">
                      Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Phone: +91 99437 99969</p>
                    <a href="tel:+919943799969">
                      <Button className="bg-accent-orange text-white hover:bg-accent-orange/80 rounded-2xl">
                        Call Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the Aura difference with a complimentary tour and
                fitness consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 text-lg">
                  <Link href="/booking">Schedule Free Tour</Link>
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
  );
}
