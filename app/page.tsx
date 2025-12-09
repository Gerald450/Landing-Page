'use client'

import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Portfolio from '@/components/Portfolio'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Intro />
      <Portfolio />
      <Projects />
      <Contact />
      <SocialLinks />
      <Footer />
    </main>
  )
}

