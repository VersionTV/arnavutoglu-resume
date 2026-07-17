# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This repository contains:
1. `hasanarnavutoglu-cv.pdf` - The original PDF resume
2. `readme.md` - Simple description ("My personal resume & portfolio.")
3. `cloud-resume-challenge/` - A complete personal resume website implementation for the Cloud Resume Challenge

The website is a static, interactive resume/portfolio featuring a liquid glass (glassmorphism) design with smooth animations, responsive layout, cursor interaction effects, and scroll-triggered animations. It is ready for deployment on any static hosting platform (GitHub Pages, Netlify, Vercel, AWS S3+CloudFront, etc.).

## File Structure
```
cloud-resume-challenge/
├── index.html          # Main HTML file containing all resume sections
├── css/
│   └── styles.css      # All styles including glass effects, animations, responsiveness, CSS variables
├── js/
│   ├── particles.js    # Intentionally left blank - using CSS blob animation instead
│   ├── typed.js        # Typing animation for hero section
│   └── scripts.js      # Main JavaScript functionality (year init, skill animations, smooth scroll, nav highlights)
├── assets/
│   ├── images/         # Profile image (IMG_0580.png) and future images
│   └── fonts/          # For future custom fonts
└── README.md           # Project documentation (overview, features, tech stack, deployment)
```

## Common Development Commands
Since this is a static site, no build process or dependencies are required.

- **View locally**: Open `cloud-resume-challenge/index.html` in any modern web browser.
  - macOS: `open cloud-resume-challenge/index.html`
  - Windows: `start cloud-resume-challenge\index.html`
  - Linux: `xdg-open cloud-resume-challenge/index.html`
- **Refresh**: Save changes and reload the browser.
- **Deploy**: Upload the entire `cloud-resume-challenge` directory to any static hosting service.
  - GitHub Pages: Push to `gh-pages` branch or enable Pages on the `main` branch.
  - Netlify: Drag-and-drop the folder or connect GitHub repo.
  - Vercel: Import GitHub repository.
  - AWS S3 + CloudFront: Upload the directory and configure CloudFront distribution.
  - Firebase Hosting: Deploy with `firebase deploy`.

## Architecture & Design Principles
- **Liquid Glass/Glassmorphism**: Implemented via `rgba()` backgrounds, `backdrop-filter: blur()`, and subtle borders defined in `styles.css`.
- **CSS Variables**: Colors, spacing, and transition values are defined in the `:root` block for easy theming.
- **Animations**: CSS keyframe animations for background shifts (`gradientShift`), float effects, fade-in/up (`fadeInUp`), and typing effects.
- **Responsiveness**: Mobile-first approach with breakpoints at 768px (tablet) and 1200px (desktop).
- **Cursor Interaction**: Custom follower element that tracks mouse and amplifies on hover over interactive elements (implemented via CSS variables in `styles.css` and JavaScript in `scripts.js`).
- **Scroll Reveal**: Elements animate into view when they enter the viewport using Intersection Observer logic (implemented in `scripts.js`).
- **Background Animation**: Animated blob elements created purely with CSS (see `.blobs` and `.blob` classes in `styles.js`) for a liquid glass background effect.
- **Accessibility**: Semantic HTML5 elements, logical tab order, and ARIA-friendly structure.
- **Performance**: Hardware-accelerated properties (`transform`, `opacity`), minimal DOM manipulation, and optimized CSS selectors.

## How to Modify Content
All resume data is hardcoded in `index.html`. To update:

### 1. Profile Image
- Replace `assets/images/IMG_0580.png` with a new image (same filename) or update the `src` attribute in the `<img>` tag inside `.profile-image`.
- Recommended dimensions: 200x200px or square; ensure the file exists at that path.
- Note: The profile image is intentionally kept static (no hover/float animations) as per user request.

### 2. Text Sections
Edit the relevant HTML blocks in `index.html`:
- **About**: Update `.about-text` paragraph and the `.info-grid` items (birth date, marital status, etc.).
- **Experience**: Duplicate or modify `.experience-card` blocks (company, date, position, location, description).
- **Education**: Duplicate or modify `.education-card` blocks (institution, date, degree, GPA/score).
- **Skills**: 
  - Update skill names in `.skill-name` spans.
  - Adjust the width of `.skill-progress` divs (inline `style="width: X%"`) to reflect proficiency.
  - Add/remove `.skill-item` elements as needed.
- **Certificates**: Duplicate or modify `.certificate-card` blocks (title, date, issuer, link).
- **Projects**: Duplicate or modify `.project-card` blocks (title, date, description, tags, links).
  - Use `.project-tags` for tech stack tags.
  - Use `.project-links` for external links (GitHub, demo, etc.).
- **Contact**: 
  - Update email, phone, address in `.contact-info`.
  - Modify social links under `.social-links` (href and icon classes).
- **References**: Edit the content inside `.reference-item` paragraphs.

### 3. Styling Changes
Edit `css/styles.css`:
- **CSS Variables**: Located at the top of the file (`:root`). Adjust primary colors (`--primary-color`, `--secondary-color`, `--accent-color`, `--accent-secondary`), background gradients, text colors, glass background (`--glass-bg`), glass border (`--glass-border`), etc.
- **Glass Card Effects**: Modify `.glass-card` rules for `background`, `backdrop-filter`, `border`, `border-radius`, `box-shadow`, and hover states.
- **Animations**: Adjust `@keyframes` rules (`blobMove`, `float`, `fadeInUp`, `gradientShift`, `blink`, `shimmer`, `rotate`) for duration, timing, or effects.
- **Responsive Breakpoints**: Media queries at `1200px`, `992px`, `768px`, and `480px`; modify padding, font sizes, grid layouts as needed.
- **Typography**: Update font sizes, weights, and line heights in relevant selectors.
- **Blob Animation**: Modify the `.blobs` and `.blob` classes to adjust the background animation (size, position, speed, blur, opacity).

### 4. JavaScript Functionality
- **typed.js**: Edit the `textArray` to change the rotating text in the hero section (typing effect).
- **particles.js**: Intentionally left blank - we are using CSS blob animation for the background instead of particles.js.
- **scripts.js**: 
  - Initializes year in footer.
  - Animates skill bars on load.
  - Adds smooth scrolling to anchor links.
  - Highlights active nav link on scroll.
  - Implements scroll reveal animation for sections.

## Best Practices
- Keep the site static; avoid introducing build steps or frameworks unless absolutely necessary.
- Maintain responsive design: test changes at mobile (<768px), tablet (768px-1199px), and desktop (≥1200px) widths.
- Preserve accessibility: use semantic HTML, ensure sufficient color contrast (check with WebAIM Contrast Checker), and keep interactive elements keyboard-navigable.
- Optimize performance: favor CSS animations over JavaScript where possible, keep image sizes small (compress images), and minimize DOM manipulation.
- When adding new sections, follow the existing glass card pattern and include appropriate icons from Font Awesome (version 6.4.0 loaded via CDN).
- Update the `README.md` if significant changes are made to the project structure or features.
- Ensure any external links use `target="_blank"` and consider adding `rel="noopener noreferrer"` for security (currently missing; recommended addition).
- Keep CSS organized: group related comments, use sections for layout, components, utilities.

## Testing Guidance
- **Visual**: Open in Chrome, Firefox, Safari, and Edge to verify animations, layout, and glass effects.
- **Responsiveness**: Use browser dev tools to toggle device toolbar or manually resize the window; verify breakpoint behavior.
- **Performance**: Use Lighthouse in Chrome DevTools to audit performance, accessibility, best practices, and SEO.
- **Links**: Click all internal anchors (nav links) and external links to ensure they work correctly; verify that external links open in a new tab.
- **Console**: Check for JavaScript errors in the browser console; address any warnings (e.g., failed resource loads).
- **Accessibility**: Use axe or Lighthouse accessibility audit; ensure color contrast ratios meet WCAG AA for normal text.
- **Cursor Interaction**: Verify that the follower element appears and responds to hover over links, buttons, cards, etc.
- **Blob Animation**: Verify the background animation renders correctly and does not cause performance issues.

## Notes on Duplicated Logic
- Scroll reveal animation logic is now centralized in `scripts.js` (removed duplicate from `particles.js`).
- Year initialization is in `scripts.js` only (removed duplicate from `particles.js`).
- Consider extracting reusable utility functions (e.g., scroll reveal helper) into a separate file if the JavaScript grows further.

## Troubleshooting
- **Profile image not showing**: Verify the image exists at `assets/images/IMG_0580.png` and that the `src` attribute in `index.html` is correct. Check browser console for 404 errors.
- **Particle background not loading**: Since we removed particles.js dependency, this is no longer an issue. The background is now handled by CSS blob animation.
- **Animations not triggering**: Confirm that CSS classes like `visible` are being added on scroll (check dev tools). Ensure no JavaScript errors are preventing event listeners from running.
- **Links not working**: Check that `href` attributes are correct and that JavaScript event listeners are not preventing default behavior incorrectly.
- **Style changes not appearing**: Perform a hard refresh (Ctrl+F5 / Cmd+Shift+R) to bypass CSS cache.
- **Blob animation not visible**: Check the `.blobs` and `.blob` classes in `styles.css` for correct positioning, sizing, and z-index.

## Future Enhancements (Optional)
- Add dark/light mode toggle using CSS variables and a user preference stored in localStorage.
- Implement a functional contact form (with Formspree, EmailJS, or similar).
- Add actual project screenshots/images in the projects section (update HTML and CSS accordingly).
- Include a printer-friendly stylesheet (`@media print`).
- Add RSS feed or JSON resume export endpoint.
- Consolidate duplicate JavaScript utilities into a single module (e.g., `js/utils.js`).
- Add lazy loading for images if many are added.
- Implement keyboard shortcuts for navigation (e.g., `/` for focus search).
- Consider extracting the blob animation into a CSS-only module for easier reuse.

---
*This CLAUDE.md is intended to assist future Claude Code sessions in understanding and working efficiently with this codebase.*