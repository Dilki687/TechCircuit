"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CircuitBoard,
  Globe,
  Smartphone,
  Cpu,
  ChevronRight,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle,
  Zap,
  Code,
  Layers,
  Server,
  Wifi,
} from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    services: useRef(null),
    stats: useRef(null),
    testimonials: useRef(null),
    cta: useRef(null),
  }

  const slides = [
    {
      title: "Innovative PCB Design",
      description: "Custom PCB designs that bring your electronic projects to life",
      image: "/placeholder.svg?height=1080&width=1920",
      link: "/services/pcb-design",
      icon: <CircuitBoard className="h-16 w-16" />,
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "Modern Web Development",
      description: "Cutting-edge websites and web applications for your business",
      image: "/placeholder.svg?height=1080&width=1920",
      link: "/services/web-development",
      icon: <Globe className="h-16 w-16" />,
      color: "from-purple-600 to-pink-400",
    },
    {
      title: "IoT Solutions",
      description: "Connect your devices to the internet of things with our custom solutions",
      image: "/placeholder.svg?height=1080&width=1920",
      link: "/services/iot",
      icon: <Cpu className="h-16 w-16" />,
      color: "from-emerald-600 to-teal-400",
    },
  ]

  const services = [
    {
      title: "PCB Design",
      description: "Custom PCB designs for your electronic projects, from simple to complex multi-layer boards.",
      icon: <CircuitBoard className="h-10 w-10" />,
      link: "/services/pcb-design",
      features: ["Single & Multi-layer PCBs", "Flexible PCBs", "High-frequency PCBs", "Power Distribution PCBs"],
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      icon: <Globe className="h-10 w-10" />,
      link: "/services/web-development",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Progressive Web Apps"],
      color: "from-purple-600 to-pink-400",
    },
    {
      title: "Software & Mobile Apps",
      description: "Custom software solutions and mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      link: "/services/software-mobile",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "API Integration"],
      color: "from-amber-600 to-orange-400",
    },
    {
      title: "IoT Solutions",
      description: "Connect your devices to the internet of things with our custom IoT solutions.",
      icon: <Cpu className="h-10 w-10" />,
      link: "/services/iot",
      features: ["Sensor Integration", "Data Analytics", "Remote Monitoring", "Smart Automation"],
      color: "from-emerald-600 to-teal-400",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechInnovate",
      content:
        "TechCircuit delivered an exceptional PCB design that exceeded our expectations. Their attention to detail and technical expertise made our product launch a success.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      role: "Founder, WebSolutions",
      content:
        "The web development team at TechCircuit transformed our online presence. Our new website has significantly increased our conversion rates and customer engagement.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, IoT Ventures",
      content:
        "Working with TechCircuit on our IoT project was a game-changer. Their innovative solutions helped us bring our smart home product to market months ahead of schedule.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const stats = [
    { value: 150, label: "Projects Completed", icon: <CheckCircle className="h-8 w-8" /> },
    { value: 50, label: "Happy Clients", icon: <Users className="h-8 w-8" /> },
    { value: 10, label: "Years Experience", icon: <Clock className="h-8 w-8" /> },
    { value: 25, label: "Team Members", icon: <Award className="h-8 w-8" /> },
  ]

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "We deliver projects on time without compromising quality.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Our developers write maintainable, efficient, and scalable code.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business needs.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Reliable Infrastructure",
      description: "Built on robust, secure, and high-performance infrastructure.",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Connected Ecosystem",
      description: "Seamless integration between all your systems and devices.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centered Design",
      description: "Intuitive interfaces designed with your users in mind.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Check which section is currently in view
      const scrollPosition = window.scrollY + window.innerHeight / 2

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)

            // Add active class to reveal animations
            if (element.classList.contains("reveal") && !element.classList.contains("active")) {
              element.classList.add("active")
            }

            // Add active class to stagger containers
            const staggerContainers = element.querySelectorAll(".stagger-container")
            staggerContainers.forEach((container) => {
              if (!container.classList.contains("active")) {
                container.classList.add("active")
              }
            })
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="relative h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="hero-slide-bg" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content">
              <div className={`mb-6 text-white bg-gradient-to-r ${slide.color} p-4 rounded-full`}>{slide.icon}</div>
              <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                <span className="block">{slide.title}</span>
              </h1>
              <p className="mb-8 max-w-md text-xl text-white/90 md:text-2xl">{slide.description}</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-animated bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary"
                >
                  <Link href={slide.link}>Explore Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 text-white border-white/50 hover:bg-white/10 hover:border-white"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="slide-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slide-dot ${index === currentSlide ? "slide-dot-active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Animated Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="shrink-0 rounded-full p-3 bg-primary/10 text-primary">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 reveal">
        <div className="container">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="About TechCircuit"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                About Us
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Innovative Solutions for <span className="gradient-text">Modern Challenges</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At TechCircuit, we specialize in creating custom PCB designs and developing cutting-edge web
                applications. Our team of experts combines technical expertise with creative problem-solving to deliver
                solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert Engineers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ongoing Support</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="group">
                  <Link href="/about" className="flex items-center">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRefs.stats} className="py-20 bg-muted animated-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Impact in Numbers</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We've helped businesses of all sizes achieve their goals through innovative technology solutions.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card shadow-sm border">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2" style={{ "--value": stat.value } as any}>
                  {stat.value}+
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={sectionRefs.services} className="py-20 stagger-container">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl mb-4">
              Comprehensive <span className="gradient-text">Technology Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We offer a wide range of services to help you bring your ideas to life and stay ahead of the competition.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="service-card stagger-item overflow-hidden border-none shadow-lg">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className={`mb-4 rounded-full p-3 bg-gradient-to-r ${service.color} text-white w-fit`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-between">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRefs.testimonials} className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Technology Solutions <span className="gradient-text">That Deliver Results</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team of experts is dedicated to delivering high-quality solutions that help your business grow and
                succeed.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {features.slice(3).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg border bg-card/50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="shrink-0 rounded-full p-2 bg-primary/10 text-primary">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Our Features"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs.cta} className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 reveal">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 md:p-12 shadow-xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to bring your ideas to life?</h2>
              <p className="mb-8 text-lg text-white/90">
                Contact us today to discuss your project and get a free consultation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="btn-animated">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 text-white border-white/50 hover:bg-white/10 hover:border-white"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Trusted by Leading Companies</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We've partnered with companies of all sizes across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg border bg-card/50 transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src="/placeholder-logo.svg"
                  width={120}
                  height={60}
                  alt={`Partner ${index + 1}`}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
