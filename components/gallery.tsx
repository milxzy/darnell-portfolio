"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Work", count: 9 },
    { id: "maternity", name: "Maternity", count: 3 },
    { id: "nature", name: "Nature", count: 2 },
    { id: "headshot", name: "Headshot", count: 1 },
    { id: "engagement", name: "Engagement", count: 3 },
  ]

  const galleryImages = [
    { id: 1, category: "maternity", title: "Growing Together", src: "/maternity3.avif?height=400&width=600" },
    { id: 2, category: "engagement", title: "The Journey Begins", src: "/engagementhighlight.jpg?height=400&width=600" },
    { id: 3, category: "headshot", title: "Wonder", src: "/child.avif?height=400&width=600" },
    { id: 4, category: "engagement", title: "Bound by Love", src: "/engagement1.jpg?height=400&width=600" },
    { id: 5, category: "maternity", title: "Miracle of Life", src: "/maternity2.avif?height=400&width=600" },
    { id: 6, category: "engagement", title: "New Beginnings", src: "/engagement2.jpg?height=400&width=600" },
    { id: 7, category: "nature", title: "Whispers of the Wild", src: "/butterfly.avif?height=400&width=600" },
    { id: 8, category: "nature", title: "Serene Escape", src: "/tree.avif?height=400&width=600" },
    { id: 9, category: "maternity", title: "Expecting Bliss", src: "/maternity1.avif?height=400&width=600" },
  ]

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-to-bl from-stone-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="bg-white border-green-200 text-green-700 px-6 py-2 text-sm font-medium mb-6"
          >
            COMPLETE COLLECTION
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-stone-800 mb-6 leading-tight">
            PORTFOLIO
            <span className="block text-green-600">GALLERY</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore my complete collection of photography, organized by category for easy browsing through
            different worlds of natural beauty.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl scale-105"
                  : "border-2 border-stone-200 hover:border-green-300 hover:bg-green-50"
                  }`}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${activeCategory === category.id ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
                    }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${index % 4 === 1 ? "lg:mt-0" : index % 4 === 3 ? "lg:-mt-0" : ""
                }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <div className="w-8 h-px bg-green-400" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {/* 

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            LOAD MORE ADVENTURES
          </Button>
        </div>
          */}
      </div>
    </section>
  )
}
