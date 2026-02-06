#!/bin/bash

echo "🔍 Checking for hanging processes..."
echo ""

# Kill any existing node/vite processes
echo "Stopping all dev servers..."
pkill -f 'vite' || true
pkill -f 'node server' || true
pkill -f 'tsx' || true

sleep 2

echo "✓ Processes stopped"
echo ""
echo "🏗️  Running clean build..."
echo ""

# Clean build
rm -rf dist node_modules/.vite

# Run build
npm run build &
BUILD_PID=$!

# Wait for build with manual timeout (30 seconds)
SECONDS=0
while kill -0 $BUILD_PID 2>/dev/null; do
    if [ $SECONDS -gt 30 ]; then
        echo ""
        echo "❌ Build is taking too long (>30s), but it might still be working..."
        echo "⏱️  Waiting a bit more..."
        break
    fi
    sleep 1
done

# Wait for the build to finish
wait $BUILD_PID 2>/dev/null
BUILD_EXIT=$?

echo ""
if [ $BUILD_EXIT -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📦 Output files:"
    ls -lh dist/ 2>/dev/null || echo "No dist folder found"
else
    echo "Build process info (exit code: $BUILD_EXIT)"
    echo ""
    echo "Checking if dist folder was created anyway..."
    if [ -d "dist" ]; then
        echo "✅ dist folder exists!"
        ls -lh dist/
    else
        echo "❌ No dist folder found"
    fi
fi

echo ""
echo "🔍 Checking for remaining processes..."
ps aux | grep -E 'node|vite' | grep -v grep || echo "No hanging processes found"