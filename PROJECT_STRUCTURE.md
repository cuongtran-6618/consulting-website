# Project Structure

```
consulting-website/
│
├── src/                          # Source code directory
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/            # Internationalized routes
│   │   │   ├── layout.tsx       # Locale-specific layout with metadata
│   │   │   └── page.tsx         # Main homepage
│   │   └── globals.css          # Global styles and Tailwind directives
│   │
│   ├── components/              # React components
│   │   ├── ui/                  # Shadcn UI components
│   │   │   ├── button.tsx       # Button component with variants
│   │   │   ├── card.tsx         # Card component family
│   │   │   ├── input.tsx        # Input field component
│   │   │   └── textarea.tsx     # Textarea component
│   │   │
│   │   ├── About.tsx            # About section with stats
│   │   ├── Contact.tsx          # Contact form and info
│   │   ├── Footer.tsx           # Site footer with links
│   │   ├── Header.tsx           # Main navigation header
│   │   ├── Hero.tsx             # Hero/landing section
│   │   ├── LanguageSwitcher.tsx # Language selection dropdown
│   │   ├── Pricing.tsx          # Pricing plans section
│   │   ├── Services.tsx         # Services grid section
│   │   └── Testimonials.tsx     # Client testimonials carousel
│   │
│   ├── i18n/                    # Internationalization
│   │   └── locales/             # Translation files
│   │       ├── en.json          # English translations
│   │       ├── fi.json          # Finnish translations
│   │       └── vi.json          # Vietnamese translations
│   │
│   ├── lib/                     # Utility libraries
│   │   └── utils.ts             # Helper functions (cn utility)
│   │
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # Interface definitions
│   │
│   ├── i18n.ts                  # i18n configuration
│   └── middleware.ts            # Next.js middleware for routing
│
├── public/                      # Static assets
│   └── favicon.svg              # Site favicon
│
├── .env.example                 # Example environment variables
├── .env.local                   # Local environment variables (gitignored)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── DEPLOYMENT.md               # Deployment guide
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Main documentation
├── SETUP_GUIDE.md             # Detailed setup instructions
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Key Directories Explained

### `/src/app`
Contains the Next.js 14 App Router structure with:
- Locale-based routing for multi-language support
- Global styles and CSS variables
- SEO metadata configuration

### `/src/components`
All React components organized by:
- **ui/**: Reusable UI primitives from Shadcn UI
- **Section components**: About, Services, Pricing, etc.
- **Layout components**: Header, Footer
- **Utility components**: LanguageSwitcher

### `/src/i18n`
Internationalization setup with:
- Translation files for EN, FI, VI
- JSON format for easy editing
- Structured translation keys

### `/src/lib`
Utility functions including:
- `cn()` function for Tailwind class merging
- Can be extended with more utilities

## Configuration Files

- **next.config.js**: Next.js configuration with i18n support
- **tailwind.config.js**: Custom Tailwind theme and plugins
- **tsconfig.json**: TypeScript compiler options
- **postcss.config.js**: PostCSS plugins configuration

## Important Files

- **middleware.ts**: Handles locale detection and routing
- **i18n.ts**: Configures next-intl for translations
- **.env.local**: Local environment variables (not committed)

## Component Architecture

### Layout Components
- Header: Fixed navigation with language switcher
- Footer: Site footer with links and social media

### Content Sections
- Hero: Eye-catching landing with CTA
- About: Company info with animated statistics
- Services: Grid of service offerings
- Pricing: Pricing tiers with features
- Testimonials: Client feedback cards
- Contact: Contact form and information

### UI Components (Shadcn)
- Buttons with multiple variants
- Cards with consistent styling
- Form inputs with validation states
- Textarea for messages

## Styling System

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: For theme customization
- **Custom animations**: Defined in globals.css
- **Responsive breakpoints**: Mobile-first approach

## State Management

- React hooks for local state
- URL-based locale management
- Form state in Contact component

## Performance Features

- Image optimization (Next.js Image)
- Code splitting by route
- Lazy loading components
- CSS purging in production
- Optimized bundle size

## Security Features

- Input sanitization ready
- Environment variable protection
- CSRF protection (can be added)
- XSS prevention via React

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ with appropriate polyfills
- Responsive design for all devices
- Progressive enhancement approach
