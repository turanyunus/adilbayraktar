import { Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Adil Bayraktar. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@adilbayraktar.com"
              className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

