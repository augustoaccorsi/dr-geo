'use client'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbSend, TbMail, TbMapPin, TbClock } from 'react-icons/tb'

const CONTACT_EMAIL = 'daiadaianardg@gmail.com'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = `${form.first_name} ${form.last_name}`.trim()
    const body = name
      ? `From: ${name} <${form.email}>\n\n${form.message}`
      : form.message
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const inputCls =
    'w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all'

  return (
    <section id="contact" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-400 mb-5">
            {t('contact.hero.tagline')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-neutral-900 leading-[1.1] whitespace-pre-line">
            {t('contact.hero.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8">
            <h3 className="text-base font-medium tracking-tight mb-1">
              {t('contact.form.title')}
            </h3>
            <p className="text-sm text-neutral-500 tracking-tight mb-8">
              {t('contact.form.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium tracking-wide text-neutral-500 mb-1.5">
                    {t('contact.form.first_name')}
                  </label>
                  <input name="first_name" value={form.first_name} onChange={handleChange} required className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wide text-neutral-500 mb-1.5">
                    {t('contact.form.last_name')}
                  </label>
                  <input name="last_name" value={form.last_name} onChange={handleChange} required className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-500 mb-1.5">
                  {t('contact.form.email')}
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputCls} />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-500 mb-1.5">
                  {t('contact.form.subject')}
                </label>
                <select name="subject" value={form.subject} onChange={handleChange} required className={inputCls}>
                  <option value="">{t('contact.form.subject_placeholder')}</option>
                  <option value={t('contact.form.subject_sales')}>{t('contact.form.subject_sales')}</option>
                  <option value={t('contact.form.subject_support')}>{t('contact.form.subject_support')}</option>
                  <option value={t('contact.form.subject_partnership')}>{t('contact.form.subject_partnership')}</option>
                  <option value={t('contact.form.subject_other')}>{t('contact.form.subject_other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide text-neutral-500 mb-1.5">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t('contact.form.message_placeholder')}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors tracking-tight"
                >
                  <TbSend size={15} />
                  {t('contact.form.submit')}
                </button>
                {submitted && (
                  <p className="text-sm text-emerald-600 tracking-tight">
                    {t('contact.form.success')}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-5">
                {t('contact.info.reach_title')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TbMail size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 tracking-tight mb-0.5">{t('contact.info.email_label')}</p>
                    <p className="text-sm font-medium tracking-tight break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TbClock size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 tracking-tight mb-0.5">{t('contact.info.hours_label')}</p>
                    <p className="text-sm font-medium tracking-tight">{t('contact.info.hours_value')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-5">
                {t('contact.info.offices_title')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TbMapPin size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 tracking-tight mb-0.5">{t('contact.info.hq_label')}</p>
                    <p className="text-sm font-medium tracking-tight">{t('contact.info.hq_value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TbMapPin size={16} className="text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-400 tracking-tight mb-0.5">{t('contact.info.eu_label')}</p>
                    <p className="text-sm font-medium tracking-tight">{t('contact.info.field_coverage')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
