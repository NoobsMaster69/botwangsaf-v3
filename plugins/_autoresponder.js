import fs from 'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return


/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regj = /(.jadibotak)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = [
'🤖',
'🤖',
'🤖'
]
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `mau jadibot? Ketik .sewa ${jadibot}`, m)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// let regs = /(aku cinta kamu)/i
//     let isCintaKamu = regs.exec(m.text)
//     let cinmu = [
// '❤️',
// '🥰',
// '😍'
// ]
// let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
//     if (isCintaKamu && !m.fromMe) {
//     conn.sendMessage(m.chat, {
//         react: {
//           text: `${cintakamuh}`,
//           key: m.key,
//         }})
//    setTimeout(() => {
//         conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
//     }, 1000)
//     }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by arie - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

//     let regc = /(aku sayang kamu)/i
//     let isSayangKamu = regc.exec(m.text)
//     let saymu = [
// '❤️',
// '🥰',
// '😍'
// ]
// let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
//     if (isSayangKamu && !m.fromMe) {
//     conn.sendMessage(m.chat, {
//         react: {
//           text: `${sayangkamuh}`,
//           key: m.key,
//         }})
//    setTimeout(() => {
//         conn.reply(m.chat, `Aku juga sayang kamu ${sayangkamuh}`, m)
//     }, 1000)
//     }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by wh mods dev - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// let regh = /(woy botak)/i
//     let woybotak = regh.exec(m.text)
//     let woy = [
// '❤️',
// '🥰',
// '😍'
// ]
// let kerjabagus = woy[Math.floor(Math.random() * woy.length)]
//     if (woybotak && !m.fromMe) {
//     conn.sendMessage(m.chat, {
//         react: {
//           text: `${kerjabagus}`,
//           key: m.key,
//         }})
//    setTimeout(() => {
//         conn.reply(m.chat, `Kerja bagus ${kerjabagus}`, m)
//     }, 1000)
//     }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regsawit = /(Assalamualaikum)/i
    let sawit = regsawit.exec(m.text)
    let dalam = [
'',
'',
''
]
let pedalaman = dalam[Math.floor(Math.random() * dalam.length)]
    if (sawit && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${pedalaman}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Waalaikumsalam warahmatullahi wabarakatuh ${pedalaman}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
let memek = /(memek)/i
    let beban = memek.exec(m.text)
    let jriban = [
'',
'',
''
]
let epicabadi = jriban[Math.floor(Math.random() * jriban.length)]
    if (beban && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${epicabadi}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `عَنْ أَبِي الدَّرْدَاءِ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ لَيُبْغِضُ الفَاحِشَ البَذِيءَ

Dari Abu Ad-Darda’ radhiallahu ‘anhu bahwasanya Rasulullah ﷺ bersabda, “Sungguh Allah benci dengan orang yang lisannya kotor dan kasar ${epicabadi}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let kontol = /(kontol)/i
    let ampas = kontol.exec(m.text)
    let mipas = [
'',
'',
''
]
let xiaomiampas = mipas[Math.floor(Math.random() * mipas.length)]
    if (ampas && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${xiaomiampas}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `عَنْ أَبِي الدَّرْدَاءِ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ لَيُبْغِضُ الفَاحِشَ البَذِيءَ

Dari Abu Ad-Darda’ radhiallahu ‘anhu bahwasanya Rasulullah ﷺ bersabda, “Sungguh Allah benci dengan orang yang lisannya kotor dan kasar
 ${xiaomiampas}`, m)
    }, 1000)
    }
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    

}

handler.limit = false
export default handler
