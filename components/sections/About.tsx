'use client'
import { useTranslation } from 'react-i18next'
import { TbMapPin, TbBrain, TbWorld } from 'react-icons/tb'

const cards = [
  { Icon: TbMapPin, titleKey: 'card1_title', descKey: 'card1_desc' },
  { Icon: TbBrain,  titleKey: 'card2_title', descKey: 'card2_desc' },
  { Icon: TbWorld,  titleKey: 'card3_title', descKey: 'card3_desc' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#F5F5F5] dark:bg-[#161210] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-amber-600 mb-5">
            {t('header.company')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-neutral-900 dark:text-white leading-[1.1] mb-5">
            {t('home.highlights.subtitle')}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed tracking-tight">
            {t('company.hero.description')}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {cards.map(({ Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="bg-white dark:bg-[#231F1A] rounded-2xl p-7 border border-neutral-100 dark:border-white/10 hover:border-neutral-200 dark:hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 bg-neutral-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Icon size={19} className="text-neutral-600 dark:text-neutral-400" />
              </div>
              <h3 className="text-sm font-medium tracking-tight text-neutral-900 dark:text-white mb-2">
                {t(`home.highlights.${titleKey}`)}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed tracking-tight">
                {t(`home.highlights.${descKey}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Mission / bio strip */}
        <div className="grid lg:grid-cols-2 gap-12 border-t border-neutral-200 dark:border-white/10 pt-16">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-amber-600 mb-4">
              {t('company.mission.label')}
            </p>
            <p className="text-2xl font-medium tracking-[-0.02em] text-neutral-900 dark:text-white leading-snug">
              {t('company.mission.title')}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed tracking-tight">
              {t('company.mission.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
