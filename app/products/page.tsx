import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Package, Ruler, Scale, Layers, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Rajeshwari Global Exports",
  description: "Explore our range of premium cocopeat products including 5kg blocks, grow bags, and cocopeat powder. Export quality with competitive pricing.",
}

const products = [
  {
    id: "blocks",
    name: "Cocopeat Blocks (5kg)",
    image: "/images/cocopeat-blocks.jpg",
    description: "Our premium compressed cocopeat blocks are ideal for horticultural and agricultural applications. Each 5kg block expands to 60-70 liters of high-quality growing medium when hydrated.",
    features: [
      "High water retention capacity",
      "Excellent aeration properties",
      "Low EC and balanced pH",
      "Triple-washed for low salt content",
      "Long shelf life",
      "Easy to store and transport",
    ],
    specifications: [
      { label: "Weight", value: "5 kg (compressed)" },
      { label: "Expansion Volume", value: "60-70 liters" },
      { label: "Dimensions", value: "30 x 30 x 12 cm" },
      { label: "EC Level", value: "< 0.5 mS/cm" },
      { label: "pH Range", value: "5.5 - 6.5" },
      { label: "Moisture Content", value: "15-20%" },
      { label: "Compression Ratio", value: "5:1" },
      { label: "Fiber Content", value: "< 5%" },
    ],
    packaging: [
      "Individual shrink-wrapped blocks",
      "Palletized packaging (90-100 blocks per pallet)",
      "20ft container: 1,800-2,000 blocks",
      "40ft container: 3,600-4,000 blocks",
      "Custom packaging available on request",
    ],
    moq: "One 20ft container (approximately 1,800 blocks)",
  },
  {
    id: "growbags",
    name: "Cocopeat Grow Bags",
    image: "/images/cocopeat-growbags.jpg",
    description: "Our cocopeat grow bags are specially designed for hydroponic and greenhouse cultivation. Pre-filled with premium cocopeat, they provide an ideal growing medium for vegetables, fruits, and flowers.",
    features: [
      "Ready-to-use format",
      "UV stabilized bags for durability",
      "Pre-cut planting holes available",
      "Excellent drainage and aeration",
      "Consistent moisture distribution",
      "Suitable for multiple crop cycles",
    ],
    specifications: [
      { label: "Dimensions", value: "100 x 20 x 12 cm (standard)" },
      { label: "Volume", value: "18-20 liters" },
      { label: "Weight (dry)", value: "3.5-4 kg" },
      { label: "EC Level", value: "< 0.5 mS/cm" },
      { label: "pH Range", value: "5.5 - 6.5" },
      { label: "Moisture Content", value: "15-20%" },
      { label: "Bag Material", value: "UV stabilized PE" },
      { label: "Planting Holes", value: "4-6 per bag (optional)" },
    ],
    packaging: [
      "Bags bundled in sets of 10-20",
      "Palletized for easy handling",
      "20ft container: 2,500-3,000 bags",
      "40ft container: 5,000-6,000 bags",
      "Custom sizes available",
    ],
    moq: "One 20ft container (approximately 2,500 bags)",
  },
  {
    id: "powder",
    name: "Cocopeat Powder",
    image: "/images/cocopeat-powder.jpg",
    description: "Fine grade cocopeat powder, perfect for potting mixes, soil amendments, and specialized horticultural applications. Our powder is carefully processed to ensure consistent particle size and quality.",
    features: [
      "Fine, uniform particle size",
      "Excellent moisture retention",
      "Ideal for seed starting mixes",
      "Perfect for soil amendment",
      "Easy to blend with other media",
      "Consistent quality batch to batch",
    ],
    specifications: [
      { label: "Particle Size", value: "< 2mm" },
      { label: "Bulk Density", value: "80-100 kg/m³" },
      { label: "EC Level", value: "< 0.5 mS/cm" },
      { label: "pH Range", value: "5.5 - 6.5" },
      { label: "Moisture Content", value: "15-18%" },
      { label: "Organic Matter", value: "> 95%" },
      { label: "Water Holding Capacity", value: "8-9 times weight" },
      { label: "Fiber Content", value: "< 2%" },
    ],
    packaging: [
      "25kg bags (HDPE with liner)",
      "Palletized packaging (40 bags per pallet)",
      "20ft container: 18-20 MT",
      "40ft container: 24-26 MT",
      "Bulk packaging available",
    ],
    moq: "One 20ft container (approximately 18 MT)",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cocopeat-blocks.jpg"
            alt="Cocopeat products"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4 uppercase tracking-wide text-sm">
              Our Products
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Premium Cocopeat Products for Global Markets
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explore our range of high-quality cocopeat products, manufactured to meet the most demanding international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Product Range</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Choose from Our Premium Selection
            </h2>
            <p className="text-muted-foreground">
              All our products are manufactured using carefully sourced raw materials and undergo strict quality control processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <Link key={product.id} href={`#${product.id}`} className="group">
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
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-secondary" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Badge variant="outline" className="mb-4">Premium Quality</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="packaging">Packaging</TabsTrigger>
                <TabsTrigger value="moq">MOQ</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-primary" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {product.specifications.map((spec) => (
                        <div key={spec.label} className="bg-muted p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                          <p className="font-semibold text-foreground">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="packaging" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      Packaging Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.packaging.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Layers className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="moq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-primary" />
                      Minimum Order Quantity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground text-lg mb-4">{product.moq}</p>
                    <p className="text-muted-foreground">
                      For smaller quantities or sample orders, please contact us directly. We are happy to discuss your specific requirements.
                    </p>
                    <Button asChild className="mt-4">
                      <Link href="/contact">Contact for Custom Orders</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect cocopeat solution for your specific application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">
                Get Expert Advice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Request Samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
