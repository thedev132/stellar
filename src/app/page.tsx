"use client"

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
// import Clients from '@/components/Clients'
import Script from 'next/script'
import Clients from '@/components/Clients'
import Features from '@/components/Features'
import Features2 from '@/components/Features2'
import Features3 from '@/components/Features3'
import Testimonials from '@/components/Testimonials'
import Features4 from '@/components/Features4'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="font-inter tracking-tighter text-lightwhite bg-[#0f172a]">
      <Script src="/js/main.js"/>
      <div className="flex flex-col overflow-hidden">
        <NavBar/>
        <main className='grow'>
          <Hero/>
          <Clients/>
          <Features/>
          <Features2/>
          <Features3/>
          <Testimonials/>
          <Features4/>
          <Pricing/>
          <CTA/>
        </main>
        <Footer/>
      </div>
    </main>
  )
}
