"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart, Plus, Minus, Cpu, Wifi, Cloud, Shield } from "lucide-react"

export default function IoTPage() {
  const { addItem } = useCart()

  const products = [
    {
      id: "iot-001",
      name: "Smart Home Sensor Kit",
      description: "Complete IoT sensor kit for home automation and monitoring.",
      price: 149.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-002",
      name: "Industrial IoT Gateway",
      description: "Robust gateway for industrial IoT applications with multiple connectivity options.",
      price: 299.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-003",
      name: "Environmental Monitoring System",
      description: "IoT system for monitoring temperature, humidity, air quality, and more.",
      price: 199.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-004",
      name: "Asset Tracking Solution",
      description: "Complete IoT solution for real-time asset tracking and management.",
      price: 249.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-005",
      name: "Smart Agriculture Kit",
      description: "IoT system for monitoring soil conditions, irrigation, and crop health.",
      price: 179.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-006",
      name: "Energy Monitoring System",
      description: "IoT solution for monitoring and optimizing energy consumption.",
      price: 159.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-007",
      name: "Wearable IoT Development Kit",
      description: "Development kit for creating custom wearable IoT devices.",
      price: 129.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "iot-008",
      name: "Smart Retail Analytics System",
      description: "IoT system for retail analytics, customer tracking, and inventory management.",
      price: 349.99,
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

  const services = [
    {
      title: "IoT Hardware Design",
      description: "Custom IoT hardware design and prototyping services.",
      icon: <Cpu className="h-8 w-8" />,
      features: [
        "Sensor selection and integration",
        "Custom PCB design for IoT devices",
        "Power optimization",
        "Prototype development",
      ],
    },
    {
      title: "IoT Connectivity",
      description: "Reliable connectivity solutions for IoT devices and systems.",
      icon: <Wifi className="h-8 w-8" />,
      features: [
        "Wi-Fi, Bluetooth, LoRaWAN, Cellular",
        "Mesh networking",
        "Gateway development",
        "Communication protocols",
      ],
    },
    {
      title: "IoT Cloud Platform",
      description: "Scalable cloud platforms for IoT data processing and analytics.",
      icon: <Cloud className="h-8 w-8" />,
      features: ["Data storage and processing", "Real-time analytics", "Visualization dashboards", "API development"],
    },
    {
      title: "IoT Security",
      description: "Comprehensive security solutions for IoT systems and devices.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Secure boot and firmware",
        "Encryption and authentication",
        "Secure communication",
        "Vulnerability assessment",
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">IoT Solutions</h1>
        <p className="text-lg text-muted-foreground">
          Internet of Things (IoT) connects physical devices to the digital world, enabling smart automation, data
          collection, and remote monitoring. Our IoT solutions help businesses improve efficiency, reduce costs, and
          create new opportunities.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our IoT Services</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-primary">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">IoT Solutions by Industry</h2>
        <Tabs defaultValue="manufacturing">
          <TabsList className="mb-8 w-full justify-start overflow-auto">
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
            <TabsTrigger value="retail">Retail</TabsTrigger>
            <TabsTrigger value="smartcity">Smart City</TabsTrigger>
          </TabsList>
          <TabsContent value="manufacturing" className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">IoT for Manufacturing</h3>
                <p className="mb-4 text-muted-foreground">
                  Our IoT solutions for manufacturing help businesses monitor equipment performance, predict maintenance
                  needs, optimize production processes, and improve overall operational efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Equipment monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Production optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Quality control</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Manufacturing IoT"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="healthcare" className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">IoT for Healthcare</h3>
                <p className="mb-4 text-muted-foreground">
                  Our healthcare IoT solutions enable remote patient monitoring, asset tracking, medication management,
                  and improved operational efficiency in healthcare facilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Remote patient monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Medical asset tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Medication management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Environmental monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=800" alt="Healthcare IoT" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="agriculture" className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">IoT for Agriculture</h3>
                <p className="mb-4 text-muted-foreground">
                  Our agricultural IoT solutions help farmers monitor soil conditions, automate irrigation, track
                  livestock, and optimize crop management for improved yields.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Soil monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Smart irrigation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Livestock tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Crop management</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Agriculture IoT"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="retail" className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">IoT for Retail</h3>
                <p className="mb-4 text-muted-foreground">
                  Our retail IoT solutions enable inventory management, customer analytics, smart shelves, and
                  personalized shopping experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Customer analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Smart shelves</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Personalized shopping</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=800" alt="Retail IoT" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="smartcity" className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">IoT for Smart Cities</h3>
                <p className="mb-4 text-muted-foreground">
                  Our smart city IoT solutions help municipalities manage traffic, monitor air quality, optimize energy
                  usage, and improve public safety.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Traffic management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Environmental monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Smart lighting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-primary">✓</div>
                    <span>Public safety</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=800" alt="Smart City IoT" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our IoT Products</h2>
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
      </section>

      <div className="rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Start Your IoT Project?</h2>
          <p className="mb-6 opacity-90">
            Contact us today to discuss your IoT requirements and get a free consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="btn-animated">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
