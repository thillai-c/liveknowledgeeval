@echo off
echo Deploying OKBench React App to Netlify...
echo.

echo Building the application...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo Build successful! Choose deployment method:
echo.
echo 1. Deploy via Netlify CLI (requires netlify-cli installed)
echo 2. Open build folder for drag-and-drop deployment
echo 3. Exit
echo.

set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo Deploying via Netlify CLI...
    call netlify deploy --prod --dir=build
) else if "%choice%"=="2" (
    echo.
    echo Opening build folder...
    start explorer build
    echo.
    echo Please drag the build folder to netlify.com
) else if "%choice%"=="3" (
    echo Exiting...
    exit /b 0
) else (
    echo Invalid choice. Exiting...
    exit /b 1
)

echo.
echo Deployment process completed!
pause
