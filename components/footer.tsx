import Link from "next/link"
import { CONTACT_EMAIL } from "@/lib/siteConfig"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Ahmed Mohammed</h3>
            <p className="text-sm text-muted-foreground">Building technology for positive impact</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Mohammed. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
