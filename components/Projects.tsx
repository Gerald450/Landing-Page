'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GoldenFinance',
    date: 'Nov 2025',
    description: 'AI-Powered Community Investment Platform',
    link: 'https://golden-finance-xi.vercel.app/',
  },
  {
    title: 'MyDiabetiCare',
    date: 'Jul 2025',
    description: 'AI-powered diabetes management app with glucose insights.',
    link: 'https://my-diabeti-care-next-js.vercel.app/',
  },
  {
    title: 'Study Group Matcher',
    date: 'Jun 2025',
    description: 'Fullstack tool connecting students by course & schedule.',
    link: 'https://study-group-matcher.vercel.app/signin',
  },
  {
    title: 'Flashcards Generator',
    date: 'Oct 2024',
    description: 'AI study tool reducing prep time by 80%.',
    link: 'https://ai-flash-cards-2-q7ekz4gn6-gerald450s-projects.vercel.app/',
  },
  {
    title: 'Telehealth Platform',
    date: 'Jul 2024',
    description: 'Appointment scheduler + first-aid chatbot MVP.',
    link: 'https://tele-health-seven.vercel.app',
  },
  {
    title: 'Inventory Management',
    date: 'Feb 2024',
    description: 'React + Firebase inventory tracker with real-time updates.',
    link: 'https://inventory-management-app-iota.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600">
            Highlights of my work in AI, web, and fullstack development.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg card-hover border border-gray-200 will-change-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                  {project.date}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block text-sm"
              >
                Try it
                <i className="fas fa-arrow-right ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Projects)

