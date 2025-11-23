# Adil Bayraktar Personal Website

A modern, animated personal website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **3-Path Selection System**: Homepage presents 3 distinct paths (Social Media, Public Speaking, Human Rights)
- **Smart Navigation**: Remembers user's selected path in localStorage and shows contextual welcome banner
- **Smooth Animations**: Premium animations powered by Framer Motion throughout the site
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS

## Pages

- `/` - Homepage with 3 choice cards
- `/social-media` - Social media services and consulting
- `/public-speaking` - Speaking topics, events, and workshops
- `/human-rights` - Advocacy work and activism
- `/about` - Personal bio and overview
- `/contact` - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── human-rights/      # Human Rights path page
│   ├── public-speaking/   # Public Speaking path page
│   ├── social-media/      # Social Media path page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ChoiceCard.tsx     # Animated choice cards for homepage
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Sticky navigation with path highlighting
│   ├── PathPageLayout.tsx # Reusable layout for path pages
│   └── SectionHeader.tsx  # Section title component
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── package.json
```

## Key Features Explained

### Selection Memory

When a user selects one of the 3 paths from the homepage, their choice is stored in `localStorage` under the key `selectedPath`. On subsequent visits to the homepage, a dismissible banner appears suggesting they continue with their previous selection.

### Navigation Highlighting

The navigation bar automatically highlights the current page and shows a badge (e.g., "Viewing: Public Speaking") when on one of the 3 path pages.

### Animations

- Homepage hero fades up smoothly
- Choice cards animate in with staggered timing
- Card hover effects include scale, shadow, and icon wiggle
- Page transitions use crossfade effects
- All sections use scroll-triggered animations

### Reusable Components

The `PathPageLayout` component is used by all 3 path pages and includes:
- Hero section with title, subtitle, and CTA
- Services grid with icons
- Selected work/projects showcase
- Process section with numbered steps
- Call-to-action block

## Customization

### Colors

The accent color is defined in `tailwind.config.ts`. Change the `accent` color values to match your brand.

### Content

Each path page has its own content defined in the respective page file. Update the arrays for:
- `services` - Service offerings
- `projects` - Portfolio items
- `process` - Process steps

### Contact Form

The contact form in `/app/contact/page.tsx` currently logs to console. To make it functional, integrate with your preferred backend or email service (e.g., EmailJS, SendGrid, or a custom API endpoint).

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Quick Deploy to Vercel (Önerilen)

1. **GitHub'a yükleyin:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Vercel'e deploy edin:**
   - https://vercel.com adresine gidin
   - "New Project" → GitHub repository'nizi seçin
   - Deploy butonuna tıklayın
   - ✅ Hazır!

Detaylı deployment rehberi için `DEPLOYMENT.md` dosyasına bakın.

### Diğer Platformlar

- **Netlify**: Netlify Next.js plugin kullanın
- **Self-hosted**: `npm run build && npm start`

## 🔗 Faydalı Linkler

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## License

Private project for Adil Bayraktar.

