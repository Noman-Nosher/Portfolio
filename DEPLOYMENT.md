# Deployment Guide - NexVision Technologies Portfolio

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the recommended platform as it's created by the Next.js team.

#### Step 1: Prepare Your Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

#### Step 2: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Configure environment variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
6. Click "Deploy"

**Your site will be live in 2-3 minutes!**

### Option 2: Netlify

#### Step 1: Build Settings
```bash
Build command: npm run build
Publish directory: .next
```

#### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repository
4. Set build settings as above
5. Add environment variables in Site Settings
6. Deploy

### Option 3: Docker + Any Cloud Provider

#### Create Dockerfile
Already provided in the README. Use it to containerize your application.

#### Deploy to:
- **DigitalOcean App Platform**
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**

### Option 4: Traditional VPS

#### Providers:
- DigitalOcean Droplet
- AWS EC2
- Linode
- Vultr

#### Deployment Steps:

1. **Server Setup**
```bash
# SSH into your server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

2. **Deploy Application**
```bash
# Clone your repository
git clone <your-repo-url>
cd noman-portfolio

# Install dependencies
npm install

# Create .env file
nano .env
# Add your environment variables

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "nexvision" -- start
pm2 save
pm2 startup
```

3. **Set up Nginx (Optional but recommended)**
```bash
sudo apt-get install nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/nexvision

# Add:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/nexvision /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

4. **SSL Certificate (Free with Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Domain Setup

### Point Domain to Your Deployment

#### For Vercel:
1. Go to your project settings
2. Domains → Add domain
3. Follow DNS configuration instructions

#### For Custom Server:
Add these DNS records:
```
Type: A
Name: @
Value: your-server-ip

Type: A
Name: www
Value: your-server-ip
```

## Environment Variables Checklist

Make sure to set these in your deployment platform:

- [ ] `SMTP_HOST` - Your SMTP server
- [ ] `SMTP_PORT` - SMTP port (usually 587)
- [ ] `SMTP_USER` - Your email address
- [ ] `SMTP_PASS` - Email password/app password
- [ ] `CONTACT_EMAIL` - Where to receive contact form emails
- [ ] `NEXT_PUBLIC_SITE_URL` - Your website URL

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify email notifications work
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check page load performance
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure error monitoring (Sentry, LogRocket, etc.)
- [ ] Set up uptime monitoring
- [ ] Create backup strategy

## Custom Domain Email Setup

### Professional Email Options:

1. **Google Workspace** ($6/month)
   - Professional email with your domain
   - Gmail interface
   - Best for business

2. **Zoho Mail** (Free tier available)
   - Professional email
   - Good free option

3. **ProtonMail** (Privacy-focused)
   - Encrypted email
   - Professional appearance

## Monitoring and Maintenance

### Recommended Tools:

1. **Uptime Monitoring**
   - UptimeRobot (Free)
   - Pingdom
   - StatusCake

2. **Performance Monitoring**
   - Vercel Analytics (Free on Vercel)
   - Google PageSpeed Insights
   - Lighthouse

3. **Error Tracking**
   - Sentry (Free tier)
   - LogRocket
   - Rollbar

4. **Analytics**
   - Google Analytics
   - Plausible (Privacy-friendly)
   - Fathom Analytics

## Scaling Considerations

### When to Scale:

- **Traffic > 10,000 visitors/month**: Consider upgrading plan
- **Contact forms > 100/day**: Implement rate limiting
- **Need database**: Add PostgreSQL/MongoDB
- **Multiple regions**: Use CDN (Cloudflare, Vercel Edge)

### Database Integration (Future):

If you need to store contact form submissions:

```typescript
// Consider adding:
- PostgreSQL (Supabase, Neon)
- MongoDB (MongoDB Atlas)
- MySQL (PlanetScale)
```

## Cost Estimates

### Free Tier (Perfect for Starting):
- **Vercel/Netlify**: Free
- **Domain**: $10-15/year
- **Email (Zoho)**: Free
- **Total**: ~$15/year

### Professional Tier:
- **Vercel Pro**: $20/month
- **Domain**: $15/year
- **Google Workspace**: $6/month
- **Total**: ~$26/month + $15/year

### Enterprise Tier:
- **Custom VPS**: $40-100/month
- **Domain**: $15/year
- **Google Workspace**: $12/month
- **Monitoring**: $20/month
- **Total**: ~$72-132/month + $15/year

## Backup Strategy

### Vercel/Netlify:
- Automatic deployments from Git
- Code backed up in GitHub
- No additional backup needed

### Custom VPS:
```bash
# Daily backup script
0 2 * * * /path/to/backup-script.sh

# backup-script.sh
#!/bin/bash
tar -czf /backups/nexvision-$(date +%F).tar.gz /var/www/nexvision
find /backups -name "nexvision-*.tar.gz" -mtime +7 -delete
```

## Support and Help

If you encounter issues:

1. Check the README.md troubleshooting section
2. Review deployment logs
3. Verify environment variables
4. Test locally first
5. Contact support at contact@nexvision.tech

---

**Congratulations! Your portfolio is now live! 🎉**

