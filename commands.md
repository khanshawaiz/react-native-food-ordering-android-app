========================================
EXPO APP - DAILY WORKFLOW
========================================

1️⃣ FOR WIFI :
----------------------------------------
Terminal (every time):
  nvm use 18.20.8
  npx expo start

Phone:
  Open Expo Go → Enter URL manually
  Type: exp://191.168.106.65:8081



2️⃣ FOR USB:
----------------------------------------
1. Plug phone via USB
2. Enable USB Debugging on phone

Terminal:
  nvm use 18.20.8
  C:\Users\Shawaiz\Downloads\platform-tools\adb.exe reverse tcp:8081 tcp:8081
  npx expo start

Phone:
  Scan QR code


3️⃣ AFTER CODING:
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