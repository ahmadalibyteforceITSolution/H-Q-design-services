@echo off
echo ====================================
echo H&Q Design Services - Setup Script
echo ====================================
echo.
cd /d "%~dp0"
echo Installing dependencies...
call npm install
echo.
echo Building project...
call npm run build
echo.
echo Setup complete!
echo.
echo To run development server: npm run dev
echo To build for production: npm run build
echo.
pause
