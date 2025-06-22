## For Termux/Ubuntu/SSH User

```bash
pkg update && pkg upgrade
pkg install git -y
pkg install nodejs-lts
pkg install ffmpeg -y
git clone https://github.com/xziyyy/clairity.git
cd clairity
npm install
```

[RECOMMENDED INSTALL ON TERMUX]
```bash
pkg install yarn
yarn
```

Run
```bash
npm start
```
Editing on Termux
```bash
npm install mc -y
mc
```

edit other in ./media/settings/config.js
```bash
global.ownerNumber = [`${global.owner}`,'no2','no3'] // no owner can access all features
global.email = '@gmail.com' // leave blank if you don't have one
global.web = 'https://' // leave blank if you don't have one
global.location = 'Banten' // fill in your area or place of residence if you don't want to leave it blank
global.packname = 'clairiry' // wm on the sticker
global.author = 'created by xZiyy' // wm on the sticker

```

edit Owner in ./media/settings/ownerConfig.js
``` bash
ID: disana kalian bisa mengubah number owner dan nama bot
EN: there you can change the owner number and bot name
```

edit Menu List in ./media/settings/menu.js
```bash
ID: disana kalian bisa mengubah menu list dan button menu
EN: there you can change the menu list and menu buttons
```

License: [MIT](https://choosealicense.com/licenses/mit/)
