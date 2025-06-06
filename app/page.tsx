import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedWork } from "@/components/featured-work"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
