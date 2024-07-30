const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙐𝙂 𝘽𝙊𝙏"
global.ownerName = "✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙐𝙂 𝘽𝙊𝙏"
global.ownerBot = "923074060856"
global.ownerNumber = ["923074060856"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

// Admin Create Panel
global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙐𝙂 𝘽𝙊𝙏" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})