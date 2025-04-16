"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart, Plus, Minus } from "lucide-react"

export default function PCBDesignPage() {
  const { addItem } = useCart()

  const products = [
    {
      id: "pcb-001",
      name: "Basic Single-Layer PCB",
      description: "Simple single-layer PCB design for basic electronic projects.",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-002",
      name: "Dual-Layer PCB",
      description: "Dual-layer PCB design for more complex electronic circuits.",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-003",
      name: "Multi-Layer PCB",
      description: "4-layer PCB design for advanced electronic applications.",
      price: 129.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-004",
      name: "Flexible PCB",
      description: "Flexible PCB design for applications requiring bendable circuits.",
      price: 149.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-005",
      name: "High-Frequency PCB",
      description: "Specialized PCB design for high-frequency applications.",
      price: 199.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-006",
      name: "IoT Sensor PCB",
      description: "Custom PCB design optimized for IoT sensor applications and connectivity.",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-007",
      name: "Power Distribution PCB",
      description: "Heavy-duty PCB design for power distribution and management systems.",
      price: 169.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "pcb-008",
      name: "Arduino Shield PCB",
      description: "Custom Arduino-compatible shield PCB for your specific project needs.",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((product) => [product.id, 1])),
  )

  const handleQuantityChange = (id: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change),
    }))
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantities[product.id],
    })
  }

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">PCB Design Services</h1>
        <p className="text-lg text-muted-foreground">
          Printed Circuit Boards (PCBs) are the foundation of all electronic devices. Our custom PCB design services
          help you bring your electronic projects to life with high-quality, reliable circuit boards tailored to your
          specific requirements.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our PCB Products</h2>
        <div className="pcb-product-grid">
          {products.map((product) => (
            <div key={product.id} className="pcb-product-card">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="pcb-product-image"
                />
              </div>
              <div className="pcb-product-content">
                <h3 className="pcb-product-title">{product.name}</h3>
                <p className="pcb-product-description">{product.description}</p>
                <div className="pcb-product-price">${product.price.toFixed(2)}</div>
                <div className="pcb-product-actions">
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(product.id, -1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantities[product.id]}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(product.id, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Custom PCB Design Process</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Consultation</h3>
            <p className="text-muted-foreground">
              We begin with a detailed consultation to understand your project requirements, specifications, and
              constraints.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Design & Prototyping</h3>
            <p className="text-muted-foreground">
              Our engineers create detailed schematics and PCB layouts, followed by prototype manufacturing for testing.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Production</h3>
            <p className="text-muted-foreground">
              After prototype approval, we proceed to full production with rigorous quality control and testing.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold">Need a Custom PCB Design?</h2>
          <p className="mb-6 text-muted-foreground">
            Contact us for a free consultation on your custom PCB design requirements. Our team of experts will help you
            bring your electronic project to life.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
