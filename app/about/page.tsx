import Link from "next/link"
import { Zap, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { honors } from "@/lib/portfolioData"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">My story, values, and recognition</p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">My Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a high school student from Addis Ababa, Ethiopia, passionate about using technology to solve real
              problems and create positive impact in my community. My journey in computer science began with curiosity
              about how software works, and has evolved into a commitment to building systems that help others.
            </p>
            <p>
              Through projects like Nexus, I've learned that the most meaningful technology doesn't just work well
              technically—it addresses genuine human needs and makes people's lives better. Whether I'm mentoring other
              students in programming, competing in hackathons, or contributing to community service initiatives, I
              approach each opportunity as a chance to learn, grow, and make a difference.
            </p>
            <p>
              Beyond coding, I'm committed to developing as a well-rounded leader. From Model UN to religious studies to
              robotics, I seek diverse experiences that challenge me to think differently, communicate effectively, and
              understand multiple perspectives. I believe the intersection of technical skills and human understanding
              is where the most impactful work happens.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I bring enthusiasm and commitment to everything I do. Whether it's a 24-hour hackathon or a multi-year
                  mentorship program, I invest fully and inspire others to do the same.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Humanity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology should serve people. I build solutions that address real human needs, from connecting
                  volunteers with opportunities to democratizing computer science education.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I lead by example and empower others. From co-founding Prime AdCoder to managing STEM club projects, I
                  focus on building systems that outlast individual efforts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Honors & Recognition Section */}
        <section id="honors" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Honors & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honors.map((honor) => (
              <Card key={honor.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{honor.level}</Badge>
                    <span className="text-sm text-muted-foreground">{honor.yearOrGrade}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{honor.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{honor.description}</p>
                  {honor.relatedProjectSlug && (
                    <Link href={`/projects/${honor.relatedProjectSlug}`}>
                      <Button variant="ghost" size="sm" className="px-0">
                        View Related Project →
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 p-8 bg-accent/10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new projects, opportunities, or simply connecting with others who share
            a passion for technology and positive impact.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
