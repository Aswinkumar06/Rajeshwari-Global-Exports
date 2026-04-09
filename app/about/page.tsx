import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Rajeshwari Global Exports",
  description: "Learn about Rajeshwari Global Exports - a leading cocopeat manufacturer and exporter from India with 3 years of experience serving global markets.",
}

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous testing for EC, pH, moisture content, and contamination to ensure consistent quality.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We work closely with our clients to understand their specific requirements and deliver customized solutions.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our efficient logistics network ensures on-time delivery to any destination worldwide.",
  },
  {
    icon: Award,
    title: "Export Excellence",
    description: "With 15+ years of export experience, we handle all documentation and compliance seamlessly.",
  },
]

const qualityPoints = [
  "Rigorous testing for EC levels (below 0.5 mS/cm)",
  "pH balanced between 5.5 - 6.5",
  "Low salt content through triple-washing process",
  "Consistent compression ratio",
  "Free from pathogens and weed seeds",
  "Proper curing for 6-12 months",
  "Moisture content controlled at 15-20%",
  "Regular third-party lab certifications",
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-facility.jpg"
            alt="Cocopeat manufacturing facility"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4 uppercase tracking-wide text-sm">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Premium Cocopeat from the Heart of South India
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Rajeshwari Global Exports has been at the forefront of cocopeat manufacturing and export since 2026, building lasting relationships with clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Company Introduction
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rajeshwari Global Exports was founded in 2026 in Sathyamangalam, Tamil Nadu, a region renowned for its abundant coconut production and traditional expertise in coir processing.
                </p>
                <p>
                  What started as a small family business has grown into a leading exporter of premium cocopeat products, serving clients across more than 50 countries on six continents. Our journey has been driven by an unwavering commitment to quality, sustainability, and customer satisfaction.
                </p>
                <p>
                  Today, we operate modern processing facilities equipped with state-of-the-art machinery, ensuring consistent product quality while maintaining the eco-friendly practices that are central to our values.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-cocopeat.jpg"
                alt="Cocopeat production process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted supplier of premium cocopeat products globally by delivering consistent quality, sustainable practices, and exceptional customer service. We strive to support agricultural growth worldwide while contributing to environmental sustainability through our eco-friendly products.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global leader in cocopeat exports by 2030, setting industry standards for product quality, environmental responsibility, and customer partnership. We envision a future where sustainable growing media becomes the norm in agriculture worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at Rajeshwari Global Exports.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Experience */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wide text-sm">Export Experience</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
                3 Years of Global Excellence
              </h2>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                <p>
                  Our extensive export experience spans 3 years, during which we have established strong relationships with importers, distributors, and agricultural companies across the globe.
                </p>
                <p>
                  We understand the complexities of international trade, from documentation and customs compliance to logistics and delivery coordination. Our dedicated export team ensures smooth transactions and timely shipments to any destination.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">50+</p>
                  <p className="text-primary-foreground/80 text-sm">Countries Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">100+</p>
                  <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">5000+</p>
                  <p className="text-primary-foreground/80 text-sm">Containers Shipped</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">99%</p>
                  <p className="text-primary-foreground/80 text-sm">On-Time Delivery</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/export-shipping.jpg"
                alt="Global shipping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/cocopeat-blocks.jpg"
                alt="Quality cocopeat products"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Quality Assurance</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Uncompromising Quality Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Quality is the cornerstone of our business. We implement comprehensive quality control measures at every stage of production, from raw material sourcing to final packaging.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualityPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Partner with a Trusted Exporter
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated cocopeat supplier committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
