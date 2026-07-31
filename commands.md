========================================
PERMANENT RULE – ADDING NEW SCREENS
========================================

1. New tab-level screens (e.g., inside (user)/ or (admin)/):
   → Register them in the relevant `_layout.tsx`:
     - src/app/(user)/_layout.tsx
     - src/app/(admin)/_layout.tsx
   → Add a <Tabs.Screen name="filename" options={{ title: 'Title', tabBarIcon: ... }} />

2. New screens inside menu/ (e.g., user menu or admin menu):
   → Set the title either:
     - In the group's `menu/_layout.tsx` using <Stack.Screen name="filename" options={{ title: 'Title' }} />
     - Or inline in the screen file using <Stack.Screen options={{ title: 'Title' }} />

3. Shared navigation components (rendered in both user and admin):
   → Use useSegments() with branch-based literal routes:
     - Check if segments[0] === '(admin)' or '(user)'
     - Return separate <Link> components with literal pathnames like '/(admin)/menu/[id]' or '/(user)/menu/[id]'
   → Example: ProductListItem.tsx

4. If something breaks, restore with:
   git reset --hard stable-working
   npx expo start -c


========================================
EXPO APP - DAILY WORKFLOW
========================================

1 FOR ANDRIOD STUDIO (EMULATOR):
----------------------------------------
1. Open Android Studio → Start emulator
2. Run: adb devices in cmd (to verify)

Terminal (every time):
  nvm use 18.20.8
  npx expo start
  Press a


2 FOR WIFI (PHONE):
----------------------------------------
Terminal (every time):
  nvm use 18.20.8
  npx expo start

Phone:
  Open Expo Go → Enter URL manually
  Type: exp://191.168.106.65:8081


3 FOR USB (PHONE):
----------------------------------------
1. Plug phone via USB
2. Enable USB Debugging on phone

Terminal:
  nvm use 18.20.8
  adb reverse tcp:8081 tcp:8081
  npx expo start

Phone:
  Scan QR code


========================================
GIT WORKFLOW - STEP BY STEP (EVERY DAY)
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


========================================
IF APP BREAKS – RESTORE TO WORKING STATE
========================================

 Restore from the stable tag:
  git reset --hard stable-working
  npx expo start -c


========================================
GIT BOOKMARK COMMANDS (REFERENCE)
========================================

Tag current working state:
  git tag stable-working

List all tags:
  git tag

Restore to working state later:
  git reset --hard stable-working

Push tags to GitHub (optional):
  git push --tags -f


========================================
TROUBLESHOOTING
========================================

If WiFi stops working:
1. Run "ipconfig" → check if IP changed
2. Type that IPv4 on your phone
3. If still not working, use USB method

If app shows "index" instead of "Menu":
1. Check src/app/(tabs)/index.tsx has the redirect
2. Check menu/_layout.tsx has title: 'Menu'
3. Run: npx expo start -c

If back button is missing:
1. Check [id].tsx has headerShown: true
2. Check ProductListItem uses Link (not router.replace)

========================================
IMPORTANT – commands.md is LOCAL ONLY
========================================
This file is ignored by Git. It will NEVER be pushed to GitHub.


For opening both emu devices:

Run npx expo start.

Press a to open pixel 6a

Press Shift + A then select pixel 4

