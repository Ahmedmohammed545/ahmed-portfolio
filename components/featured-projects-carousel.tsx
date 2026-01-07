"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/portfolioData"

interface FeaturedProjectsCarouselProps {
  projects: Project[]
}

export function FeaturedProjectsCarousel({ projects }: FeaturedProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <Link href={`/projects/${currentProject.slug}`}>
          <div className="relative h-64 md:h-80 bg-muted">
            <Image
              src={currentProject.coverImage || "/placeholder.svg"}
              alt={currentProject.title}
              fill
              className="object-cover"
            />
            {currentProject.awardBadge && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                {currentProject.awardBadge}
              </Badge>
            )}
          </div>
        </Link>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {currentProject.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/projects/${currentProject.slug}`}>
            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{currentProject.title}</h3>
          </Link>
          <p className="text-muted-foreground mb-4">{currentProject.oneLineHook}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{currentProject.yearOrGrade}</span>
            <Link href={`/projects/${currentProject.slug}`}>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {projects.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
            onClick={prevProject}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
            onClick={nextProject}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
