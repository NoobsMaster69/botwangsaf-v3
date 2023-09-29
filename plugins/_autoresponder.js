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
const sentImages = new Set();

// ...

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return;

    // ...

    // Cek jika pesan pengguna mengandung kata "coca" dan gambar belum pernah dikirim
    if (m.text.toLowerCase().includes("coca") && !m.fromMe && !sentImages.has(m.chat)) {
        // URL gambar di Google Drive
        const imageUrl = 'https://drive.google.com/drive/u/1/folders/1QTzlA940cb_MnoMw3-XYAAVzUV-t0plu'; // Ganti dengan URL gambar Anda
    
        // Kirim gambar dari URL sebagai respons
        sendImageFromUrl(m, imageUrl);
    
        // Tambahkan chat ID ke set gambar yang sudah dikirim
        sentImages.add(m.chat);
    
        // Atur timeout untuk menghapus chat ID dari set setelah beberapa waktu (misalnya, 5 menit)
        setTimeout(() => {
            sentImages.delete(m.chat);
        }, 5 * 60 * 1000); // 5 menit
    }
    
    // ...
    
    // Fungsi untuk mengirim gambar dari URL
    function sendImageFromUrl(m, imageUrl) {
        // Kirim gambar dari URL sebagai respons
        conn.sendMessage(m.chat, {
            url: imageUrl,
            caption: "Ini adalah respons gambar untuk kata 'coca'",
            quoted: m,
        });
    }

    // ...
};

handler.limit = false
export default handler
