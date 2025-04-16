import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircuitBoard, Globe, Smartphone, Cpu, Mail, Phone, MessageSquare } from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including PCB design, web development, software and mobile app development, and IoT solutions. Each service is tailored to meet the specific needs of our clients.",
    },
    {
      question: "How long does it take to complete a PCB design?",
      answer:
        "The timeline for PCB design varies depending on the complexity of the project. Simple designs can be completed in 1-2 weeks, while more complex designs may take 4-6 weeks or longer.",
    },
    {
      question: "Do you offer revisions for your designs?",
      answer:
        "Yes, we include a certain number of revision cycles in our project quotes. Additional revisions beyond the agreed-upon number may incur extra charges.",
    },
    {
      question: "Can you help with manufacturing my PCB design?",
      answer:
        "Yes, we can assist with the manufacturing process by connecting you with reliable PCB manufacturers or handling the manufacturing process on your behalf.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use modern web technologies including React, Next.js, Vue.js, and Angular for frontend development, and Node.js, Python, and .NET for backend development. We also use Tailwind CSS, SCSS, and other styling solutions.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, we offer ongoing maintenance and support services for websites and web applications we develop. We can also provide maintenance for existing websites not developed by us.",
    },
    {
      question: "What platforms do you develop mobile apps for?",
      answer:
        "We develop mobile applications for iOS and Android platforms. We can create native apps specific to each platform or cross-platform apps using technologies like React Native or Flutter.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "Our pricing is based on the scope, complexity, and timeline of the project. We provide detailed quotes after an initial consultation to understand your requirements.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance services after project completion. We offer various support packages to meet different needs and budgets.",
    },
    {
      question: "How can I request a quote for my project?",
      answer:
        "You can request a quote by filling out the contact form on our website, sending us an email, or calling our office. We'll schedule a consultation to discuss your project in detail.",
    },
  ]

  const supportCategories = [
    {
      title: "PCB Design Support",
      icon: <CircuitBoard className="h-8 w-8" />,
      description: "Get help with your PCB design projects and technical questions.",
    },
    {
      title: "Web Development Support",
      icon: <Globe className="h-8 w-8" />,
      description: "Support for website issues, updates, and maintenance.",
    },
    {
      title: "Software & Mobile Support",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Assistance with software applications and mobile apps.",
    },
    {
      title: "IoT Solutions Support",
      icon: <Cpu className="h-8 w-8" />,
      description: "Help with IoT devices, connectivity, and systems.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Support</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help you with any questions or issues you may have with our products and services. Browse our
          support resources or contact us directly for assistance.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Support Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportCategories.map((category, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 text-primary">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Support</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Support Resources</h2>
        <Tabs defaultValue="documentation">
          <TabsList className="mb-8 w-full justify-start overflow-auto">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="documentation" className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Product Documentation</h3>
            <p className="mb-4 text-muted-foreground">Comprehensive documentation for all our products and services.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">PCB Design Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Technical specifications, design guidelines, and best practices.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Web Development Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  API references, component libraries, and implementation guides.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Mobile App Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  SDK documentation, feature guides, and platform-specific information.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">IoT Solutions Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Device specifications, connectivity guides, and system architecture.
                </p>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="tutorials" className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Step-by-Step Tutorials</h3>
            <p className="mb-4 text-muted-foreground">
              Learn how to use our products and services with detailed tutorials.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Getting Started with PCB Design</h4>
                <p className="text-sm text-muted-foreground">
                  Learn the basics of PCB design and how to create your first board.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Building a Responsive Website</h4>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guide to creating a responsive website with our tools.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Creating Your First Mobile App</h4>
                <p className="text-sm text-muted-foreground">
                  Tutorial on developing a simple mobile application from scratch.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Setting Up an IoT System</h4>
                <p className="text-sm text-muted-foreground">
                  Guide to configuring and deploying an IoT system for your needs.
                </p>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="guides" className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Best Practice Guides</h3>
            <p className="mb-4 text-muted-foreground">
              Comprehensive guides on best practices for using our products and services.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">PCB Design Best Practices</h4>
                <p className="text-sm text-muted-foreground">
                  Guidelines for creating efficient, reliable PCB designs.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Web Performance Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Techniques for improving website performance and user experience.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Mobile App Security</h4>
                <p className="text-sm text-muted-foreground">Best practices for securing your mobile applications.</p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">IoT Data Management</h4>
                <p className="text-sm text-muted-foreground">
                  Strategies for efficiently managing and analyzing IoT data.
                </p>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="videos" className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Video Tutorials</h3>
            <p className="mb-4 text-muted-foreground">Watch video tutorials on how to use our products and services.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">PCB Design Video Series</h4>
                <p className="text-sm text-muted-foreground">Comprehensive video tutorials on PCB design techniques.</p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Web Development Screencasts</h4>
                <p className="text-sm text-muted-foreground">
                  Step-by-step videos on building websites and web applications.
                </p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">Mobile App Development Tutorials</h4>
                <p className="text-sm text-muted-foreground">Video guides for developing mobile applications.</p>
              </Link>
              <Link href="#" className="rounded-lg border p-4 transition-colors hover:bg-muted">
                <h4 className="mb-2 font-medium">IoT Implementation Videos</h4>
                <p className="text-sm text-muted-foreground">Visual guides for implementing IoT solutions.</p>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Contact Support</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 text-primary">
                <Mail className="h-8 w-8" />
              </div>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us an email with your questions or issues.</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@techcircuit.com" className="text-primary hover:underline">
                support@techcircuit.com
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 text-primary">
                <Phone className="h-8 w-8" />
              </div>
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Call us directly for immediate assistance.</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Available Monday-Friday, 9am-5pm EST</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 text-primary">
                <MessageSquare className="h-8 w-8" />
              </div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Chat</Button>
              <p className="mt-2 text-sm text-muted-foreground">Available 24/7 for premium support customers</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
