let handler = function (m) {
  // this.sendContact(m.chat, '6285869074622', 'Abdul Gans', m)
  conn.sendContact(m.chat, '6283167484147' , 'Aul Cans', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
