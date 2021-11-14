let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6285654792270
• *Telkomsel:* 6285654792270
• *Indosat:* 6285654792270

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/Uknowa_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285654792270', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler