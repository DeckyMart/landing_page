import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ServiceCategories } from '@/components/landing/ServiceCategories'
import { AudienceSplit } from '@/components/landing/AudienceSplit'
import { TrustSafety } from '@/components/landing/TrustSafety'
import { Faq } from '@/components/landing/Faq'
import { CtaBanner } from '@/components/landing/CtaBanner'
import { Footer } from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ServiceCategories />
        <AudienceSplit />
        <TrustSafety />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
