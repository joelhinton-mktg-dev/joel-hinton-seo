#!/bin/bash

echo "🎭 Setting up Playwright Testing Environment..."
echo "============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🎭 Installing Playwright..."
npm install @playwright/test

echo "🌐 Installing Playwright browsers..."
npx playwright install

echo "🧪 Running test validation..."
npm run test:forms -- --dry-run

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Tests will run against live Netlify deployment:"
echo "   https://admirable-blini-e3d47a.netlify.app"
echo ""
echo "Available test commands:"
echo "  npm run test              - Run all tests"
echo "  npm run test:forms        - Run form tests only"
echo "  npm run test:ui           - Run tests with UI"
echo "  npm run test:headed       - Run tests in headed mode"
echo "  npm run test:forms:headed - Run form tests in headed mode"
echo ""
echo "📖 For more information, see tests/README.md"