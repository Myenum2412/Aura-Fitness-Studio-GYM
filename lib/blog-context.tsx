"use client"

import { createContext, useContext, type ReactNode } from "react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  authorBio: string
  authorImage: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  featured: boolean
}

interface BlogContextType {
  posts: BlogPost[]
  categories: string[]
  getFeaturedPosts: () => BlogPost[]
  getPostsByCategory: (category: string) => BlogPost[]
  getRelatedPosts: (postId: string, limit?: number) => BlogPost[]
}

const blogPosts: BlogPost[] = [
  {
    id: "ultimate-guide-strength-training",
    title: "The Ultimate Guide to Strength Training for Beginners",
    excerpt:
      "Everything you need to know to start your strength training journey safely and effectively, from proper form to progressive overload.",
    content: `<h2>Introduction to Strength Training</h2><p>Strength training is one of the most effective ways to build muscle, increase bone density, and boost metabolism. Whether you're looking to lose weight, gain muscle, or simply improve your overall health, incorporating strength training into your fitness routine is essential.</p><h2>Benefits of Strength Training</h2><p>The benefits of strength training extend far beyond just building muscle:</p><ul><li><strong>Increased Muscle Mass:</strong> Regular strength training helps build and maintain lean muscle mass, which is crucial for a healthy metabolism.</li><li><strong>Improved Bone Density:</strong> Weight-bearing exercises help strengthen bones and reduce the risk of osteoporosis.</li><li><strong>Enhanced Metabolism:</strong> Muscle tissue burns more calories at rest than fat tissue, helping with weight management.</li><li><strong>Better Functional Strength:</strong> Everyday activities become easier when you have a strong foundation.</li><li><strong>Improved Mental Health:</strong> Exercise releases endorphins and can help reduce stress and anxiety.</li></ul><h2>Getting Started: The Basics</h2><p>Before diving into your first workout, it's important to understand the fundamentals of proper form, progressive overload, and recovery.</p>`,
    author: "Sarah Johnson",
    authorRole: "Certified Personal Trainer & Strength Coach",
    authorBio:
      "Sarah has been helping people achieve their fitness goals for over 8 years. She specializes in strength training and body transformation.",
    authorImage: "/placeholder.svg?height=100&width=100&text=Sarah+Johnson",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Strength Training",
    image: "/placeholder.svg?height=400&width=800&text=Strength+Training+Guide",
    tags: ["Beginner", "Strength Training", "Muscle Building", "Form"],
    featured: true,
  },
  {
    id: "hiit-vs-cardio",
    title: "HIIT vs Traditional Cardio: Which Burns More Fat?",
    excerpt:
      "Comparing high-intensity interval training with steady-state cardio to determine the most effective fat-burning approach.",
    content: `<h2>The Great Cardio Debate</h2><p>The fitness world has long debated the merits of High-Intensity Interval Training (HIIT) versus traditional steady-state cardio. Both have their place in a well-rounded fitness program.</p><h2>Understanding HIIT</h2><p>High-Intensity Interval Training involves alternating between short bursts of intense activity and periods of rest or lower-intensity exercise.</p>`,
    author: "Mike Chen",
    authorRole: "Fitness Specialist & Cardio Expert",
    authorBio:
      "Mike specializes in cardiovascular training and has helped hundreds of clients optimize their cardio routines.",
    authorImage: "/placeholder.svg?height=100&width=100&text=Mike+Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Cardio",
    image: "/placeholder.svg?height=400&width=800&text=HIIT+vs+Cardio",
    tags: ["HIIT", "Cardio", "Fat Loss", "Training"],
    featured: false,
  },
  {
    id: "nutrition-muscle-building",
    title: "Nutrition Essentials for Muscle Building",
    excerpt:
      "Learn about the key nutrients, timing, and meal planning strategies that support muscle growth and recovery.",
    content: `<h2>The Foundation of Muscle Building</h2><p>Building muscle isn't just about lifting weights - nutrition plays a crucial role in your success. This guide covers the essential nutrients your body needs to build and maintain muscle mass.</p><h2>Protein: The Building Block</h2><p>Protein is essential for muscle protein synthesis, the process by which your body builds new muscle tissue.</p>`,
    author: "Emma Rodriguez",
    authorRole: "Registered Dietitian & Sports Nutritionist",
    authorBio:
      "Emma combines her expertise in nutrition science with practical meal planning to help athletes and fitness enthusiasts optimize their performance.",
    authorImage: "/placeholder.svg?height=100&width=100&text=Emma+Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Nutrition",
    image: "/placeholder.svg?height=400&width=800&text=Muscle+Building+Nutrition",
    tags: ["Nutrition", "Muscle Building", "Diet", "Recovery"],
    featured: false,
  },
  {
    id: "swimming-full-body-workout",
    title: "Swimming: The Perfect Full-Body Workout",
    excerpt:
      "Discover why swimming is considered one of the best exercises for overall fitness and how to maximize your pool workouts.",
    content: `<h2>Why Swimming is Exceptional</h2><p>Swimming engages nearly every muscle group while being gentle on joints. Whether you're a beginner or advanced swimmer, this guide will help you optimize your aquatic workouts.</p><h2>Full-Body Engagement</h2><p>Unlike many other forms of exercise, swimming works your entire body simultaneously, providing both cardiovascular and strength benefits.</p>`,
    author: "David Thompson",
    authorRole: "Swimming Coach & Aquatic Fitness Specialist",
    authorBio:
      "Former competitive swimmer David brings world-class expertise to recreational and competitive swimming programs.",
    authorImage: "/placeholder.svg?height=100&width=100&text=David+Thompson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Swimming",
    image: "/placeholder.svg?height=400&width=800&text=Swimming+Workout",
    tags: ["Swimming", "Full Body", "Low Impact", "Cardio"],
    featured: false,
  },
  {
    id: "yoga-flexibility-strength",
    title: "Yoga for Flexibility and Strength: A Beginner's Journey",
    excerpt:
      "How yoga can improve both flexibility and strength while reducing stress and enhancing overall well-being.",
    content: `<h2>The Dual Benefits of Yoga</h2><p>Yoga offers a unique combination of physical and mental benefits. This beginner's guide explores different yoga styles and how to start your practice safely and effectively.</p><h2>Building Strength Through Flexibility</h2><p>Many people think yoga is only about flexibility, but it's also an excellent way to build functional strength.</p>`,
    author: "Lisa Park",
    authorRole: "Certified Yoga Instructor & Wellness Coach",
    authorBio:
      "Lisa has been teaching yoga for over 10 years and specializes in helping beginners develop a sustainable practice.",
    authorImage: "/placeholder.svg?height=100&width=100&text=Lisa+Park",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Yoga",
    image: "/placeholder.svg?height=400&width=800&text=Yoga+Practice",
    tags: ["Yoga", "Flexibility", "Strength", "Mindfulness"],
    featured: false,
  },
  {
    id: "recovery-importance",
    title: "The Science of Recovery: Why Rest Days Matter",
    excerpt:
      "Understanding the importance of recovery in your fitness routine and how to optimize rest for better performance.",
    content: `<h2>Recovery: Where the Magic Happens</h2><p>Recovery is when the magic happens - your muscles repair, grow stronger, and your body adapts to training stress. Learn how to optimize your recovery for better results.</p><h2>The Physiology of Recovery</h2><p>During recovery, your body undergoes several important processes that are essential for fitness progress.</p>`,
    author: "Dr. James Wilson",
    authorRole: "Sports Medicine Physician",
    authorBio:
      "Dr. Wilson specializes in sports medicine and has worked with professional athletes to optimize recovery and performance.",
    authorImage: "/placeholder.svg?height=100&width=100&text=Dr+James+Wilson",
    date: "2024-01-03",
    readTime: "11 min read",
    category: "Recovery",
    image: "/placeholder.svg?height=400&width=800&text=Recovery+Science",
    tags: ["Recovery", "Rest", "Performance", "Health"],
    featured: false,
  },
]

const BlogContext = createContext<BlogContextType | undefined>(undefined)

export function BlogProvider({ children }: { children: ReactNode }) {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  const getFeaturedPosts = () => {
    return blogPosts.filter((post) => post.featured)
  }

  const getPostsByCategory = (category: string) => {
    return blogPosts.filter((post) => post.category === category)
  }

  const getRelatedPosts = (postId: string, limit = 3) => {
    const currentPost = blogPosts.find((post) => post.id === postId)
    if (!currentPost) return []

    return blogPosts
      .filter(
        (post) =>
          post.id !== postId &&
          (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
      )
      .slice(0, limit)
  }

  const value: BlogContextType = {
    posts: blogPosts,
    categories,
    getFeaturedPosts,
    getPostsByCategory,
    getRelatedPosts,
  }

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider")
  }
  return context
}
