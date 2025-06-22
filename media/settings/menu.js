const fs = require('fs')
// ! JANGAN DELETE CREDITS UNTUK MENGHARGAI DEVELOPER

//=========[ TAMPILAN MENU NO BUTTON ]============\\
global.createMenu = (data) => {
    const {
        ucapanWaktu,
        botname,
        latensie,
        datauser,
        runtime,
        process,
        hariini,
        wib,
        wita,
        wit,
        menuCategories,
        prefix,
        ownername
    } = data;

    return `
Hai haii ${ucapanWaktu} 👋

*[ I N F O - B O T ]*
*Name*: ${botname}
*Version*: up 1.4.0
*Speed*: ${latensie.toFixed(4)} detik
*totalUser*: ${datauser.length}
*Runtime*: ${runtime(process.uptime())}

*[ T I M E ]*
*hariini*: ${hariini}
*wib*: ${wib}
*wita*: ${wita}
*wit*: ${wit}

${menuCategories}


┏─『 \`OTHER MENU\` 』
│ ⿻ ${prefix}mainmenu
│ ⿻ ${prefix}robloxmenu
│ ⿻ ${prefix}ownermenu
│ ⿻ ${prefix}makermenu
│ ⿻ ${prefix}stickermenu
│ ⿻ ${prefix}downloadmenu
│ ⿻ ${prefix}searchmenu
│ ⿻ ${prefix}beritamenu
│ ⿻ ${prefix}stalkmenu
│ ⿻ ${prefix}primbonmenu
│ ⿻ ${prefix}gamemenu
│ ⿻ ${prefix}toolsmenu
│ ⿻ ${prefix}menusetting
│ ⿻ ${prefix}adminsetting
│ ⿻ ${prefix}menusewa
┗─────────────❐

┏─ *TQ TO:*
│   - ${ownername} (owner)
│   - xZiyy
│   - yanzdev
│   - Siputzx Api
│   - Clairity Api
│   - And All Creator
┗─────────────❐

    `;
};

//=========[ TAMPILAN MENU BUTTON LIST ]============\\

global.createMenuButton = (data) => {
    const {
        botname,
        latensie,
        datauser,
        menuCategoriess,
        prefix,
        ownername
    } = data;

    return `
┌──[ 📌 INFO BOT ]───
│ 🌟 Nama: ${botname}
│ 🚀 Speed: ${latensie.toFixed(4)} detik
│ 👥 Users: ${datauser.length}
└────────────────

${menuCategoriess}

🏷 *OTHER MENU*
</> ${prefix}mainmenu
</> ${prefix}robloxmenu
</> ${prefix}ownermenu
</> ${prefix}makermenu
</> ${prefix}stickermenu
</> ${prefix}downloadmenu
</> ${prefix}searchmenu
</> ${prefix}beritamenu
</> ${prefix}stalkmenu
</> ${prefix}primbonmenu
</> ${prefix}gamemenu
</> ${prefix}toolsmenu
</> ${prefix}menusetting
</> ${prefix}adminsetting
</> ${prefix}menusewa

┏─ *TQ TO:*
│   - ${ownername} (owner)
│   - xZiyy
│   - yanzdev
│   - Siputzx Api
│   - Clairity Api
│   - And All Creator
┗─────────────❐
> click the button to get script
    `;
};

//=========[ BUTTON LIST ONLY ]============\\
global.buttonConfig = {
//=========[ HATI HATI NGUBAHNYA ]============\\
    mainButtons: [
        {
            buttonId: `#owner`,
            buttonText: {
                displayText: 'Owner'
            },
        },
        {
            buttonId: `#listsewa`,
            buttonText: {
                displayText: "Sewa Bot"
            },
        },
        {
            buttonId: `#script`,
            buttonText: {
                displayText: "script"
            },
        }
    ],

//=========[ HATI HATI NGUBAHNYA ]============\\
    menuCategories: [
        { command: 'mainmenu', title: 'Main Menu', description: 'Menu utama bot' },
        { command: 'robloxmenu', title: 'Roblox Menu', description: 'Menu khusus Roblox' },
        { command: 'ownermenu', title: 'Owner Menu', description: 'Menu khusus owner' },
        { command: 'makermenu', title: 'Maker Menu', description: 'Menu pembuat konten' },
        { command: 'stickermenu', title: 'Sticker Menu', description: 'Menu stiker' },
        { command: 'downloadmenu', title: 'Download Menu', description: 'Menu download' },
        { command: 'searchmenu', title: 'Search Menu', description: 'Menu pencarian' },
        { command: 'beritamenu', title: 'Berita Menu', description: 'Menu berita' },
        { command: 'stalkmenu', title: 'Stalk Menu', description: 'Menu stalking' },
        { command: 'primbonmenu', title: 'Primbon Menu', description: 'Menu primbon' },
        { command: 'gamemenu', title: 'Game Menu', description: 'Menu permainan' },
        { command: 'toolsmenu', title: 'Tools Menu', description: 'Menu tools' },
        { command: 'menusetting', title: 'Menu Setting', description: 'Pengaturan menu' },
        { command: 'adminsetting', title: 'Admin Setting', description: 'Pengaturan admin' },
        { command: 'menusewa', title: 'Menu Sewa', description: 'Menu sewa bot' }
    ],

    // Konfigurasi flow action
    flowActionConfig: {
        buttonText: 'Lihat Menu Lengkap',
        title: "Menu Bot",
        sectionTitle: "Daftar Menu"
    }
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})