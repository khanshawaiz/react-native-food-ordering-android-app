=========================================
For ANDROID STUDIO :
=======================================
For opening both emu devices:

Run npx expo start.

Press a to start firt 

Press Shift + A then select second



========================================================================
 TO RUN & TEST SUPABASE EDGE FUNCTION ON LOCAL ENVIRONMENT:
=========================================================================

 STEP 1: Start the local Supabase stack (if not already running)
 ------------------------------------------------------------------------
 Open terminal and run:
     npx supabase start

 STEP 2: Serve the function locally (keep this terminal open)
 ------------------------------------------------------------------------
 Run this command in a terminal:
     npx supabase functions serve --env-file .env payment-sheet


========================================
GIT WORKFLOW 
========================================

Step 1 – Add all changes:
  git add .
  git commit -m "Describe what you changed"
  git push

Step 2 – For updating the safe restore point:
  git tag -d stable-working
  git tag stable-working
  git push --tags -f

Step 3 - For going back to the latest stable version :
git reset --hard stable-working


==================================
EXPO APP FOR WIFI (PHONE):
==================================
Terminal (every time):
  nvm use 18.20.8
  npx expo start

Phone:
  Open Expo Go → Enter URL manually
  Type: exp://191.168.106.65:8081





