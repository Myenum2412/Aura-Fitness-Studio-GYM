import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Search, Heart, Eye } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Blog - Aura Fitness Studio",
  description:
    "Discover fitness tips, workout routines, nutrition advice, and success stories from Aura Fitness Studio. Expert insights to help you achieve your health goals.",
  keywords: "fitness blog, workout tips, nutrition advice, fitness routines, health tips, success stories",
  openGraph: {
    title: "Blog - Aura Fitness Studio",
    description: "Expert fitness tips, workout routines, and success stories to inspire your fitness journey.",
    type: "website",
  },
}

const blogPosts = [
  {
    id: "1",
    slug: "ultimate-strength-training-guide",
    title: "The Ultimate Strength Training Guide for Beginners",
    excerpt:
      "Master the fundamentals of strength training with our comprehensive guide. Learn proper form, progressive overload, and create effective workout routines that deliver real results.",
    author: {
      name: "Sarah Johnson",
      role: "Head Strength Coach",
      image: "/placeholder.svg?height=100&width=100&text=Sarah+Johnson",
    },
    publishedAt: "2024-01-15",
    readTime: "15 min read",
    category: "Strength Training",
    tags: ["Beginner", "Strength Training", "Muscle Building", "Form"],
    image: "/placeholder.svg?height=400&width=800&text=Strength+Training+Guide",
    featured: true,
    likes: 127,
    views: 2340,
  },
  {
    id: "2",
    slug: "hiit-vs-steady-state-cardio",
    title: "HIIT vs Steady-State Cardio: The Ultimate Fat-Burning Showdown",
    excerpt:
      "Discover which cardio method burns more fat and fits your lifestyle. We break down the science, benefits, and best applications for both HIIT and steady-state cardio.",
    author: {
      name: "Mike Chen",
      role: "Cardio Specialist",
      image: "/placeholder.svg?height=100&width=100&text=Mike+Chen",
    },
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    category: "Cardio",
    tags: ["HIIT", "Cardio", "Fat Loss", "Training"],
    image: "/placeholder.svg?height=400&width=800&text=HIIT+vs+Cardio",
    featured: true,
    likes: 89,
    views: 1876,
  },
  {
    id: "3",
    slug: "nutrition-muscle-building-complete-guide",
    title: "Nutrition for Muscle Building: The Complete Science-Based Guide",
    excerpt:
      "Unlock the secrets of muscle-building nutrition. Learn about protein requirements, meal timing, supplements, and create a meal plan that supports your muscle-building goals.",
    author: {
      name: "Emma Rodriguez",
      role: "Sports Nutritionist",
      image: "/placeholder.svg?height=100&width=100&text=Emma+Rodriguez",
    },
    publishedAt: "2024-01-10",
    readTime: "18 min read",
    category: "Nutrition",
    tags: ["Nutrition", "Muscle Building", "Diet", "Protein"],
    image: "/placeholder.svg?height=400&width=800&text=Muscle+Building+Nutrition",
    featured: false,
    likes: 156,
    views: 2890,
  },
  {
    id: "4",
    slug: "swimming-complete-workout-guide",
    title: "Swimming: The Ultimate Full-Body Workout Guide",
    excerpt:
      "Dive into the world of swimming fitness. Learn proper techniques, workout routines, and why swimming might be the perfect exercise for your fitness goals.",
    author: {
      name: "David Kim",
      role: "Aquatic Director",
      image: "/placeholder.svg?height=100&width=100&text=David+Kim",
    },
    publishedAt: "2024-01-08",
    readTime: "20 min read",
    category: "Swimming",
    tags: ["Swimming", "Full Body", "Low Impact", "Technique"],
    image: "/placeholder.svg?height=400&width=800&text=Swimming+Workout+Guide",
    featured: false,
    likes: 203,
    views: 3456,
  },
  {
    id: "5",
    slug: "yoga-flexibility-strength-guide",
    title: "Yoga for Flexibility and Strength: A Complete Beginner's Guide",
    excerpt:
      "Discover how yoga can transform your flexibility, strength, and mental well-being. Learn fundamental poses, breathing techniques, and create a sustainable practice.",
    author: {
      name: "Lisa Thompson",
      role: "Yoga Instructor",
      image: "/placeholder.svg?height=100&width=100&text=Lisa+Thompson",
    },
    publishedAt: "2024-01-05",
    readTime: "22 min read",
    category: "Yoga",
    tags: ["Yoga", "Flexibility", "Strength", "Mindfulness"],
    image: "/placeholder.svg?height=400&width=800&text=Yoga+Guide",
    featured: false,
    likes: 178,
    views: 2567,
  },
  {
    id: "6",
    slug: "recovery-science-importance",
    title: "The Science of Recovery: Why Rest Days Are Your Secret Weapon",
    excerpt:
      "Discover why recovery is just as important as your workouts. Learn evidence-based strategies to optimize rest, reduce injury risk, and accelerate your fitness progress.",
    author: {
      name: "Dr. James Wilson",
      role: "Exercise Physiologist",
      image: "/placeholder.svg?height=100&width=100&text=Dr+James+Wilson",
    },
    publishedAt: "2024-01-03",
    readTime: "25 min read",
    category: "Recovery",
    tags: ["Recovery", "Sleep", "Stress Management", "Performance"],
    image: "/placeholder.svg?height=400&width=800&text=Recovery+Science",
    featured: false,
    likes: 234,
    views: 4123,
  },
]

const categories = ["All", "Strength Training", "Cardio", "Nutrition", "Swimming", "Yoga", "Recovery"]

const featuredPosts = blogPosts.filter((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fitness <span className="text-orange-500">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert advice, proven strategies, and inspiring stories to fuel your fitness journey
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Featured Articles</h2>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <ScrollAnimation key={post.id} delay={index * 200}>
                    <Card className="hover:shadow-xl transition-all duration-300 group overflow-hidden border-0 shadow-lg">
                      <div className="relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{post.category}</Badge>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300 group-hover:text-black">
                          {post.title}
                        </h3>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                              Read Full Article
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Latest Articles</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Card className="hover:shadow-xl transition-all duration-300 group overflow-hidden border-0 shadow-lg h-full">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{post.category}</Badge>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>{post.author.name}</span>
                        <span>•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold hover:text-orange-500 transition-colors duration-300 group-hover:text-black line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="flex flex-col h-full">
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="mt-auto">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Fitness Tips</h2>
              <p className="text-xl mb-8 text-gray-300">
                Get the latest workout routines, nutrition advice, and success stories delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6">
                  Subscribe
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
