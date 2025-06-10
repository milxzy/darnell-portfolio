import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Thank You!
          </h1>
          <p className="text-stone-700 text-lg md:text-xl mb-8">
            Your message has been received. I'll be in touch soon.
          </p>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700">Back to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
