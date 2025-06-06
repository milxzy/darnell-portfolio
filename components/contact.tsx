import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to capture your vision or discuss a photography project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span className="text-stone-600">Darnelledwards997@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-stone-600">+1 (417) 419-5549</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-stone-600">Missouri, USA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Follow My Journey</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/life__threw_a_lens" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="hover:bg-green-600 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">Services</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• Landscape Photography</li>
                <li>• Wildlife Photography</li>
                <li>• Nature Workshops</li>
                <li>• Print Sales</li>
                <li>• Custom Photography Tours</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Photography Inquiry" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your photography needs..." rows={5} />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
