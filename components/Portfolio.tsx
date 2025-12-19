'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    title: 'Visionary',
    image: '/images/me_in_a_suit.jpeg',
    link: 'https://www.linkedin.com/posts/gerald-shimo-949b3a239_earlycareers-unity-careerdevelopment-activity-7172639672379105280-K9KM?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Teamplayer',
    image: '/images/15C5E0F1-F52D-4BFA-94EE-217123579A1D_1_105_c.jpeg',
    link: '/ESLI Certificate.pdf',
  },
  {
    title: 'Confident',
    image: '/images/2F46C899-DA62-490F-94FF-FFBD852C9B40_1_102_o.jpeg',
    link: 'https://www.linkedin.com/posts/annaleeharris_were-having-a-fantastic-time-traveling-to-ugcPost-7181777364790521856-A9CT/?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Winner',
    image: '/images/528B7186-DDB0-479E-A534-5A73F375EB53_1_102_o.jpeg',
    link: 'https://uapb.edu/academics/carolyn-f-blakely-honors-program/',
  },
  {
    title: 'Enthusiast',
    image: '/images/65DB666F-2EB1-4AD6-BC8E-A19A7072F5E9_1_105_c.jpeg',
    link: 'https://www.linkedin.com/in/gerald-shimo-949b3a239/',
  },
  {
    title: 'Traveler',
    image: '/images/A1F271A5-F38C-492B-BB7C-BD18BAB12B43_1_105_c.jpeg',
    link: 'https://www.instagram.com/stories/highlights/17896477547875357/',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Some highlights of my work and achievements
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover bg-white will-change-transform"
            >
              <a
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block relative h-64 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-white text-2xl font-bold"
                  >
                    LEARN MORE
                  </motion.div>
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Portfolio)

