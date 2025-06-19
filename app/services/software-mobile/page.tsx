import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Smartphone, Laptop, Server, Cloud } from "lucide-react"

export default function SoftwareMobilePage() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions (React Native, Flutter)",
        "UI/UX design for mobile",
        "App Store and Google Play deployment",
      ],
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions to address your specific business needs.",
      icon: <Laptop className="h-8 w-8" />,
      features: ["Desktop applications", "Enterprise software", "Workflow automation", "Legacy system modernization"],
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs to connect your systems and enable seamless data flow.",
      icon: <Server className="h-8 w-8" />,
      features: [
        "RESTful API development",
        "GraphQL APIs",
        "Third-party API integration",
        "API documentation and testing",
      ],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud-based applications and infrastructure.",
      icon: <Cloud className="h-8 w-8" />,
      features: ["Cloud migration", "Serverless architecture", "Microservices", "DevOps and CI/CD pipelines"],
    },
  ]

  const technologies = [
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Swift", category: "Mobile" },
    { name: "Kotlin", category: "Mobile" },
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: ".NET", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Software & Mobile App Development</h1>
        <p className="text-lg text-muted-foreground">
          We create custom software solutions and mobile applications that help businesses streamline operations,
          improve customer experiences, and drive growth.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Software & Mobile Services</h2>
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
        <h2 className="mb-6 text-2xl font-semibold">Our Development Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div className="ml-auto w-1/2 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Requirements Analysis</h3>
                <p className="text-muted-foreground">
                  We work closely with you to understand your business needs, user requirements, and project goals to
                  define a clear scope and roadmap.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div className="mr-auto w-1/2 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  Our designers create intuitive user interfaces and experiences, followed by interactive prototypes for
                  early feedback and validation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div className="ml-auto w-1/2 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Development</h3>
                <p className="text-muted-foreground">
                  Our development team builds your software or mobile app using agile methodologies, with regular
                  sprints and demos to ensure alignment with your vision.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div className="mr-auto w-1/2 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Testing & QA</h3>
                <p className="text-muted-foreground">
                  Comprehensive testing ensures your application is bug-free, secure, and performs optimally across all
                  target platforms and devices.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                5
              </div>
              <div className="ml-auto w-1/2 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  We handle the deployment process and provide ongoing maintenance, support, and updates to ensure your
                  application continues to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Technologies We Use</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
              <span className="mb-1 text-xs font-medium text-muted-foreground">{tech.category}</span>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-semibold">Ready to Build Your Software or Mobile App?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <Button asChild size="lg" className="btn-animated">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
