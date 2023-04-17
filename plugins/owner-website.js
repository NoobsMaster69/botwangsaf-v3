import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Owner Website 」*

AIO INDEX -> rens.my.id
Data Base Flm -> https://drivekj.my.id/0:/
Uptime -> uptime.ryzn.my.id

----------------------
APA COBA
----------------------

Film -> https://drivekj.my.id/0:/Data/Film%20&%20Tv%20Series/
Software -> https://drivekj.my.id/0:/Data/Software%20&%20OS/
`.trim()
  m.reply(caption)
}
handler.help = ['website']
handler.tags = ['main']
handler.command = /^(website)$/i
handler.limit = false

export default handler
