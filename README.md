# Bharat Strategic Solution — Premium Corporate Website

Modern, premium, responsive website for an IT hardware & infrastructure services company.

## Features

- **Global animated loader** (first visit + mini loader on section navigation)
- Dark navy theme with electric blue accents
- Scroll-reveal animations
- Interactive service cards with hover effects
- Horizontal product scroller
- Animated counters
- FAQ accordion
- Contact form with success state
- Fully responsive (mobile-first)
- Sticky navbar with scroll state
- Back-to-top button
- Partner marquee
- Smooth section navigation

## How to Run

Simply open `index.html` in a modern browser, or serve with any static server:

```bash
# Example with Python
python3 -m http.server 8080

# Or with npx
npx serve .
```

Then visit `http://localhost:8080`

## Structure

```
bharat-strategic/
├── index.html      # Main page
├── css/styles.css  # Custom styles & animations
├── js/app.js       # Data, rendering, interactions, loader
└── README.md
```

## Tech Notes

- Tailwind CSS (CDN) + custom CSS
- Vanilla JS (no build step required)
- Google Fonts: Inter + Sora
- Inspired by enterprise IT service positioning (content reference only)

## Next Steps (Optional)

- Migrate to Next.js + Framer Motion for production
- Connect real contact form backend
- Add real client logos & case studies
- Implement actual multi-page routing with the mini-loader
