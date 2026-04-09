import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Export Info", href: "/export" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Cocopeat Blocks", href: "/products#blocks" },
    { name: "Cocopeat Grow Bags", href: "/products#growbags" },
    { name: "Cocopeat Powder", href: "/products#powder" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-4">
              Rajeshwari Global Exports
            </h3>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Premium quality cocopeat products exporter from India, serving international markets with reliable supply and consistent quality.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:rajeshwaritraders12@gmail.com" 
                className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                rajeshwaritraders12@gmail.com
              </a>
              <a 
                href="tel:+916380636765" 
                className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91-6380636765
              </a>
              <div className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Sathyamangalam, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Export Information
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Global Shipping Available</li>
              <li>Bulk Orders Supported</li>
              <li>Custom Packaging Options</li>
              <li>Quality Certified Products</li>
              <li>Competitive Pricing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} Rajeshwari Global Exports. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Premium Cocopeat Exporter from India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
