import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-stone-50 via-green-50 to-stone-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-green-600 rounded-full" />
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-stone-400 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-green-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-green-600/30" />
              <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-8 leading-tight">
                ABOUT
                <span className="block text-green-600 text-3xl md:text-4xl font-light">THE ARTIST</span>
              </h2>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-100">
              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p className="text-xl font-medium text-green-700 italic">"Life Is What You Make It…"</p>
                <p className="text-lg">
                  Hi, I'm <span className="font-bold text-green-600">Darnell Edwards</span> from San Francisco, California.
                  I've been doing photography for <span className="font-bold">7 years</span>, and this is one of my joys
                  that fuels my gift. So step into my world, put your seatbelts on, it's gonna be a{" "}
                  <span className="font-bold text-green-600">wild ride</span>….
                </p>

              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
<div className="flex justify-center">
  <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
    <CardContent className="p-6 text-center">
      <div className="text-3xl font-black mb-2">7</div>
      <div className="text-sm font-light">Years Experience</div>
    </CardContent>
  </Card>
</div>

              <Card className="bg-gradient-to-br from-stone-700 to-stone-800 text-white border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-black mb-2">500+</div>
                  <div className="text-sm font-light">Photos Captured</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-black mb-2">MO</div>
                  <div className="text-sm font-light">Based In</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/IMG_0481.jpg?height=800&width=600"
                  alt="Darnell Edwards - Photographer"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-4 border-green-100">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600">SGF</div>
                  <div className="text-xs text-stone-600 font-medium">MISSOURI</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
