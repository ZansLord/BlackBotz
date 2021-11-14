                                                                                                                                                                                                                                                                /*

❗❗🇧 🇦 🇨 🇦    🇧 🇦 🇳 🇬  ❗❗

❗MAU NGAPAIN DEK ? UDAH LAHH LU CUMA NUMPANG DOANG DI SINI !!!
❗MAU UBAH CONSOLE YAA ? AWOKWOKWOK LU CUMA NUMPANG DI SINI DEK NTAR DI DISCONNECT NANGISS 
❗BIARIN AE CONSOLE NYA GINI NTR ERROR SALAHIN GW NGOTAK BANG !!!


❗ERROR ? MAKANYA JANGAN DI GANTI DEK !!!
❗INTI NYA GINI AJA KALO DI DISCONNECTIN SAMA BASE NYA JANGAN SALAHIN GUE KARENA LO CUMA NUMPANG DI SINI !!
❗TERLANJUR DI UBAH ? DOWNLOAD ULANG SC NYA BIAR KUOTA LU ABIS !!!

🖤 THANKS TO :
❤ NURUTOMO
❤ SENKU ARD
❤ ALAN BOTZ
❤ ZERO BOTZ
❤ FERNAZER
❤ ARIFI RAZZAQ
❤ PENYEDIA REST API && MODULE 

HARGAI PEMBUAT CASE INI BANG 

TQ DAH GA DI GANTI 🙏
────────────────────────────────────────────────────────────────────────────────────────                                                                                                                                                                                                                                                                */
console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('AlanBOTZ\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`Subscribe MakasarCyberGhost`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
