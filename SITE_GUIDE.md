# Site Guide - Adil Bayraktar Website

## 🎨 Design Overview

A modern, minimal, professional website with smooth animations and a unique 3-path user journey system.

### Color Palette
- **Primary**: Clean whites and grays
- **Accent**: Blue (#0ea5e9) with full shade range
- **Backgrounds**: Subtle gradients (blue-50, purple-50, amber-50 for different sections)

## 📍 Page Structure

### 1. Homepage (`/`)
**Purpose**: Present 3 distinct paths for visitors

**Key Features**:
- Hero section with name and tagline
- 3 animated choice cards with icons:
  - 📈 Social Media Management
  - 🎤 Public Speaking  
  - ⚖️ Human Rights Work
- Welcome back banner (appears if user previously selected a path)
- localStorage integration

**Animations**:
- Hero fades up
- Cards stagger in (delay based on index)
- Hover: scale + shadow + icon wiggle
- Click: card expands before route transition

---

### 2. Social Media Page (`/social-media`)
**Content**:
- 6 Services: Strategy, Content Calendar, Account Management, Community, Campaigns, Training
- 3 Projects: Tech Startup Growth, NGO Campaign, Creator Brand Launch
- 5 Process Steps

**Visual**: Blue gradient hero

---

### 3. Public Speaking Page (`/public-speaking`)
**Content**:
- 6 Services: Keynotes, Panels, Workshops, Moderation, Media Literacy, Human Rights Topics
- 4 Events: TEDx, Digital Rights Conference, University Workshop, Corporate Training
- 5 Process Steps

**Visual**: Purple gradient hero

---

### 4. Human Rights Page (`/human-rights`)
**Content**:
- 6 Focus Areas: Freedom of Expression, Social Justice, Civil Society, Policy, Community Organizing, International Advocacy
- 3 Projects: Digital Rights Campaign, Press Freedom Initiative, Community Education
- 5 Process Steps

**Visual**: Amber gradient hero

---

### 5. About Page (`/about`)
**Content**:
- Profile section with photo placeholder (gradient with initials)
- 4 bio paragraphs
- 3 pillar cards linking to path pages
- CTA to contact

---

### 6. Contact Page (`/contact`)
**Content**:
- Contact form with:
  - Name, Email, Subject dropdown, Message
  - Subject options match 3 paths
- Direct contact info (email)
- Social links (LinkedIn, Twitter)
- Response time card

**Interaction**: Form shows success state on submit

---

## 🎬 Animation Patterns

### Page Load
- Hero: fade + slide up (0.6s)
- Cards: stagger animation (0.1s delay per item)

### Scroll Animations
- Services grid: fade up on viewport enter
- Projects: stagger fade up
- Process steps: slide from left

### Interactions
- Card hover: scale(1.02) + shadow
- Icon hover: rotate wiggle animation
- Button hover: color transition + shadow expansion

---

## 🧭 Navigation System

### Navbar
- Sticky on scroll with blur backdrop
- Always shows: Home, Social Media, Public Speaking, Human Rights, About, Contact
- Active page highlighted in accent color
- Path pages show badge: "Viewing: [Path Name]"

### localStorage Logic
- Key: `selectedPath`
- Values: `/social-media`, `/public-speaking`, `/human-rights`
- Set when: User clicks a choice card on homepage
- Used for: Welcome back banner on homepage

---

## 🎯 Key User Flows

### First Visit
1. Land on homepage
2. Read hero text
3. Select one of 3 paths
4. Path stored in localStorage
5. Navigate to selected path page
6. Explore content
7. Can navigate to other pages via navbar

### Return Visit
1. Land on homepage
2. See welcome banner with previous selection
3. Can continue to that path or dismiss banner
4. Choose new path if desired

---

## 🔧 Component Architecture

### Layout Components
- `Navbar.tsx` - Sticky nav with path highlighting
- `Footer.tsx` - Social links and copyright
- `PathPageLayout.tsx` - Reusable template for 3 path pages

### Specialty Components
- `ChoiceCard.tsx` - Animated cards for homepage
- `SectionHeader.tsx` - Consistent section titles

---

## 🚀 Technical Features

### Performance
- Next.js 14 App Router
- Server components where possible
- Client components only for interactivity
- Optimized bundle with tree-shaking

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- ARIA labels on icon-only buttons
- Focus states on all interactive elements

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Grid layouts: 1 col mobile → 3 col desktop
- Readable line lengths (max-w constraints)

---

## 📦 Production Checklist

Before deploying:

- [ ] Update placeholder content with real content
- [ ] Replace photo placeholder with real photo
- [ ] Update social media links in Footer.tsx
- [ ] Connect contact form to actual backend/email service
- [ ] Add real email address in contact page
- [ ] Test on multiple devices
- [ ] Check all animations perform smoothly
- [ ] Verify localStorage works across browsers
- [ ] Set up analytics (optional)
- [ ] Configure domain and SSL

---

## 💡 Customization Tips

### To Change Accent Color
Edit `tailwind.config.ts` → `accent` color palette

### To Add New Path
1. Create new page in `/app/[path-name]/page.tsx`
2. Add to choices array in `app/page.tsx`
3. Add to navItems in `components/Navbar.tsx`
4. Add to pathLabels object in both files

### To Modify Path Content
Edit the `services`, `projects`, `process` arrays in respective path page files

### To Change Animation Speed
Adjust `duration` values in Framer Motion props throughout components

