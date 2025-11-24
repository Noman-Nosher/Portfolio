# Getting Started - NexVision Technologies Portfolio

## 🎯 Choose Your Path

### Path 1: Just Want to See It Running? (Fastest)
1. Run the setup script:
   - **Windows**: Double-click `setup.bat`
   - **Mac/Linux**: Run `bash setup.sh`
2. Run `npm run dev`
3. Open http://localhost:3000

### Path 2: Deploy Directly (No Local Setup)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (see below)
5. Deploy!

### Path 3: Manual Setup
See [QUICKSTART.md](QUICKSTART.md) for detailed instructions.

## 📧 Email Configuration (Optional)

The contact form can work without email configuration (it will log to console).

To enable email notifications:

1. **Create `.env.local` file** (copy from `env.local.example`)

2. **For Gmail:**
   - Enable 2-Factor Authentication
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Add to `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   CONTACT_EMAIL=contact@nexvision.tech
   ```

3. **Test it:**
   - Restart dev server
   - Submit the contact form
   - Check your email

## 🎨 Customization

### Change Company Name
**File**: `components/Navbar.tsx`
```typescript
<div className="text-2xl font-bold gradient-text">
  Your Company Name Here
</div>
```

### Update Contact Info
**Files**: 
- `components/Footer.tsx` - Footer contact details
- `components/Contact.tsx` - Contact page details

### Add Your Projects
**File**: `components/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Your Amazing Project',
    category: 'AI & Machine Learning',
    description: 'Description of your project',
    icon: <FaRocket className="text-4xl text-purple-600" />,
    technologies: ['Python', 'TensorFlow', 'React'],
    results: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
  },
  // Add more projects...
]
```

### Modify Skills
**File**: `components/Skills.tsx`
```typescript
const skillCategories = [
  {
    title: 'Your Skill Category',
    icon: <FaPython className="text-5xl text-purple-600" />,
    skills: [
      'Skill 1',
      'Skill 2',
      'Skill 3',
    ],
    technologies: [
      { name: 'Tech 1', icon: <FaPython /> },
    ],
  },
  // Add more categories...
]
```

### Change Colors
**File**: `tailwind.config.ts`

Modify the `primary` color palette to change the theme colors.

## 📁 Project Structure

```
noman-portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # Backend API routes
│   │   └── contact/       # Contact form handler
│   ├── layout.tsx         # Main layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills section
├── public/                # Static files
├── .env.local            # Environment variables (create this)
├── package.json          # Dependencies
└── README.md             # Documentation
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check for code issues
```

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment guide including:
- Vercel (recommended)
- Netlify
- Docker
- VPS/Custom Server
- Domain configuration
- SSL setup

## 📚 Documentation

- **QUICKSTART.md** - Quick start guide with step-by-step instructions
- **DEPLOYMENT.md** - Comprehensive deployment guide
- **README.md** - Full documentation and troubleshooting

## ❓ Common Issues

### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm run dev
```

### Dependencies error
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Email not working
- Check `.env.local` has correct credentials
- For Gmail, use App Password (not regular password)
- Restart dev server after changing `.env.local`

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips

1. **Test locally first** before deploying
2. **Use version control** (Git) for all changes
3. **Keep dependencies updated** regularly
4. **Test on multiple devices** and browsers
5. **Optimize images** before adding them
6. **Monitor performance** with Lighthouse

## 📞 Support

Need help? 
- Check the troubleshooting sections in README.md
- Review the documentation files
- Contact: contact@nexvision.tech

---

**Ready to build? Run `npm run dev` and let's go! 🚀**


