"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { certificates } from "@/lib/portfolioData"

type CertFilterType = "All" | "CS" | "Hackathon" | "Service" | "Leadership" | "Research"

export default function CertificatesPage() {
  const [filter, setFilter] = useState<CertFilterType>("All")

  // Map certificate IDs to filter categories
  const getCertificateCategory = (certId: string): CertFilterType[] => {
    const categoryMap: Record<string, CertFilterType[]> = {
      addiscoder: ["CS"],
      "alx-hackathon": ["Hackathon"],
      "nasa-space-apps": ["Hackathon", "Research"],
      "asteroid-hunting": ["Research"],
      "quran-memorization": ["Leadership"],
    }
    return categoryMap[certId] || []
  }

  // Filter certificates
  const filteredCertificates =
    filter === "All" ? certificates : certificates.filter((cert) => getCertificateCategory(cert.id).includes(filter))

  const filterOptions: CertFilterType[] = ["All", "CS", "Hackathon", "Service", "Leadership", "Research"]

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Certificates</h1>
          <p className="text-lg text-muted-foreground">
            Recognition and proof of my achievements across various domains
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <p className="text-sm font-medium mb-3">Filter by category:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredCertificates.length} {filteredCertificates.length === 1 ? "certificate" : "certificates"}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48 bg-muted">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{cert.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Large Preview */}
                  <div className="relative h-64 md:h-96 bg-muted rounded-lg overflow-hidden">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain" />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Issued by</p>
                        <p className="font-semibold">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-semibold">{cert.year}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Description</p>
                      <p className="text-sm leading-relaxed">{cert.description}</p>
                    </div>

                    {/* Related Projects */}
                    {cert.relatedProjectSlugs.length > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-3">Related Projects</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.relatedProjectSlugs.map((slug) => (
                            <Link key={slug} href={`/projects/${slug}`}>
                              <Button variant="outline" size="sm">
                                View Project →
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No certificates found for this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
