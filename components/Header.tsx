'use client'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const navItems = [
  { labelKey: 'header.company',  href: '#about' },
  { labelKey: 'header.services', href: '#services' },
  { labelKey: 'header.contact',  href: '#contact' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm text-neutral-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <img
            src={scrolled ? '/logos/horixontal-light.png.png' : '/logos/horixontal-dark.png'}
            alt="Dr. Geo"
            className="h-28"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ labelKey, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity"
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="hidden lg:block text-sm font-medium tracking-tight hover:opacity-60 transition-opacity"
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? t('header.close_menu') : t('header.open_menu')}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-neutral-900 border-t border-neutral-100">
          <div className="px-6 py-5 flex flex-col gap-5">
            {navItems.map(({ labelKey, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-tight hover:opacity-60"
              >
                {t(labelKey)}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="text-sm font-medium text-left text-neutral-500"
            >
              {i18n.language === 'pt' ? 'Switch to EN' : 'Mudar para PT'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
