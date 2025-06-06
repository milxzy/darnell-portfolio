import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Darnell Edwards</h3>
            <p className="text-stone-300 leading-relaxed">
              Professional photographer capturing the beauty and wonder of our natural world through compelling
              imagery.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-stone-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-stone-300 hover:text-green-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-stone-300 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-stone-300">
              <li>Landscape Photography</li>
              <li>Wildlife Photography</li>
              <li>Nature Workshops</li>
              <li>Print Sales</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2025 <a href="https://milxzy.dev">Milxzy</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
