# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains:
1. `hasanarnavutoglu-cv.pdf` - The original PDF resume
2. `readme.md` - Simple description ("My personal resume & portfolio.")
3. `cloud-resume-challenge/` - A complete personal resume website implementation for the Cloud Resume Challenge

## Commands

### Development & Testing

Since this is a static website, there's no build process required:

```bash
# Open the website locally
open cloud-resume-challenge/index.html  # macOS
start cloud-resume-challenge\index.html  # Windows
xdg-open cloud-resume-challenge/index.html  # Linux

# Or simply open the file in any modern web browser
```

### File Structure

```
cloud-resume-challenge/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles including glass effects, animations, responsiveness
├── js/
│   ├── particles.js    # Particle background effect
│   ├── typed.js        # Typing animation for hero section
│   └── scripts.js      # Main JavaScript functionality
├── assets/
│   ├── images/         # For future images
│   └── fonts/          # For future custom fonts
└── README.md           # Project documentation
```

## Development Guidelines

### Code Organization
- HTML uses semantic elements (header, main, section, footer, article)
- CSS uses CSS variables for easy theming
- JavaScript is vanilla ES6+ with no dependencies
- Animations are CSS-based where possible for performance
- JavaScript handles interactions and DOM manipulations

### Responsive Design Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px  
- Mobile: < 768px

### Key Features Implemented
1. **Liquid Glass Effect**: CSS glassmorphism with backdrop-filter, blur, and transparency
2. **Interactive Animations**: Hover effects, scroll animations, typing effect
3. **Responsive Layout**: Mobile-first approach with flexible grids
4. **Performance**: Hardware-accelerated animations, efficient CSS selectors
5. **Accessibility**: Semantic HTML, proper contrast, keyboard navigation
6. **Modern UI**: Clean, professional design with subtle animations

### Making Updates

To update the resume content:
1. Edit `index.html` to update text content in each section
2. Modify skills percentages in the `.skill-progress` elements
3. Update project descriptions, certificates, and experience entries
4. Add/remove sections as needed in the HTML structure

To customize appearance:
1. Edit CSS variables in `:root` section of `css/styles.css`
2. Adjust colors, spacing, radii, and effects as needed
3. Modify animations in the CSS file

### Best Practices Followed
- Mobile-first responsive design
- Semantic HTML5 elements
- CSS custom properties for theming
- Hardware-accelerated animations (transform, opacity)
- Efficient event delegation
- Accessible color contrasts
- Proper focus states for keyboard navigation
- Optimized file sizes (no external dependencies beyond Font Awesome)

### Testing
To test the website:
1. Open in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test responsive behavior at different screen sizes
3. Check keyboard navigation (Tab navigation should work)
4. Verify all links work correctly
5. Test on mobile devices if possible

### Deployment
This site is ready for static hosting (GitHub Pages, Netlify, Vercel, AWS S3+CloudFront, etc.):
- No build step required
- All assets are static files
- No server-side dependencies
- Just upload the entire `cloud-resume-challenge` directory

## Cloud Resume Challenge Notes

This implementation fulfills the Cloud Resume Challenge requirements:
- Static website hosted on a cloud provider (ready for AWS S3/CloudFront)
- Modern UI/UX with glassmorphism design
- Responsive design for all device types
- Interactive elements and animations
- Optimized performance
- Accessibility considerations
- Proper SEO structure