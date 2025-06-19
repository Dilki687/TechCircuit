import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function WebDevelopmentPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce platform with product management, cart functionality, and secure checkout.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      title: "Corporate Website",
      description:
        "A modern corporate website with custom animations, blog functionality, and content management system.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "GSAP", "Sanity CMS", "Vercel"],
    },
    {
      title: "SaaS Dashboard",
      description:
        "A comprehensive dashboard for a SaaS application with real-time data visualization and user management.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Vue.js", "D3.js", "Firebase", "Netlify"],
    },
    {
      title: "Mobile App",
      description:
        "A cross-platform mobile application for iOS and Android with offline functionality and push notifications.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
    },
  ]

  const services = [
    {
      title: "Custom Website Development",
      description: "Tailored websites designed to meet your specific business needs and goals.",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Performance optimization",
        "Accessibility compliance",
      ],
    },
    {
      title: "Web Application Development",
      description: "Complex web applications with advanced functionality and user interfaces.",
      features: [
        "Interactive user interfaces",
        "Real-time data processing",
        "API integration",
        "Authentication and authorization",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description: "Online stores with secure payment processing and inventory management.",
      features: ["Product catalog management", "Secure checkout process", "Order management", "Customer accounts"],
    },
    {
      title: "Content Management Systems",
      description: "Custom CMS solutions for easy content updates and management.",
      features: ["User-friendly admin interface", "Content scheduling", "Media library", "User role management"],
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Web Development Services</h1>
        <p className="text-lg text-muted-foreground">
          We create modern, responsive websites and web applications that help businesses establish a strong online
          presence and achieve their digital goals.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Web Development Services</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Recent Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <a href="#">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Development Process</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Discovery</h3>
            <p className="text-muted-foreground">
              We begin by understanding your business, goals, target audience, and project requirements.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Planning</h3>
            <p className="text-muted-foreground">
              We create a detailed project plan, including sitemap, wireframes, and technical specifications.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Development</h3>
            <p className="text-muted-foreground">
              Our team builds your website or application according to the approved designs and specifications.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Launch & Support</h3>
            <p className="text-muted-foreground">
              After thorough testing, we deploy your project and provide ongoing maintenance and support.
            </p>
          </div>
        </div>
      </section>

      <div className="rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Start Your Web Project?</h2>
          <p className="mb-6 opacity-90">
            Contact us today to discuss your web development needs and get a free consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="btn-animated">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
