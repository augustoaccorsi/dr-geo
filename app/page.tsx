import Hero     from '@/components/sections/Hero'
import Stats    from '@/components/sections/Stats'
import Marquee  from '@/components/sections/Marquee'
import About    from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Process  from '@/components/sections/Process'
import Contact  from '@/components/sections/Contact'
import Faq      from '@/components/sections/Faq'
import Footer   from '@/components/sections/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Contact />
      <Faq />
      <Footer />
    </main>
  )
}
