# Quick Start Guide - NexVision Technologies Portfolio

Get your portfolio up and running in 5 minutes!

## 🚀 Option 1: Deploy to Vercel (Fastest - No Local Setup Required)

### Step 1: Fork/Clone to GitHub
1. Push this code to your GitHub repository

### Step 2: Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Add environment variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-gmail-app-password
   CONTACT_EMAIL=contact@nexvision.tech
   ```
5. Click "Deploy"

**Done! Your site is live! 🎉**

## 💻 Option 2: Run Locally

### Prerequisites
- Node.js 18+ installed ([Download here](https://nodejs.org/))

### Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Create Environment File**
```bash
# Windows PowerShell
copy env.local.example .env.local

# Mac/Linux
cp env.local.example .env.local
```

3. **Configure Email (Optional for testing)**

Edit `.env.local` with your email settings:

**For Gmail:**
- Enable 2-Factor Authentication
- Generate App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
- Use the app password in `.env.local`

**For Testing Without Email:**
- Leave the SMTP fields empty
- Form submissions will be logged to console

4. **Start Development Server**
```bash
npm run dev
```

5. **Open Browser**
Visit: [http://localhost:3000](http://localhost:3000)

**That's it! You're running locally! 🎉**

## 🎨 Customization

### Change Company Name
Edit `components/Navbar.tsx`:
```typescript
<div className="text-2xl font-bold gradient-text">
  Your Company Name
</div>
```

### Update Contact Information
Edit `components/Footer.tsx` and `components/Contact.tsx`

### Add Your Own Projects
Edit `components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    category: 'Your Category',
    description: 'Your description',
    // ...
  }
]
```

### Modify Colors
Edit `tailwind.config.ts` to change the color scheme

## 📧 Email Setup for Contact Form

### Gmail Setup (Easiest)

1. **Enable 2-Step Verification**
   - Go to [Google Account](https://myaccount.google.com/)
   - Security → 2-Step Verification → Turn On

2. **Create App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select app: Mail
   - Select device: Other (Custom name)
   - Click Generate
   - Copy the 16-character password

3. **Add to .env.local**
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   ```

### Alternative Email Services

**SendGrid** (Professional)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**Mailgun** (Developer-friendly)
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

## 🌐 Deploy to Production

### Recommended: Vercel (See Option 1 above)

### Alternative: Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Email not sending
- Check SMTP credentials
- Verify app password (not regular password)
- Check spam folder
- Look at console logs for errors

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📱 Test on Mobile

1. Find your local IP:
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

2. Start dev server:
```bash
npm run dev
```

3. Access from phone:
```
http://your-ip-address:3000
```

## 🔥 Production Checklist

Before going live:

- [ ] Update all placeholder content
- [ ] Add real email addresses
- [ ] Test contact form
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Add Google Analytics (optional)
- [ ] Test on multiple devices
- [ ] Optimize images
- [ ] Check page speed

## 📞 Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment options
- Email: contact@nexvision.tech

---

**Happy Coding! 🚀**


