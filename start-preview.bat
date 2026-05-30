@echo off
title Fly2Sun Preview Server
setlocal enabledelayedexpansion

set "PATH=%PATH%;%ProgramFiles%\nodejs;%APPDATA%\npm;%USERPROFILE%\AppData\Roaming\npm"

:: Cleanup old server on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000 " 2^>nul') do (
    powershell -Command "Stop-Process -Id %%a -Force" >nul 2>&1
)

echo.
echo    ====================================
echo      Fly2Sun Local Preview Server
echo    ====================================
echo.

:: Get local IP
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "192.168."') do (
    set RAW_IP=%%a
    goto :found_ip
)
:found_ip
set IP=%RAW_IP:~1%
if "%IP%"=="" set IP=192.168.x.x

echo      Local : http://localhost:3000
echo      Mobile: http://!IP!:3000
echo.
echo      Press Ctrl+C to stop server
echo    ------------------------------------
echo.

:: Start server
npx --yes serve -l 3000 -n
if %errorlevel% neq 0 (
    echo [ERROR] npx not found. Install Node.js: https://nodejs.org
)

:: Cleanup
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000 " 2^>nul') do (
    powershell -Command "Stop-Process -Id %%a -Force" >nul 2>&1
)

echo    Server stopped.
pause
