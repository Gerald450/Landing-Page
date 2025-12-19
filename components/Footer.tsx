'use client'

import { memo } from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom text-center">
        <p className="text-gray-400">
          @2024 Gerald Shimo | v3.1.0
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)

