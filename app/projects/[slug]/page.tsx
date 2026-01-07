"use client"

import { notFound, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { projects, certificates } from "@/lib/portfolioData"

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const relatedCertificates = certificates.filter((cert) => project.relatedCertificateIds.includes(cert.id))

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Cover Image */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image src={project.coverImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          {project.awardBadge && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-base px-4 py-2">
              {project.awardBadge}
            </Badge>
          )}
        </div>

        {/* Title and Tags */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>
              <strong>Year/Grade:</strong> {project.yearOrGrade}
            </span>
            <span>
              <strong>Role:</strong> {project.role}
            </span>
            <span>
              <strong>Type:</strong> {project.type}
            </span>
          </div>
        </div>

        {/* One Line Hook */}
        <div className="mb-8 p-6 bg-accent/10 border-l-4 border-accent rounded">
          <p className="text-lg font-medium text-accent-foreground">{project.oneLineHook}</p>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
        </section>

        {/* My Role */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">{project.role}</p>
        </section>

        {/* Problem */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The Problem / Why It Mattered</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </section>

        {/* Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <ul className="space-y-3">
            {project.processSteps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
          <ul className="space-y-3">
            {project.impactBullets.map((impact, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-accent text-xl">•</span>
                <span className="text-muted-foreground leading-relaxed">{impact}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {project.galleryImages.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative w-full h-[70vh]">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        )}

        {/* Certificates & Proof */}
        {relatedCertificates.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Certificates & Proof</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedCertificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative h-32 mb-3 rounded overflow-hidden bg-muted">
                      <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                    </div>
                    <h3 className="font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* What I Learned */}
        {project.whatILearned && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <p className="text-muted-foreground leading-relaxed">{project.whatILearned}</p>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`}>
                <Button variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`}>
                <Button variant="outline">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
