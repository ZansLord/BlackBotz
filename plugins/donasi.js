let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085654•••••••••]
┣➥ *Dana:* [085654•••••••••]
┣➥ *Gopay:* [085654•••••••••]
┣➥ *Ovo:* [0856•••••••••••]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/62856••••••••*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
