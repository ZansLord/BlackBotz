function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6285869074622', 'AbdulZans', m)
stc = conn.sendContact(m.chat, '6285869074622', 'AbdulZans', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer Z A N S  B O T *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler
