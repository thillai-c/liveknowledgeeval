#!/bin/bash

echo "Deploying OKBench React App to Netlify..."
echo

echo "Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed! Please check the errors above."
    exit 1
fi

echo
echo "Build successful! Choose deployment method:"
echo
echo "1. Deploy via Netlify CLI (requires netlify-cli installed)"
echo "2. Open build folder for drag-and-drop deployment"
echo "3. Exit"
echo

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo
        echo "Deploying via Netlify CLI..."
        netlify deploy --prod --dir=build
        ;;
    2)
        echo
        echo "Opening build folder..."
        if command -v open &> /dev/null; then
            open build
        elif command -v xdg-open &> /dev/null; then
            xdg-open build
        else
            echo "Please navigate to the build folder manually"
        fi
        echo
        echo "Please drag the build folder to netlify.com"
        ;;
    3)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac

echo
echo "Deployment process completed!"
