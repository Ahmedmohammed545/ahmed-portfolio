import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeaturedProjectsCarousel } from "@/components/featured-projects-carousel"
import { projects, honors } from "@/lib/portfolioData"
import { siteMetadata, CONTACT_EMAIL } from "@/lib/siteConfig"

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const displayHonors = honors.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{siteMetadata.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{siteMetadata.tagline}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{siteMetadata.shortBio}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg">View Projects</Button>
                </Link>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Button size="lg" variant="outline">
                    Email Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/portrait.jpg"
                  alt={siteMetadata.name}
                  fill
                  className="object-cover rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <FeaturedProjectsCarousel projects={featuredProjects} />
        </div>
      </section>

      {/* Honors Preview Section */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Honors & Recognition</h2>
            <Link href="/about#honors">
              <Button variant="outline">See All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayHonors.map((honor) => (
              <Card key={honor.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {honor.level}
                  </Badge>
                  <h3 className="font-semibold mb-2">{honor.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{honor.description}</p>
                  <p className="text-xs text-muted-foreground">{honor.yearOrGrade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
