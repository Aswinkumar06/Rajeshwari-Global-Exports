import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Leaf, TrendingUp, Award, ArrowRight, Globe, Truck, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Droplets,
    title: "High Water Retention",
    description: "Superior water holding capacity of 8-9 times its weight, ensuring optimal moisture for plant growth.",
  },
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Sustainably sourced from coconut husks, completely organic and biodegradable material.",
  },
  {
    icon: TrendingUp,
    title: "High Yield Results",
    description: "Proven to increase crop yields with excellent aeration and root development properties.",
  },
  {
    icon: Award,
    title: "Export Quality",
    description: "Rigorous quality testing ensuring consistent EC, pH levels, and low salt content for global standards.",
  },
]

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "99%", label: "Quality Rate" },
]

const products = [
  {
    name: "Cocopeat Blocks",
    description: "Compressed 5kg blocks, easy to store and transport. Expands to 60-70 liters of growing medium.",
    image: "/images/cocopeat-blocks.jpg",
    href: "/products#blocks",
  },
  {
    name: "Cocopeat Grow Bags",
    description: "Ready-to-use grow bags for hydroponic farming and greenhouse cultivation.",
    image: "/images/cocopeat-growbags.jpg",
    href: "/products#growbags",
  },
  {
    name: "Cocopeat Powder",
    description: "Fine grade cocopeat powder ideal for potting mixes and soil amendments.",
    image: "/images/cocopeat-powder.jpg",
    href: "/products#powder",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-cocopeat.jpg"
            alt="Cocopeat processing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/90 font-medium mb-4 tracking-wide uppercase text-sm">
              Trusted Cocopeat Supplier Since 2026
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Premium Cocopeat Exporter from India
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              High Quality, Reliable Supply
            </p>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Rajeshwari Global Exports delivers premium cocopeat products to international markets. Our commitment to quality and consistency has made us a preferred supplier for agriculture companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <Link href="/contact">Request Sample</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">About Our Company</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Your Trusted Partner in Cocopeat Export
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Rajeshwari Global Exports is a leading manufacturer and exporter of premium cocopeat products based in Sathyamangalam, Tamil Nadu, India. With 3 years of experience in the industry, we have established ourselves as a reliable supplier to agricultural businesses across the globe.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our state-of-the-art processing facilities and stringent quality control measures ensure that every shipment meets international standards. We take pride in our sustainable practices and commitment to environmental responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-facility.jpg"
                alt="Cocopeat manufacturing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Why Choose Cocopeat</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Key Benefits of Our Products
            </h2>
            <p className="text-muted-foreground">
              Our premium cocopeat products offer numerous advantages for agriculture and horticulture applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Our Products</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Premium Cocopeat Products
            </h2>
            <p className="text-muted-foreground">
              We offer a range of high-quality cocopeat products tailored for various agricultural applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="group">
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Why Choose Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Your Reliable Export Partner
              </h2>
              <div className="space-y-4">
                {[
                  "Consistent quality with strict quality control processes",
                  "Competitive pricing for bulk orders",
                  "Flexible packaging options to meet your requirements",
                  "Timely delivery with reliable logistics partners",
                  "Dedicated customer support team",
                  "Export documentation and compliance support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">Exporting to 50+ countries across all continents.</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <Truck className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground text-sm">Efficient logistics for timely deliveries worldwide.</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Certified Quality</h3>
                <p className="text-muted-foreground text-sm">ISO certified with stringent quality standards.</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <Leaf className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Sustainable</h3>
                <p className="text-muted-foreground text-sm">Eco-friendly products and processes.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Source Premium Cocopeat?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing, product samples, and expert consultation on your cocopeat requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
