"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeaturedProjectsCarousel } from "@/components/featured-projects-carousel"
import { projects, miniBuilds } from "@/lib/portfolioData"

type FilterType =
  | "All"
  | "Community Service"
  | "Computer Science"
  | "Internship"
  | "Debate"
  | "Robotics"
  | "Hackathon"
  | "Personal Development"
  | "Leadership"
  | "Research"
type SortType = "best" | "newest" | "oldest"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("All")
  const [sort, setSort] = useState<SortType>("best")

  const featuredProjects = projects.filter((p) => p.featured)

  // Filter projects
  let filteredProjects = projects
  if (filter !== "All") {
    filteredProjects = projects.filter((p) => p.tags.includes(filter))
  }

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === "best") {
      // Featured first, then by order in array
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    }
    if (sort === "newest") {
      // Sort by yearOrGrade descending (assuming higher grade = newer)
      return b.yearOrGrade.localeCompare(a.yearOrGrade)
    }
    if (sort === "oldest") {
      return a.yearOrGrade.localeCompare(b.yearOrGrade)
    }
    return 0
  })

  const filterOptions: FilterType[] = [
    "All",
    "Community Service",
    "Computer Science",
    "Internship",
    "Debate",
    "Robotics",
    "Hackathon",
    "Personal Development",
    "Leadership",
    "Research",
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of my work spanning community service, computer science, leadership, and personal development.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <FeaturedProjectsCarousel projects={featuredProjects} />
        </div>

        {/* Filters and Sort */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
            <div className="flex-1">
              <p className="text-sm font-medium mb-3">Filter by category:</p>
              <div className="flex flex-wrap gap-2">
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
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
                className="px-3 py-2 rounded-md border bg-background text-sm"
              >
                <option value="best">Best First</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {sortedProjects.length} {sortedProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sortedProjects.map((project) => (
            <Card key={project.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-48 bg-muted">
                  <Image
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.awardBadge && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {project.awardBadge}
                    </Badge>
                  )}
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{project.title}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.oneLineHook}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.yearOrGrade}</span>
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="ghost" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mini Builds Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Mini Builds & Additional Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {miniBuilds.map((build, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  {build.badge && (
                    <Badge variant="secondary" className="mb-3">
                      {build.badge}
                    </Badge>
                  )}
                  <h3 className="font-semibold mb-2 text-sm">{build.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{build.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {build.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
