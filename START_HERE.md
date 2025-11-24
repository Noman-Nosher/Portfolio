# 🚀 START HERE - NexVision Technologies Portfolio

Welcome! Your professional portfolio website is ready. Follow these simple steps to get started.

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies

**Windows Users:**
```bash
# Double-click setup.bat
# OR run in PowerShell:
npm install
```

**Mac/Linux Users:**
```bash
bash setup.sh
# OR
npm install
```

### Step 2: Run the Development Server

```bash
npm run dev
```

### Step 3: Open Your Browser

Visit: **http://localhost:3000**

**That's it! Your portfolio is running! 🎉**

## 📧 Enable Email (Optional)

To receive contact form submissions via email:

1. **Copy the example environment file:**
   ```bash
   # Windows
   copy env.local.example .env.local
   
   # Mac/Linux
   cp env.local.example .env.local
   ```

2. **For Gmail (Easiest):**
   - Go to https://myaccount.google.com/security
   - Enable 2-Factor Authentication
   - Go to https://myaccount.google.com/apppasswords
   - Generate an app password
   - Add to `.env.local`:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

3. **Restart the server** (Ctrl+C, then `npm run dev` again)

> **Note:** Email is optional! The form will work without it (submissions logged to console).

## 🎨 Customize Your Portfolio

### 1. Change Company Name
**File:** `components/Navbar.tsx` (Line 28)
```typescript
NexVision Technologies → Your Company Name
```

### 2. Update Contact Info
**Files:** 
- `components/Footer.tsx` (Lines 21-40)
- `components/Contact.tsx` (Lines 70-100)

### 3. Add Your Projects
**File:** `components/Projects.tsx` (Lines 7-70)
- Copy an existing project object
- Update with your information

### 4. Modify Skills
**File:** `components/Skills.tsx` (Lines 7-60)
- Edit the `skillCategories` array
- Add/remove skills as needed

### 5. Change Colors
**File:** `tailwind.config.ts` (Lines 13-24)
- Modify the `primary` color values

## 🌐 Deploy to Production

### Fastest: Deploy to Vercel (Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repository
   - Add environment variables (if using email)
   - Click "Deploy"

**Done! Your site is live in 2-3 minutes! 🎉**

## 📚 Need More Help?

- **Quick Start:** See `QUICKSTART.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Getting Started:** See `GETTING_STARTED.md`
- **Project Info:** See `PROJECT_SUMMARY.md`
- **Full Docs:** See `README.md`

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
# Kill the process or use a different port
PORT=3001 npm run dev
```

### Installation errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Code errors in editor?
- These are normal before `npm install`
- Install dependencies to fix

## ✅ Pre-Launch Checklist

Before deploying, make sure to:
- [ ] Update company name in Navbar
- [ ] Update contact information
- [ ] Add your own projects
- [ ] Customize skills section
- [ ] Test contact form
- [ ] Review all content
- [ ] Test on mobile devices

## 🎯 What's Included?

✅ Modern, responsive design
✅ 7 featured project showcases
✅ 4 skill category sections
✅ Contact form with backend
✅ Email notifications
✅ Meeting scheduler integration
✅ Mobile-optimized
✅ SEO-ready
✅ Fast loading
✅ Production-ready
✅ Full documentation

## 💡 Pro Tips

1. **Test locally first** before deploying
2. **Customize thoroughly** - make it yours!
3. **Use real content** - replace placeholder info
4. **Test email** before going live
5. **Check mobile view** on real devices
6. **Ask friends** for feedback

## 🎊 You're All Set!

Your professional portfolio is ready to showcase your expertise in:
- ✨ Artificial Intelligence
- 👁️ Computer Vision
- 🔌 Embedded Systems
- 🏗️ Construction Management
- 🤖 Robotics & ROS2

## 📞 Questions?

- Check the documentation files
- Review code comments
- Email: contact@nexvision.tech

---

**Ready to launch? Run `npm run dev` and let's go! 🚀**

Good luck with your portfolio! 🎉


