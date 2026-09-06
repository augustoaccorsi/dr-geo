'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#EDE4D8] dark:bg-[#0C0C0C] py-12 border-t border-neutral-300/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="#hero">
            <img
              src={mounted && theme === 'dark' ? '/logos/horizontal-dark.png' : '/logos/horizontal-light.png'}
              alt="Dr. Geo"
              className="h-28"
            />
          </a>

          <nav className="flex flex-wrap gap-7">
            {[
              { label: t('header.company'),  href: '#about' },
              { label: t('header.services'), href: '#services' },
              { label: t('header.contact'),  href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors tracking-tight"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-neutral-500 dark:text-neutral-600 tracking-tight">
            © {year} Dr. Geo · Daiana Rodrigues
          </p>
        </div>
      </div>
    </footer>
  )
}
