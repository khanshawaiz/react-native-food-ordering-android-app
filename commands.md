========================================
EXPO APP - DAILY WORKFLOW
========================================

1 FOR Andriod Studio :
----------------------------------------
Run emulator on Andriod Studio
Run: adb devices in cmd

Terminal (every time):
  nvm use 18.20.8
  npx expo start
  Press a


2 FOR WIFI :
----------------------------------------
Terminal (every time):
  nvm use 18.20.8
  npx expo start

Phone:
  Open Expo Go → Enter URL manually
  Type: exp://191.168.106.65:8081



3 FOR USB:
----------------------------------------
1. Plug phone via USB
2. Enable USB Debugging on phone

Terminal:
  nvm use 18.20.8
 adb reverse tcp:8081 tcp:8081
  npx expo start

Phone:
  Scan QR code


4 AFTER CODING:
----------------------------------------
git add .
git commit -m "Your message"
git push


⚠️ TROUBLESHOOTING:
----------------------------------------
If WiFi stops working:
1. Run "ipconfig" → check if IP changed
2. Type that IPv4 on your phone:
3. If still not working, use USB method

========================================