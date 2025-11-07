# Setup Guide

This guide will help you set up and run the consulting website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`

## Step-by-Step Installation

### 1. Extract the Project

Extract the downloaded `consulting-website.tar.gz` file:

```bash
tar -xzf consulting-website.tar.gz
cd consulting-website
```

### 2. Install Dependencies

Run one of the following commands to install all required packages:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Framer Motion for animations
- next-intl for internationalization
- All other dependencies

**Note**: Installation may take 2-5 minutes depending on your internet connection.

### 3. Configure Environment Variables

The project includes a `.env.local` file with default values. You can modify it if needed:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Consulting Services
```

For production deployment, update these values accordingly.

### 4. Start the Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start on `http://localhost:3000`

### 5. Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000/en
```

You can also access:
- Finnish version: `http://localhost:3000/fi`
- Vietnamese version: `http://localhost:3000/vi`

## Features Overview

### Multi-Language Support

The website supports three languages:
- **English (en)** - Default language
- **Finnish (fi)** - Suomi
- **Vietnamese (vi)** - Tiếng Việt

Switch languages using the globe icon in the header.

### Sections

1. **Hero Section** - Eye-catching landing with call-to-action buttons
2. **About** - Company information with statistics
3. **Services** - Six service cards with icons and descriptions
4. **Pricing** - Three pricing tiers with feature lists
5. **Testimonials** - Client feedback carousel
6. **Contact** - Contact form and information
7. **Footer** - Links and social media

### Responsive Design

The website is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1920px+)

## Customization Guide

### 1. Change Colors

Edit `src/app/globals.css` to modify the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Primary blue color */
  --secondary: 210 40% 96.1%;    /* Secondary gray */
  /* Modify these values */
}
```

### 2. Update Content

#### Hero Section
Edit `src/components/Hero.tsx` or modify translations in:
- `src/i18n/locales/en.json`
- `src/i18n/locales/fi.json`
- `src/i18n/locales/vi.json`

#### Services
Modify the services array in `src/components/Services.tsx` or update translations.

#### Pricing Plans
Update pricing in `src/components/Pricing.tsx` or translation files.

### 3. Add New Language

1. Create new translation file: `src/i18n/locales/[lang].json`
2. Add locale to `src/i18n.ts`:
```typescript
export const locales = ['en', 'fi', 'vi', 'your-lang'] as const;
```
3. Add language to switcher in `src/components/LanguageSwitcher.tsx`

### 4. Modify Styles

The project uses Tailwind CSS. You can:
- Add custom classes in components
- Extend theme in `tailwind.config.js`
- Add global styles in `src/app/globals.css`

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Test Production Build Locally

```bash
npm run start
```

Visit `http://localhost:3000` to test the production build.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"

### Deploy to Other Platforms

For other platforms (Netlify, AWS, DigitalOcean, etc.):

1. Build the project: `npm run build`
2. The output will be in `.next` folder
3. Set Node.js version to 18+
4. Set build command: `npm run build`
5. Set start command: `npm run start`
6. Set environment variables

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules .next
npm install
npm run dev
```

### TypeScript Errors

The build is configured to ignore TypeScript errors for flexibility. To enable strict type checking, edit `next.config.js`:

```js
typescript: {
  ignoreBuildErrors: false,
},
```

### Styling Issues

Clear the Tailwind cache:

```bash
rm -rf .next
npm run dev
```

## Performance Optimization

The website is optimized for performance:

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient CSS with Tailwind
- Optimized fonts
- Fast page transitions

## Security Best Practices

- Keep dependencies updated: `npm update`
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting for contact forms
- Regular security audits

## Getting Help

If you encounter issues:

1. Check this guide
2. Review the README.md
3. Check Next.js documentation: https://nextjs.org/docs
4. Check Tailwind CSS docs: https://tailwindcss.com/docs
5. Check next-intl docs: https://next-intl-docs.vercel.app/

## Additional Resources

- **Next.js**: https://nextjs.org/
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Shadcn UI**: https://ui.shadcn.com/
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/

## Maintenance

### Update Dependencies

Check for updates:

```bash
npm outdated
```

Update all dependencies:

```bash
npm update
```

### Backup

Always backup your:
- Custom code changes
- Translation files
- Environment variables
- Configuration files

## License

This project is provided as-is for your use. Feel free to modify and customize it for your needs.

---

**Happy coding! 🚀**

If you need help, refer to the documentation links above or check the code comments.
