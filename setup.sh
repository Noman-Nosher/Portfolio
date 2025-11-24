#!/bin/bash

echo "🚀 Setting up NexVision Technologies Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp env.local.example .env.local
    echo "⚠️  Please edit .env.local with your email configuration"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your email settings (optional for testing)"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
echo "For quick start guide, see QUICKSTART.md"


