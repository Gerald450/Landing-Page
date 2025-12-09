# Gerald Shimo Landing Page

A modern, interactive landing page built with Next.js 14, React, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 🎨 Modern design with Tailwind CSS
- ✨ Interactive animations with Framer Motion
- 📱 Fully responsive design
- 📧 EmailJS integration for contact form
- 📊 Google Analytics integration
- 🎯 Smooth scrolling navigation
- 🌟 Modern UI/UX with hover effects and transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your assets:
   - Copy images from the `images/` directory to `public/images/`
   - Copy the resume PDF from `assets/Shimo_resume3_FALL25.pdf` to `public/assets/Shimo_resume3_FALL25.pdf`
   - Copy `ESLI Certificate.pdf` to `public/ESLI Certificate.pdf` if needed
   
   You can run:
   ```bash
   mkdir -p public/assets
   cp images/* public/images/
   cp assets/Shimo_resume3_FALL25.pdf public/assets/
   cp "ESLI Certificate.pdf" public/ 2>/dev/null || true
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles with Tailwind
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Intro.tsx       # Hero/intro section
│   ├── Portfolio.tsx   # Portfolio showcase
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact form
│   ├── SocialLinks.tsx # Social media links
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/         # Image assets
└── assets/             # Other assets (resume, etc.)
```

## Configuration

### EmailJS

The contact form uses EmailJS. The configuration is already set up in `components/Contact.tsx`:
- Service ID: `service_ic22dvo`
- Template ID: `template_g2o36ap`
- Public Key: `zEUGLcSxQ2BJS6iai`

### Google Analytics

Google Analytics is configured in `app/layout.tsx`:
- Tracking ID: `G-EZF49W5GDV`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service
- **Font Awesome** - Icons

## License

© 2024 Gerald Shimo
