import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechCircuit - PCB Design & Web Development",
  description: "Professional PCB design and custom web development services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <footer className="border-t bg-background">
                <div className="container py-8 md:py-12">
                  <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Company</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                            Careers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="/services/pcb-design"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            PCB Design
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services/web-development"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services/software-mobile"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Software & Mobile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services/iot"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            IoT
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Support</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">Connect</h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="https://twitter.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            GitHub
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 border-t pt-8">
                    <p className="text-center text-muted-foreground">
                      © {new Date().getFullYear()} TechCircuit. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'