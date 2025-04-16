import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CircuitBoard, Globe, Smartphone, Cpu, Award, Users, Zap, Clock } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex has over 15 years of experience in electronics engineering and PCB design.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Chen",
      role: "Lead PCB Designer",
      bio: "Sarah specializes in complex multi-layer PCB designs for various industries.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Rodriguez",
      role: "Web Development Director",
      bio: "Michael leads our web development team with expertise in modern frameworks.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Taylor",
      role: "Mobile App Developer",
      bio: "Emily creates innovative mobile applications for iOS and Android platforms.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "IoT Solutions Architect",
      bio: "David designs comprehensive IoT systems for various business applications.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Lisa Wong",
      role: "Project Manager",
      bio: "Lisa ensures all projects are delivered on time and exceed client expectations.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const values = [
    {
      title: "Quality",
      description: "We are committed to delivering the highest quality in everything we do.",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to solve complex problems.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Reliability",
      description: "We deliver on our promises and stand behind our work with confidence.",
      icon: <Clock className="h-8 w-8" />,
    },
  ]

  const services = [
    {
      title: "PCB Design",
      description: "Custom PCB designs for your electronic projects",
      icon: <CircuitBoard className="h-8 w-8" />,
      link: "/services/pcb-design",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      icon: <Globe className="h-8 w-8" />,
      link: "/services/web-development",
    },
    {
      title: "Software & Mobile Apps",
      description: "Custom software solutions and mobile applications",
      icon: <Smartphone className="h-8 w-8" />,
      link: "/services/software-mobile",
    },
    {
      title: "IoT Solutions",
      description: "Connect your devices to the internet of things",
      icon: <Cpu className="h-8 w-8" />,
      link: "/services/iot",
    },
  ]

  return (
    <div className="container py-12">
      <section className="mb-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold">About TechCircuit</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              TechCircuit is a leading provider of PCB design and web development services, dedicated to helping
              businesses bring their ideas to life through innovative technology solutions.
            </p>
            <p className="mb-6 text-muted-foreground">
              Founded in 2015, we've grown from a small team of passionate engineers to a full-service technology
              company with expertise in PCB design, web development, software and mobile app development, and IoT
              solutions.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our mission is to provide high-quality, innovative solutions that help our clients succeed in an
              increasingly digital world. We combine technical expertise with creative problem-solving to deliver
              results that exceed expectations.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=800&width=800" alt="TechCircuit Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 text-primary">{value.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-lg bg-muted p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Approach</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We believe in a collaborative approach to every project. By working closely with our clients, we ensure
              that we understand their needs and deliver solutions that meet their specific requirements.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Discover</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, and requirements.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Design</h3>
                <p className="text-muted-foreground">We create detailed designs and prototypes for your approval.</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Deliver</h3>
                <p className="text-muted-foreground">We implement the solution and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="mb-8 text-lg opacity-90">
              Contact us today to discuss your project and see how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
