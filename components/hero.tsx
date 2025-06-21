"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera, ArrowDown } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background with Image that Always Fits and Covers Full Area */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/orange-nature.avif?height=1080&width=1920"
          alt="Nature landscape by Darnell Edwards"
          fill
          className="object-cover object-center sm:object-bottom md:object-center lg:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-md animate-ping" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <div className="relative mt-20 md:mt-32">
            <Camera className="h-16 w-16 text-green-400 animate-bounce" />
            <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-lg animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
          <span className="block bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
            DARNELL
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-widest text-green-300 mt-2">
            EDWARDS
          </span>
        </h1>

        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent h-px top-1/2" />
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide bg-black/50 px-6 sm:px-8 py-2 rounded-full inline-block">
            NATURE • PHOTOGRAPHY • STORYTELLER
          </p>
        </div>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Capturing the untamed beauty of our world, one frame at a time.
          <span className="block mt-2 text-green-300">Where adventure meets artistry.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            onClick={() => (window.location.hash = 'portfolio')}
            size="lg"
            className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            EXPLORE PORTFOLIO
          </Button>
          <Button
            onClick={() => (window.location.hash = 'contact')}
            size="lg"
            variant="outline"
            className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-black hover:bg-white hover:text-stone-900 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            GET IN TOUCH
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-2 h-32 bg-gradient-to-b from-green-400 to-transparent transform rotate-12" />
        <div className="absolute bottom-1/4 right-12 w-2 h-24 bg-gradient-to-t from-yellow-400 to-transparent transform -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-px h-16 bg-white/30 transform rotate-45" />
      </div>
    </section>
  )
}
