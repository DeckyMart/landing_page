import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { ValueProposition } from '@/components/landing/ValueProposition'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ProductDemo } from '@/components/landing/ProductDemo'
import { ServiceCategories } from '@/components/landing/ServiceCategories'
import { AudienceSplit } from '@/components/landing/AudienceSplit'
import { Team } from '@/components/landing/Team'
import { BiggerVision } from '@/components/landing/BiggerVision'
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
        <ValueProposition />
        <HowItWorks />
        <ProductDemo />
        <ServiceCategories />
        <AudienceSplit />
        <Team />
        <BiggerVision />
        <TrustSafety />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
