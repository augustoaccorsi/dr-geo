'use client'

const items = [
  'Mapeamento Geológico',
  'GIS',
  'QGIS',
  'ArcGIS',
  'AutoCAD',
  'Licenciamento Ambiental',
  'Geotecnia',
  'Hidrogeologia',
  'Levantamentos de Campo',
  'CREA',
  'Normas ABNT',
  'Análise de Riscos',
  'Exploração Mineral',
  'Análise de Solo',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <section className="bg-white dark:bg-[#1C1814] border-b border-neutral-100 dark:border-white/5 overflow-hidden py-4">
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 text-sm font-medium text-neutral-400 dark:text-neutral-500 tracking-tight whitespace-nowrap"
          >
            {item}
            <span className="text-neutral-200 dark:text-white/10 select-none">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
