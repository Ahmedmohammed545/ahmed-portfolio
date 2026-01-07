"use client"

import { useState } from "react"
import { Copy, Check, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CONTACT_EMAIL } from "@/lib/siteConfig"
import { projects } from "@/lib/portfolioData"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenEmail = () => {
    const subject = `Portfolio Inquiry — ${formData.name || "Visitor"}`
    const body = `Hello Ahmed,

My name is ${formData.name || "[Your Name]"}.
My email: ${formData.email || "[Your Email]"}
Project I am asking about: ${formData.project || "General Inquiry"}

Message:
${formData.message || "[Your message here]"}

Thank you,
${formData.name || "[Your Name]"}`

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a question about my projects, want to collaborate, or just want
            to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Email Display Card */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                    <p className="text-lg font-semibold">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <Button onClick={handleCopy} variant="outline">
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below to compose your message. When you click "Open Email Draft", your default email
                client will open with the message pre-filled.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project (Optional)</Label>
                  <Select
                    value={formData.project}
                    onValueChange={(value) => setFormData({ ...formData, project: value })}
                  >
                    <SelectTrigger id="project">
                      <SelectValue placeholder="Select a project to ask about" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      {projects.map((project) => (
                        <SelectItem key={project.slug} value={project.title}>
                          {project.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={handleOpenEmail}>
                    <Mail className="mr-2 h-4 w-4" />
                    Open Email Draft
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Email
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            I typically respond within 24-48 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  )
}
