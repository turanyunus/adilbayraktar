'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Social Media', href: '/social-media' },
  { label: 'Public Speaking', href: '/public-speaking' },
  { label: 'Human Rights', href: '/human-rights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const pathLabels: Record<string, string> = {
  '/social-media': 'Social Media',
  '/public-speaking': 'Public Speaking',
  '/human-rights': 'Human Rights',
}

export function Navbar() {
  const pathname = usePathname()
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('selectedPath')
    setSelectedPath(stored)
  }, [pathname])

  const currentPathLabel = pathLabels[pathname]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
            Adil Bayraktar
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-primary-600"></span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <Link
              href="/contact"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        {currentPathLabel && (
          <div className="pb-3">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100">
              Viewing: {currentPathLabel}
            </span>
          </div>
        )}
      </div>
    </nav>
  )
}

