
<div align="center">
<img src="https://i.ibb.co/QQDXr17/20211031-234304-1-3.jpg" alt="ZansBotz" width="500" />

# **Black Botz**

> ZansBotz is a multipurpose WhatsApp bot using adiwajshing/baileys library!
>
>

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/ZansLord"><img src="https://i.ibb.co/XyChcGQ/20211102-192101.jpg" height="128" width="128" /></a>
  <a href="https://github.com/adiwajshing"><img src="https://i.ibb.co/LhCtVR1/20211108-163050.jpg" height="128" width="128" /></a>
  <a href="https://github.com/naylachan"><img src="https://i.ibb.co/T2gyJhn/20211014-163216-transcpr.jpg" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/ZansLord"><img title="Author" src="https://img.shields.io/badge/Author-ZansLord-purple.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/ZansLord/BlackBotz"><img title="Stars" src="https://img.shields.io/github/stars/Zanslord/BlackBotz?color=red&style=flat-square" /></a>
  <a href="https://github.com/ZansLord/BlackBotz/network/members"><img title="Forks" src="https://img.shields.io/github/forks/ZansLord/BlackBotz?color=red&style=flat-square" /></a>
  <a href="https://github.com/ZansLord/BlackBotz/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/ZansLord/BlackBotz?label=watchers&color=blue&style=flat-square" /></a> <br>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img">Installation</a> •
  <a href="https://github.com/ZansLord/BlackBotz#thanks-to">Thanks to</a> •


<h4 align="center">
  <a href="https://chat.whatsapp.com/LTL9J5K0dxp65WspruIQuW">Join WA BTMCI!</a>
</h4>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [Tesseract](https://s.id/vftesseract)
* Any text editor

# Installation
## 📝 Cloning this repo
```cmd
> git clone https://github.com/ZansLord/ZansBotzV2.git
> cd ZansBotzV2
```

## ✍️ Editing the file
Edit the required value in `CONFIG.JS/OWNER.JS / BUTTON.JS / MENU.JS / DONASI.JS `.
```json
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['Isi Link Groub kamu']
global.channelYT = ['https://www.youtube.com/results?search_query=makasarcyberghost'] 
global.owner = ['6285654792270']// Put your number here
global.mods = ['6285654792270'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

...
function handler(m) {
stc = conn.sendContact(m.chat, '6285718366706', 'ZANS BOTZ', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer Z A N S  B O T *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler

......


   
```

`ownerBot`: your WhatsApp number.  
`prefix`: based on the latest update, you don't need to change the prefix, because this bot has multiple prefix.  
`lol`: LolHuman API key. You can get it [here](https://lolhuman.herokuapp.com/) by creating an account.  
`authorStick`: name of the author sticker pack.  
`packStick`: name of the sticker pack.  


## 🧾 Installing the Tesseract
* Download the file [here](https://s.id/vftesseract).
* After that, run downloaded file as Administrator.
* Complete the installation.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\Program Files\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```cmd
> tesseract -version
```

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start main.js
> pm2 monit
```

PM2 WITH ATTACH:
```cm d
> pm2 start main.js --attach
```

PM2 with cron job (restart after 5 hours):
```cmd
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

After that scan the QR code using your WhatsApp in your phone!

# Thanks to
* [`adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`uukina`](https://github.com/uukina)
* [`MrPawNO`](https://github.com/MrPawNO)
* [`Pahri123`](https://github.com/Pahri123)
* [`LeviathanH`](https://github.com/LeviathanH)
* [`ferlitopym`](https://github.com/ferlitopym)
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`VirusLauncher`](https://github.com/VirusLauncher)
* [`shansekai`](https://github.com/shansekai)
* [`Baguettou`](https://github.com/Baguettou)
* [`HAFizh-15`](https://github.com/HAFizh-15)
* [`TheSploit`](https://github.com/TheSploit)
* [`rashidsiregar28`](https://github.com/rashidsiregar28)
* [`irham01`](https://github.com/irham01)
* [`hardiantojek93`](https://github.com/hardiantojek93)
* [`gamingrkp`](https://github.com/gamingrkp)
* [`Hexagonz`](https://github.com/hexagonz)
* [`DITTAZ`](https://youtu.be/TXzHMehgQJM)
