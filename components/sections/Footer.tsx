'use client'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0C0C0C] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="#hero">
            <img src="/logos/horizontal-dark.png" alt="Dr. Geo" className="h-28" />
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
                className="text-sm text-neutral-500 hover:text-white transition-colors tracking-tight"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-neutral-600 tracking-tight">
            © {year} Dr. Geo · Daiana Rodrigues
          </p>
        </div>
      </div>
    </footer>
  )
}
