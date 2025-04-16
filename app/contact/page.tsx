"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "pcb-design",
    contactPreference: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "pcb-design",
        contactPreference: "email",
      })
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have a question or want to discuss a project? Get in touch with our team and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {isSubmitted ? (
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-semibold text-primary">Thank You!</h2>
              <p className="mb-6 text-muted-foreground">
                Your message has been received. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-8 shadow-sm">
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleSelectChange("serviceType", value)}
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pcb-design">PCB Design</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="software-mobile">Software & Mobile Apps</SelectItem>
                      <SelectItem value="iot">IoT Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.contactPreference}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-preference" />
                      <Label htmlFor="email-preference">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-preference" />
                      <Label htmlFor="phone-preference">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Email</h3>
            <a href="mailto:info@techcircuit.com" className="text-muted-foreground hover:text-foreground">
              info@techcircuit.com
            </a>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Phone</h3>
            <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
              +1 (234) 567-890
            </a>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Address</h3>
            <address className="not-italic text-muted-foreground">
              123 Tech Street
              <br />
              Suite 456
              <br />
              San Francisco, CA 94107
              <br />
              United States
            </address>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Our Location</h2>
        <div className="aspect-video overflow-hidden rounded-lg border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968478573726!2d-122.4026!3d37.7909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzI3LjIiTiAxMjLCsDI0JzA5LjQiVw!5e0!3m2!1sen!2sus!4v1620841112345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
