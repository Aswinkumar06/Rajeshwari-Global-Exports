import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Ship, Package, Truck, FileText, CheckCircle, ArrowRight, Container, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Export Information | Rajeshwari Global Exports",
  description: "Learn about our export capabilities, shipping options, and global reach. We export premium cocopeat products to 50+ countries worldwide.",
}

const regions = [
  {
    name: "Europe",
    countries: ["Netherlands", "Germany", "Spain", "Italy", "France", "UK", "Belgium", "Poland"],
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan"],
  },
  {
    name: "Asia Pacific",
    countries: ["Japan", "South Korea", "Australia", "New Zealand", "Malaysia", "Singapore", "Thailand"],
  },
  {
    name: "Americas",
    countries: ["USA", "Canada", "Mexico", "Brazil", "Chile", "Colombia", "Ecuador"],
  },
  {
    name: "Africa",
    countries: ["South Africa", "Kenya", "Egypt", "Morocco", "Nigeria", "Ghana"],
  },
]

const packagingOptions = [
  {
    title: "Standard Pallet Packaging",
    description: "Products palletized with stretch wrap and strapping for secure transport.",
    details: ["Euro pallets (120x80 cm)", "Standard pallets (120x100 cm)", "Custom pallet sizes available"],
  },
  {
    title: "Container Loading",
    description: "Optimized loading patterns to maximize container utilization.",
    details: ["20ft containers", "40ft containers", "40ft HC containers", "Floor loading or palletized"],
  },
  {
    title: "Custom Packaging",
    description: "Private labeling and custom packaging to meet your brand requirements.",
    details: ["Custom bag printing", "Custom block sizes", "Private labeling", "Retail packaging"],
  },
]

const shippingOptions = [
  {
    icon: Ship,
    title: "Sea Freight (FCL)",
    description: "Full container load shipping for bulk orders with competitive rates.",
    features: ["20ft, 40ft, 40ft HC containers", "Door-to-port or door-to-door", "Transit time varies by destination"],
  },
  {
    icon: Container,
    title: "Sea Freight (LCL)",
    description: "Less than container load for smaller orders, consolidated shipping.",
    features: ["Minimum order from 5 CBM", "Shared container space", "Cost-effective for smaller quantities"],
  },
  {
    icon: Truck,
    title: "Air Freight",
    description: "Express shipping for urgent orders and sample deliveries.",
    features: ["Fastest delivery option", "Ideal for samples", "Higher cost per unit"],
  },
]

const exportProcess = [
  {
    step: "01",
    title: "Inquiry & Quotation",
    description: "Contact us with your requirements. We provide detailed quotations within 24 hours.",
  },
  {
    step: "02",
    title: "Sample Approval",
    description: "Request samples for quality verification before placing your bulk order.",
  },
  {
    step: "03",
    title: "Order Confirmation",
    description: "Finalize specifications, pricing, and delivery terms. Submit purchase order.",
  },
  {
    step: "04",
    title: "Production & QC",
    description: "Production begins with strict quality control at every stage.",
  },
  {
    step: "05",
    title: "Documentation",
    description: "We prepare all export documents including COO, phytosanitary certificate, etc.",
  },
  {
    step: "06",
    title: "Shipment & Delivery",
    description: "Goods are shipped with tracking information provided throughout transit.",
  },
]

const bulkBenefits = [
  "Volume-based pricing discounts",
  "Priority production scheduling",
  "Dedicated account manager",
  "Flexible payment terms",
  "Reserved container allocation",
  "Custom product specifications",
  "Annual supply contracts available",
  "Quality consistency guarantee",
]

export default function ExportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/export-shipping.jpg"
            alt="Global shipping"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4 uppercase tracking-wide text-sm">
              Export Information
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Global Reach, Local Service
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              With over 15 years of export experience, we deliver premium cocopeat products to customers in 50+ countries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Countries We Export */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Global Presence</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Countries We Export To
            </h2>
            <p className="text-muted-foreground">
              Our cocopeat products reach customers across six continents. Here are some of the key markets we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regions.map((region) => (
              <Card key={region.name} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                      >
                        <MapPin className="h-3 w-3 text-primary" />
                        {country}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {"Don't see your country listed? We can ship to almost any destination worldwide."}
            </p>
            <Button asChild>
              <Link href="/contact">Inquire About Your Location</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Packaging</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Flexible Packaging Solutions
            </h2>
            <p className="text-muted-foreground">
              We offer various packaging options to meet your specific requirements and ensure product integrity during transit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packagingOptions.map((option) => (
              <Card key={option.title} className="bg-card border-border h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Shipping</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Shipping Options
            </h2>
            <p className="text-muted-foreground">
              Choose from multiple shipping methods based on your timeline and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {shippingOptions.map((option) => (
              <Card key={option.title} className="bg-card border-border h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wide text-sm">How It Works</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Our Export Process
            </h2>
            <p className="text-primary-foreground/80">
              From inquiry to delivery, we ensure a smooth and transparent export experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportProcess.map((step) => (
              <div key={step.step} className="bg-primary-foreground/10 rounded-lg p-6">
                <span className="text-3xl font-bold text-primary-foreground/50">{step.step}</span>
                <h3 className="font-semibold text-primary-foreground mt-2 mb-2">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Bulk Orders</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Bulk Order Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in handling large-volume orders with the same attention to quality and service. Our infrastructure is designed to scale with your requirements, whether you need a single container or regular shipments throughout the year.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {bulkBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link href="/contact">Discuss Bulk Requirements</Link>
              </Button>
            </div>
            <Card className="bg-secondary border-border">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Export Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide complete export documentation to ensure smooth customs clearance:
                </p>
                <ul className="space-y-2">
                  {[
                    "Commercial Invoice",
                    "Packing List",
                    "Bill of Lading / Airway Bill",
                    "Certificate of Origin",
                    "Phytosanitary Certificate",
                    "Quality Test Reports",
                    "Insurance Certificate",
                    "Other documents as per requirement",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Start Your Export Order?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact our export team for competitive pricing, shipping estimates, and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Get Export Quote
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
