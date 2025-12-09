#!/bin/bash

# Setup script for Next.js landing page

echo "Setting up Next.js landing page..."

# Create necessary directories
mkdir -p public/images
mkdir -p public/assets

# Copy images
if [ -d "images" ]; then
  echo "Copying images..."
  cp -r images/* public/images/ 2>/dev/null || true
fi

# Copy resume
if [ -f "assets/Shimo_resume3_FALL25.pdf" ]; then
  echo "Copying resume..."
  cp assets/Shimo_resume3_FALL25.pdf public/assets/
fi

# Copy ESLI Certificate
if [ -f "ESLI Certificate.pdf" ]; then
  echo "Copying ESLI Certificate..."
  cp "ESLI Certificate.pdf" public/
fi

echo "Setup complete!"
echo "Run 'npm install' to install dependencies"
echo "Then run 'npm run dev' to start the development server"

