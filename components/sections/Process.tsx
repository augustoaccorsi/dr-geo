'use client'
import { useTranslation } from 'react-i18next'

const steps = [
  { num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
  { num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
  { num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
]

export default function Process() {
  const { t } = useTranslation()

  return (
    <section id="process" className="bg-[#EDE4D8] dark:bg-[#1C1814] hero-pattern py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-neutral-900 dark:text-white leading-[1.1] mb-4">
            {t('home.how.title')}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight leading-relaxed">
            {t('home.how.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ num, titleKey, descKey }) => (
            <div
              key={num}
              className="border border-neutral-900/10 dark:border-white/10 rounded-2xl p-7 hover:border-neutral-900/20 dark:hover:border-white/20 transition-colors"
            >
              <p className="text-5xl font-medium tracking-[-0.04em] text-neutral-900/15 dark:text-white/15 mb-8 select-none">
                {num}
              </p>
              <h3 className="text-sm font-medium tracking-tight text-neutral-900 dark:text-white mb-3">
                {t(`home.how.${titleKey}`)}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed tracking-tight">
                {t(`home.how.${descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
