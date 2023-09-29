import fs from 'fs'
import axios from 'axios';
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

Dari Abu Ad-Darda’ radhiallahu ‘anhu bahwasanya Rasulullah ﷺ bersabda, “Sungguh Allah benci dengan orang yang lisannya kotor dan kasar ${epicabadi}`, m)
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

Dari Abu Ad-Darda’ radhiallahu ‘anhu bahwasanya Rasulullah ﷺ bersabda, “Sungguh Allah benci dengan orang yang lisannya kotor dan kasar
 ${xiaomiampas}`, m)
    }, 1000)
    }
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    

}
const imageUrls = [
    'https://drive.google.com/file/d/17UV0_EvPt_wh01gkDCmgrgkSk5kL2h5Y/view?usp=drive_link',
    'https://drive.google.com/file/d/1Em7EC40cfMkoEcKB-wRTDyeep8yL9_5u/view?usp=drive_link',
    // Tambahkan URL gambar lainnya di sini
  ];
  
  // Fungsi untuk mengirim gambar dari URL
  async function sendRandomImage(chatId, conn) {
    try {
      // Pilih secara acak salah satu URL gambar
      const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
      // Kirim gambar dari URL sebagai respons
      conn.sendMessage(chatId, {
        url: randomImageUrl,
        caption: "Ini adalah respons gambar untuk kata 'coca'",
      });
    } catch (error) {
      console.error('Error sending image:', error);
    }
  }
  
  // Handler untuk semua pesan
  const handler = async (m, { isBlocked, conn }) => {
    if (isBlocked) return;
  
    // Cek jika pesan pengguna mengandung kata "coca" dan gambar belum pernah dikirim
    if (m.text.toLowerCase().includes("coca") && !m.fromMe) {
      // Kirim gambar secara acak dari Google Drive
      sendRandomImage(m.chat, conn);
    }

    // ...
};

handler.limit = false
export default handler
