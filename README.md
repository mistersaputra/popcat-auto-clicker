# Popcat Auto Clicker
Script for auto click on popcat's website by KaptenTekno

## How to Use the Popcat Hack Auto Click Script

### Step 1: Visit popcat.click

Firstly, open your preferred web browser and go to https://popcat.click.

### Step 2: Access the Developer Console

Depending on your browser, you can access the developer console using these keyboard shortcuts:

- Chrome: Press CTRL + SHIFT + J
- Firefox: Press CTRL + SHIFT + K
- Safari: Press CTRL + ALT + I
- Opera: Press CTRL + SHIFT + I
- Step 3: Copy and Paste the Script

Copy the script code provided below and paste it into the browser's console. Then, press Enter.
```
var max = 30;
var min = max - 10;
var event = new KeyboardEvent('keydown', {
   key: 'g',
   ctrlKey: true
});

let random = 0;
setInterval(function(){
   random = Math.random() * (max - min) + min;
   for (i = 0; i < random; i++) {
      document.dispatchEvent(event);
   }
}, 1000);
```
To stop the script, simply refresh your browser. If you wish to increase the number of clicks to 1000 per second, change the value of 'max' to 1000. However, keep in mind that this will surpass the maximum allowed clicks per second, and your clicks won't be counted.

## Source
- English: [How to Hack Popcat Click Automatically Every Second](https://kaptentekno.com/how-to-hack-popcat-click-automatically-every-second)
- Bahasa Indonesia: [Cara Hack Popcat Klik Otomatis 10.000 Kali Tiap Detik](https://kaptentekno.com/cara-hack-popcat-klik-otomatis-10000-kali-tiap-detik)
