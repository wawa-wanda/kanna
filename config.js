// S C R I P T  O R I  B Y  @wanda.prasetya
// M A D E  B Y  Letta - Sama 🐰  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah Ta'Ala
// • Muhammad Saw
// • Wandaa Prasetya
// • Rominaru
// • Kannachann
// • The.Sad.Boy01
// • Rasel comel
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// Wajib diisi ya kak!, kalo ga punya biarin aja, biar ada creditsnya :v
global.sig = 'https://www.instagram.com/wnd.prfct'
global.sgh = 'https://github.com/wawa-wanda'
global.sgc = 'https://chat.whatsapp.com/EsIIgIYLoqqGM6WnMwdUaS'
global.sdc = " "
global.snh = 'https://nhentai.net/g/365296/'

/*============== PAYMENT ==============*/
global.pdana = '08975217200'
global.povo = '-'
global.pgopay = '-'
global.ppulsa = '08975217200'
global.ppulsa2 = '-'
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '6283850932073'
global.nomorown = '628975217200'
global.namebot = '𝐒𝐀𝐍𝐒 𝐁𝐎𝐓'
global.nameown = '𝚠𝚊𝚗𝚍𝚊 𝚙𝚛𝚊𝚜𝚎𝚝𝚢𝚊'


/*============== STAFF ==============*/
global.owner = [
  ['628975217200'],
  ['628975217200'],
  ['628975217200'],
  ['628975217200', '𝚠𝚊𝚗𝚍𝚊 𝚙𝚛𝚊𝚜𝚎𝚝𝚢𝚊', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'APIKEY',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'APIKEY',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                「 𝚂𝙰𝙽𝚂 𝙱𝙾𝚃 」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘𝙸𝚝𝚜 𝙼𝚎 𝚆𝚊𝚗˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ 𝙸𝚖 𝚂𝚊𝚗𝚜 𝙱𝚘𝚝'
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = '🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg'
global.thumbbc = 'https://telegra.ph/file/d389f4acafac741f6592c.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊✦ '                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `☂︎\n𝚂\n𝙰\n𝙽\n𝙱\na𝙾\n𝚃\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
