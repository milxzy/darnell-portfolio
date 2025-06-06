"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart } from "lucide-react"

export function FeaturedWork() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const featuredImages = [
    {
      id: 1,
      title: "Motherhood",
      category: "Maternity",
      location: "Republic MO",
      likes: 984,
      views: 1520,
      src: "/maternity3.avif?height=600&width=800",
      dialog: "A moment captured in the warmth of motherhood, where love knows no bounds.",
    },
    {
      id: 2,
      title: "Love Forever",
      category: "Engagement",
      location: "Bentonville AR",
      likes: 1336,
      views: 1698,
      src: "/engagementhighlight.jpg?height=600&width=800",
      dialog: "A promise of forever, sealed in a moment of pure love and connection.",
    },
    {
      id: 3,
      title: "Wonder",
      category: "Headshot",
      location: "Springfield, MO",
      likes: 1278,
      views: 2100,
      src: "/child.avif?height=600&width=800",
      dialog: "A child's gaze, filled with wonder and curiosity, capturing the essence of innocence.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-20 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
        </div>
        <Badge
          variant="outline"
          className="bg-white border-green-200 text-green-700 px-6 py-2 text-sm font-medium mb-6"
        >
          FEATURED COLLECTION
        </Badge>
        <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
          SIGNATURE
          <span className="block text-green-600">MOMENTS</span>
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
          A curated selection of my most compelling captures, each telling a unique story of nature's raw beauty and
          untamed spirit.
        </p>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredImages.map((image, index) => (
          <Card
            key={image.id}
            className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${index === 1 ? "lg:scale-110 lg:-mt-0" : ""
              }`}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative w-full h-0 pb-[125%] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                layout="fill" // Ensure the image fills its parent container
                objectFit="cover" // Ensure the image covers the space and removes any white space
                className={`transition-all object-cover duration-700 ${hoveredImage === image.id ? "scale-110" : "scale-100"
                  }`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredImage === image.id ? "opacity-100" : "opacity-60"
                  }`}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg">
                  {image.category}
                </Badge>
              </div>

              {/* Stats */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Eye className="h-3 w-3 text-white" />
                  <span className="text-xs text-white">{image.views}</span>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Heart className="h-3 w-3 text-red-400" />
                  <span className="text-xs text-white">{image.likes}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-green-300 mb-3">{image.location}</p>

                {/* Hover Details */}
                <div
                  className={`transition-all duration-300 ${hoveredImage === image.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <div className="w-12 h-px bg-green-400 mb-3" />
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {image.dialog}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-16 border-b-16 border-l-transparent border-b-green-600/20" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <span className="font-semibold">VIEW COMPLETE PORTFOLIO</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

