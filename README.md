# NexVision Technologies Portfolio Website

A modern, responsive portfolio website showcasing expertise in Artificial Intelligence, Computer Vision, Embedded Systems, and Construction Management.

## 🚀 Features

- **Modern Design**: Beautiful, professional UI with smooth animations
- **Responsive**: Fully responsive across all devices
- **Backend Integration**: Contact form with email notifications
- **SEO Optimized**: Metadata and semantic HTML for better search rankings
- **Performance**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe code for better maintainability

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: Next.js API Routes
- **Email**: Nodemailer

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd noman-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@nexvision.tech
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 Running Locally

Development mode:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration

### Gmail Setup (Recommended for Testing)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App Passwords
   - Generate a new app password
3. Use the app password in your `.env` file

### Production Email Setup

For production, consider using:
- **SendGrid**: Enterprise email delivery
- **AWS SES**: Amazon's email service
- **Mailgun**: Developer-friendly email API

## 🏗️ Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy using Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to AWS, DigitalOcean, or VPS

1. Build the project:
```bash
npm run build
```

2. Set up Node.js environment on server
3. Install dependencies and run:
```bash
npm install --production
npm start
```

4. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start npm --name "nexvision" -- start
pm2 save
pm2 startup
```

### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t nexvision-portfolio .
docker run -p 3000:3000 --env-file .env nexvision-portfolio
```

## 🎨 Customization

### Update Company Information

Edit the following files:
- `components/Navbar.tsx` - Company name and logo
- `components/Footer.tsx` - Contact information and social links
- `components/Hero.tsx` - Hero section content
- `app/layout.tsx` - Site metadata and SEO

### Add New Projects

Edit `components/Projects.tsx` and add new project objects to the `projects` array.

### Modify Skills

Edit `components/Skills.tsx` and update the `skillCategories` array.

### Change Color Scheme

Edit `tailwind.config.ts` to modify the color palette.

## 📱 Features by Section

### Hero Section
- Eye-catching animated background
- Clear value proposition
- Multiple CTAs

### About Section
- Company overview
- Key highlights
- Statistics and metrics

### Skills Section
- Categorized technical expertise
- Technology badges
- Visual skill indicators

### Projects Section
- Detailed project showcases
- Technology tags
- Results and outcomes

### Contact Section
- Contact form with validation
- Multiple contact methods
- Meeting scheduler integration
- Backend email processing

## 🔒 Security

- Environment variables for sensitive data
- Input validation on forms
- Rate limiting (implement for production)
- CSRF protection (Next.js built-in)

## 🧪 Testing

```bash
npm run lint
```

## 📈 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Server-side rendering (SSR)

## 🐛 Troubleshooting

### Email Not Sending

- Check SMTP credentials in `.env`
- Verify Gmail app password
- Check server logs for errors

### Build Errors

- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors

### Deployment Issues

- Verify environment variables are set
- Check build logs for errors
- Ensure Node.js version compatibility

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email contact@nexvision.tech or schedule a meeting through the website.

## 🔄 Updates and Maintenance

- Regular dependency updates
- Security patches
- Feature enhancements
- Performance optimizations

---

Built with ❤️ by NexVision Technologies


