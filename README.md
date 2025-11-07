# Consulting Website

A modern, responsive consulting website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI. Features smooth animations, multi-language support (English, Finnish, Vietnamese), and a professional design.

## Features

- ✨ Modern and responsive design
- 🌍 Multi-language support (EN, FI, VI)
- 🎨 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📱 Mobile-first approach
- 🔒 Type-safe with TypeScript
- ⚡ Fast performance with Next.js 14
- 🎭 Beautiful UI components with Shadcn UI
- 🌈 Customizable with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or extract the source code
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
consulting-website/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── [locale]/     # Locale-specific pages
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── i18n/            # Internationalization
│   │   └── locales/     # Translation files
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript types
│   ├── i18n.ts          # i18n configuration
│   └── middleware.ts    # Next.js middleware
├── public/              # Static assets
├── .env.local          # Environment variables
├── package.json        # Dependencies
└── tailwind.config.js  # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Add your custom colors
    }
  }
}
```

### Translations

Add or modify translations in `src/i18n/locales/`:
- `en.json` - English
- `fi.json` - Finnish
- `vi.json` - Vietnamese

### Content

Update component files in `src/components/` to modify:
- Hero section content
- Services offered
- Pricing plans
- Testimonials
- Contact information

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Consulting Services
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Core Web Vitals optimized

## Security

- Environment variables for sensitive data
- Input validation on forms
- XSS protection
- CSRF protection

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the repository.

## Credits

Built with modern web technologies and best practices for optimal performance and user experience.
