"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rajeshwaritraders12@gmail.com",
    href: "mailto:rajeshwaritraders12@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-9080653388",
    href: "tel:+919080653388",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-6380636765",
    href: "tel:+916380636765",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sathyamangalam, Tamil Nadu, India",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
    href: null,
  },
]

const inquiryTypes = [
  "Request Quote",
  "Request Sample",
  "Product Information",
  "Bulk Order Inquiry",
  "Partnership Opportunity",
  "General Inquiry",
]

const products = [
  "Cocopeat Blocks (5kg)",
  "Cocopeat Grow Bags",
  "Cocopeat Powder",
  "Multiple Products",
]

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    inquiryType: "",
    product: "",
    quantity: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setFormState("success")
      } else {
        console.error('Form submission error:', data)
        setFormState("error")
      }
    } catch (error) {
      console.error('Form submission failed:', error)
      setFormState("error")
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (formState === "error") {
    return (
      <div className="flex flex-col min-h-[80vh]">
        <section className="flex-1 flex items-center justify-center py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Oops, Something Went Wrong
            </h1>
            <p className="text-muted-foreground mb-8">
              We encountered an error while sending your inquiry. Please try again or contact us directly via WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setFormState("idle")}>
                Try Again
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/919080653388?text=Hello%2C%20I%20am%20interested%20in%20your%20cocopeat%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col min-h-[80vh]">
        <section className="flex-1 flex items-center justify-center py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h1>
            <p className="text-muted-foreground mb-8">
              We have received your message and will get back to you within 24 hours. Our team is excited to assist you with your cocopeat requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setFormState("idle")}>
                Send Another Message
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4 uppercase tracking-wide text-sm">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Have questions about our products or ready to place an order? Our team is here to help you find the perfect cocopeat solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <Card className="bg-primary border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                    <h3 className="font-semibold text-primary-foreground">WhatsApp Us</h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Get quick responses to your inquiries via WhatsApp.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a
                      href="https://wa.me/919080653388?text=Hello%2C%20I%20am%20interested%20in%20your%20cocopeat%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          placeholder="Your country"
                          required
                          value={formData.country}
                          onChange={(e) => handleChange("country", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleChange("inquiryType", value)}
                          required
                        >
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="product">Product Interest</Label>
                        <Select
                          value={formData.product}
                          onValueChange={(value) => handleChange("product", value)}
                        >
                          <SelectTrigger id="product">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product} value={product}>
                                {product}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 1 container, 5000 blocks"
                          value={formData.quantity}
                          onChange={(e) => handleChange("quantity", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Our Location</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Visit Our Facility
            </h2>
            <p className="text-muted-foreground">
              We are located in Sathyamangalam, Tamil Nadu, India - a region renowned for its coconut production and coir processing expertise.
            </p>
          </div>

          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <div className="aspect-[21/9] bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.45678901234!2d77.1234567890123!3d11.5000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e25ed2f7e2f%3A0x1b6c0c0c0c0c0c0c!2sSathyamangalam%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rajeshwari Global Exports Location"
                />
              </div>
              <div className="p-6 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Rajeshwari Global Exports</h3>
                    <p className="text-muted-foreground text-sm">Sathyamangalam, Tamil Nadu, India</p>
                  </div>
                  <Button asChild variant="outline">
                    <a
                      href="https://maps.google.com/?q=Sathyamangalam,Tamil+Nadu,India"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
