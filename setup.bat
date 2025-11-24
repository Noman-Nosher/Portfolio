@echo off
echo 🚀 Setting up NexVision Technologies Portfolio...
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%
echo.

:: Install dependencies
echo 📦 Installing dependencies...
call npm install

:: Create .env.local if it doesn't exist
if not exist .env.local (
    echo 📝 Creating .env.local file...
    copy env.local.example .env.local
    echo ⚠️  Please edit .env.local with your email configuration
) else (
    echo ✅ .env.local already exists
)

echo.
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Edit .env.local with your email settings (optional for testing)
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000 in your browser
echo.
echo For deployment instructions, see DEPLOYMENT.md
echo For quick start guide, see QUICKSTART.md
echo.
pause


