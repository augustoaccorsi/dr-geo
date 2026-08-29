'use client'
import { useTranslation } from 'react-i18next'

const stats = [
  { value: '10+', key: 'projects' },
  { value: '10+', key: 'clients' },
  { value: '6',   key: 'years' },
  { value: '100%', key: 'uptime' },
]

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map(({ value, key }) => (
            <div key={key}>
              <p className="text-4xl lg:text-5xl font-medium tracking-[-0.04em] text-neutral-900 mb-1.5">
                {value}
              </p>
              <p className="text-sm text-neutral-500 tracking-tight">
                {t(`home.stats.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
