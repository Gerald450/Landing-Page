'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Twitter',
    icon: 'fa-brands fa-twitter',
    href: 'https://x.com/GeraldShimo',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: 'fa-brands fa-instagram',
    href: 'https://www.instagram.com/gerald_.s/',
    color: 'hover:text-pink-500',
  },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/Gerald450',
    color: 'hover:text-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/gerald-shimo/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: 'fa-solid fa-envelope',
    href: 'mailto:shimogerald450@gmail.com',
    color: 'hover:text-red-500',
  },
]

export default function SocialLinks() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Connect with me
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`text-4xl md:text-5xl text-gray-600 transition-colors duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <i className={link.icon} />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

