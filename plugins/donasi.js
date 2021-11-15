let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [6285869074622]
┣➥ *Dana:* [6285869074622]
┣➥ *Gopay:* [6285869074622]
┣➥ *Ovo:* [6285869074622]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/+6285869074622*
┃ > *give me a stars in github:*
┃ > *https://github.com/ZansLord* 
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
