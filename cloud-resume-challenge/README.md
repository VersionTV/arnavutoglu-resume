# Cloud Resume Challenge - Hasan Arnavutoğlu's Portfolio Website

A modern, interactive resume/portfolio website built for the Cloud Resume Challenge, featuring a liquid glass (glassmorphism) design with smooth animations, responsive layout, cursor interaction effects, and scroll-triggered animations.

## �� 🌐 Live Demo
[https://yourusername.github.io/cloud-resume-challenge/](https://yourusernamegithub)

## � ✨ Project

- Fully responsive design (mobile, tablet)
- **Theme**: Glassmorphism effects with backdrop-filter, blur, transparency, and light refraction effects
- **Cursor Interaction**: Interactive mouse cursor with hover effects (inspired by pszostak.pl)
- **Scroll Animations**: Elements animate into view as you scroll (inspired by tajmirul.site)
- **Typewriting Effect**: Animated text in hero section
- **Skill Progress Animations**: Animated skill bars on scroll
- **Hover Effects**: Lift, glow, and shadow effects on cards and buttons
- **Ripple Effects**: Click ripples on interactive elements
- **Magnetic Buttons**: Subtle magnetic pull on social links
- **Secure and hosting ready** for AWS S3/CloudFront or any static hosting
- **Accessibility focused** with semantic HTML and ARIA labels
- **SEO optimized** with proper meta tags and structure
- **Performance optimized** with CSS containment, will-change properties, and reduced animation intensity

## �� 📂 File Structure

```
cloud-resume-challenge/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles including glass effects, animations, responsiveness
├── js/
│   ├── particles.js    # Intentionally left blank - using CSS blob animation instead
│   ├── typed.js        # Typing animation for hero section
│   └── scripts.js      # Main JavaScript functionality (year init, skill animations, smooth scroll, nav highlights)
├── assets/
│   ├── images/         # Profile image (IMG_0580.png) and future images
│   └── fonts/          # For future custom fonts
�└── README.md           # Project documentation
```

## �� 💻 Technologies Used

- **HTML5** Semantic markup
- **CSS3** with CSS Variables, Flexbox, Grid
- **JavaScript** Vanilla ES6+ (no frameworks)
- **Font Awesome** for icons
- **Typed.js** for typing animation

## �� 🎨 Design Features

### Liquid Glass (Glassmorphism) Effects
- Frosted glass cards with `backdrop-filter: blur()`
- Semi-transparent backgrounds with `rgba()` colors
- Subtle borders and shadows for depth
- Hover animations with lift and glow effects

### Animations & Interactions
- Page load fade-in and slide-up animations
- Scroll-triggered animations with Intersection Observer
- Typing effect in hero section
- Skill progress bar animations on scroll and viewport entry
- Hover lift, glow, and shadow effects on cards
- Cursor follower with interactive hover states
- Ripple effect on buttons and links
- Magnetic button effect on social links
- Smooth scroll behavior
- Animated liquid glass background with CSS blob animation
- Animation suspension when tab is hidden for performance

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

## �� 📱 Responsive Design

The website follows a mobile-first approach and looks great on all devices:
- Mobile view: Single column layout with hamburger menu
- Tablet view: Optimized spacing and font sizes
- Desktop view: Multi-column layouts with generous white space

## �� 🛠��️ Installation & Usage

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. No build process or dependencies required

```bash
# Clone the repository
git clone https://github.com/yourusername/cloud-resume-challenge.git

# Or download the ZIP file

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## �� 🚀 Deployment

This site is ready for static hosting on any platform:

- **GitHub Pages**: Simply push to the `gh-pages` branch
- **Netlify**: Drag and drop the folder or connect GitHub repo
- **Vercel**: Import the GitHub repository
- **AWS S3 + CloudFront**: Upload the `cloud-resume-challenge` directory
- **Firebase Hosting**: Deploy with Firebase CLI

## �� 📝 Content

All information on this website is sourced from Hasan Arnavutoğlu's professional resume (`hasanarnavutoglu-cv.pdf`):

### Personal Information
- **Name**: Hasan Arnavutoğlu
- **Email**: hasanversion2009@gmail.com
- **Phone**: +90 506 645 86 11
- **Location**: Fatih Mahallesi, Dilek Sokak No:7 D:6, Büyükçekmece / İstanbul
- **Birth Date**: 17/11/2001
- **Marital Status**: Bekar (Single)
- **Military Service**: Tamamlandı (Completed)
- **Citizenship**: T.C. ve AB Vatandaşı (Turkish and EU Citizen)
- **Driver's License**: B (2021)

### Professional Summary
Computer Engineering graduate with strong interest in information technologies, aiming to continuously develop myself in this field. Foundational knowledge in system administration, network architectures, and software technologies. Seeking to expand knowledge and experience in cybersecurity, robotics systems, and artificial intelligence. Passionate about research, learning, and teamwork. Previously contributed to the development of an AI model through participation in a search engine quality evaluation project.

### Professional Experience
- **Gini Talent** - Search Engine Quality Improvement Specialist (Remote, Sep 2024 - Aug 2025)
- **BIOS Elektronik** - Intern (Istanbul, 2022)

### Education
- **Tekirdağ Namık Kemal University** - Computer Engineering (2020-2024, GPA: 3.39/4)
- **Mimar Sinan Anatolian High School** - Science Track (Score: 96,87)

### Certifications
- Game Developer Education - İstanbul Ticaret Odası Softito Yazılım ve Bilişim Akademisi (2023)
- Data Analysis School: Artificial Intelligence and Machine Learning (Oct 2025 - May 2026)

### Projects
- Personal Infrastructure Project (Home Lab) - 2026
- QR Interactive Social A (Graduation Thesis) - 2024
- Vision-Based Game: Python Image Processing & Unity - 2024
- ZigZag Game - 2023

### References
- Mutlu Şimşek, Bios Elektronik - İmalat Müdürü, +90 (533) 666 43 08

## �� 🎯 Color Palette

### Primary Colors
- **Primary Blue**: `#0066ff`
- **Secondary Blue**: `#0040cc`
- **Accent Blue**: `#00d4ff`
- **Light Accent**: `#66b3ff`

### Background
- **Liquid Glass Gradient**: Animated CSS blob effect with varying opacities
- **Light Accents**: Subtle radial gradients for depth and cursor effects

### Text Colors
- **Dark Text**: `#1a1a3e`
- **Medium Text**: `#4a5568`

### Glass Elements
- **Card Background**: `rgba(255, 255, 255, 0.55)` (light) / `rgba(0,0,0,0.4)` (dark)
- **Glass Background**: `rgba(255,255,255,0.15)` (light) / `rgba(255,255,255,0.08)` (dark)
- **Borders**: `rgba(255,255,255,0.2)` (light) / `rgba(255,255,255,0.12)` (dark)

## �� 📄 License

This project is open source and available for personal use.

## �� 🙏 Acknowledgments

- Design inspiration: Apple's Liquid Glass aesthetic from iOS 26/macOS Tahoe
- Cursor interaction: Inspired by pszostak.pl
- Scroll animations: Inspired by tajmirul.site
- Icons: Font Awesome
- Background animation: Pure CSS blob implementation (no particles.js)
- Typography: System fonts for optimal performance

---

*Note: This resume website was created based on the information from Hasan Arnavutoğlu's CV. For the most current information, please refer to the original PDF document.*