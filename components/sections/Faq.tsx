'use client'
import { useTranslation } from 'react-i18next'

const faqs = [
  { qKey: 'faq1_q', aKey: 'faq1_a' },
  { qKey: 'faq2_q', aKey: 'faq2_a' },
  { qKey: 'faq3_q', aKey: 'faq3_a' },
  { qKey: 'faq4_q', aKey: 'faq4_a' },
  { qKey: 'faq5_q', aKey: 'faq5_a' },
  { qKey: 'faq6_q', aKey: 'faq6_a' },
]

export default function Faq() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-neutral-900 leading-[1.1] mb-3">
            {t('contact.faq.title')}
          </h2>
          <p className="text-sm text-neutral-500 tracking-tight">
            {t('contact.faq.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map(({ qKey, aKey }) => (
            <div key={qKey} className="bg-[#F5F5F5] rounded-2xl p-7">
              <p className="text-sm font-medium tracking-tight text-neutral-900 mb-3">
                {t(`contact.faq.${qKey}`)}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed tracking-tight">
                {t(`contact.faq.${aKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
