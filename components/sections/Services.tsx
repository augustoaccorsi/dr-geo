'use client'
import { useTranslation } from 'react-i18next'
import { TbLeaf, TbHammer, TbMap, TbPick } from 'react-icons/tb'

const categories = [
  { Icon: TbLeaf,   titleKey: 'cat1_title', descKey: 'cat1_desc', items: ['cat1_s1','cat1_s2','cat1_s3','cat1_s4','cat1_s5'] },
  { Icon: TbHammer, titleKey: 'cat2_title', descKey: 'cat2_desc', items: ['cat2_s1','cat2_s2','cat2_s3','cat2_s4','cat2_s5'] },
  { Icon: TbMap,    titleKey: 'cat3_title', descKey: 'cat3_desc', items: ['cat3_s1','cat3_s2','cat3_s3','cat3_s4'] },
  { Icon: TbPick,   titleKey: 'cat4_title', descKey: 'cat4_desc', items: ['cat4_s1','cat4_s2','cat4_s3'] },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-amber-600 mb-5">
            {t('services.hero.tagline')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-neutral-900 leading-[1.1] mb-4">
            {t('services.offerings.title')}
          </h2>
          <p className="text-sm text-neutral-500 tracking-tight max-w-xl">
            {t('services.offerings.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {categories.map(({ Icon, titleKey, descKey, items }) => (
            <div key={titleKey} className="bg-[#F5F5F5] rounded-2xl p-7">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 border border-neutral-200">
                <Icon size={19} className="text-neutral-600" />
              </div>
              <h3 className="text-sm font-medium tracking-tight text-neutral-900 mb-2">
                {t(`services.offerings.${titleKey}`)}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed tracking-tight mb-6">
                {t(`services.offerings.${descKey}`)}
              </p>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600 tracking-tight">
                    <span className="text-neutral-300 mt-0.5 shrink-0 select-none">—</span>
                    {t(`services.offerings.${item}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
