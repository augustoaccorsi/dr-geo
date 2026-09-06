'use client'
import { useTranslation } from 'react-i18next'
import { TbArrowRight } from 'react-icons/tb'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center hero-pattern bg-[#1C1814]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400 mb-7">
            {t('home.hero.tagline')}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white leading-[1.04] tracking-[-0.03em] mb-7 whitespace-pre-line">
            {t('home.hero.title')}
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-lg mb-10 tracking-tight">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors tracking-tight"
            >
              {t('home.hero.cta_primary')}
              <TbArrowRight size={15} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center border border-white/25 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/8 transition-colors tracking-tight"
            >
              {t('home.hero.cta_secondary')}
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
