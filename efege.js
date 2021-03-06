//============ FG98 ============//
//
//       ๐ฉย ๐พย ๐ฑย ๐บย ๐ฝย 
//
//== ๊งโฆ๏ธโขโโ๏ธ๐๐ก๐จ๐๐ฅโก๏ธโ๏ธโขโโฆ๏ธ๊ง====//


//-- Whatsapp Connecting
const { 
  WAConnection,
  MessageType, 
  Presence, 
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  WA_DEAFULT_EPHEMERAL,
  mentionedJid,
  processTime, 
  ChatModification,
  whatsappID, 
  WAConnectionTest,
} = require('@adiwajshing/baileys');

//-- Function   
const {color, bgcolor} = require('./lib/color');
const {fetchJson, fetchText} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {_wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, close } = require('./lib/functions');


//-- Modules
const fs = require('fs');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
const path = require('path');
const {removeBackgroundFromImageFile} = require('remove.bg');
const gis = require('g-i-s');
const toMs = require('ms')
const { EmojiAPI } = require("emoji-api");
const request = require('request');
const emoji = new EmojiAPI()
const encodeUrl = require('encodeurl');
const {convertSticker} = require("./lib/swm.js")
const yts = require( 'yt-search')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
//-- 

//-- Data
const up = JSON.parse(fs.readFileSync('./data/setting.json'));
const _welcom = JSON.parse(fs.readFileSync('./data/welcom.json'));
const _user = JSON.parse(fs.readFileSync('./data/user.json'));
const _antilink = JSON.parse(fs.readFileSync('./data/antilink.json'));
const hit = JSON.parse(fs.readFileSync('./data/totalhit.json'))
const ban = JSON.parse(fs.readFileSync('./data/banned.json'))


//-- Media
const _stik = JSON.parse(fs.readFileSync('./media/stik.json'))
const _vid = JSON.parse(fs.readFileSync('./media/vid.json'))
const _vn = JSON.parse(fs.readFileSync('./media/vn.json'))
const _img = JSON.parse(fs.readFileSync('./media/image.json'))

//-- Resultados
const _verdad = JSON.parse(fs.readFileSync('./result/verdad.json'));
const _reto = JSON.parse(fs.readFileSync('./result/reto.json'));
const _hechos = JSON.parse(fs.readFileSync('./result/hechos.json'));
const _motivacion = JSON.parse(fs.readFileSync('./result/motivacion.json'));
const _citas = JSON.parse(fs.readFileSync('./result/citas.json'));
const _tonteria = JSON.parse(fs.readFileSync('./result/tonteria.json'));
const _hacker = JSON.parse(fs.readFileSync('./result/hacker.json'));
const { bahasa } = require('./result/kodebahasa');
const { negara } = require('./result/kodenegara');

//-- Report
const _informe = JSON.parse(fs.readFileSync('./report/informe.json'));
const _solicitud = JSON.parse(fs.readFileSync('./report/solicitud.json'));


//-- Help
const { menu, menu1, menu2, menuOwner, menuGrup} = require('./help/menu');
const { info } = require('./help/info');
const { termux } = require('./help/termux');
const { wait, stick, err, group, banf, ownerB, premi, userB, admin, Badmin, leveloff, lvlnul, pagado, fdiama, fgnsfw} = require('./help/respon');

//-- Setting
prefix = up.prefix 
const memberlimit = up.memberlimit;

//bloqueados
const banned = [
  ];
 
//nรบmero dueรฑo del bot
const ownerNumber = [
  "56994858890@s.whatsapp.net",
  ];

//*********** ๐๐ฃ๐๐๐๐ฌ ***********//
const Vkey = 'apivinz'
const Xinz = 'XinzBot'
const Pkode = 'pais'
const lolkey = '51762aa98877b6dc21112b1a' //estรก api puede cambiar, si tiene uno reemplace 

//-- Hora y fecha
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function tanggal(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}
 
//--Whatsapp empezar a conectar
async function starts() {
	const Fg = new WAConnection()
	Fg.logger.level = 'warn'
	Fg.on('qr', () => {
		console.log(color('[Jhoel]','aqua'), color("Escanee el codigo QR para conectarse...", "yellow"))
	})
	fs.existsSync('./session/FG98.json') && Fg.loadAuthInfo('./session/FG98.json')
Fg.on('connecting', () => {
        const time_connecting = moment.tz('America/La_Paz').format('HH:mm:ss')
        console.log(color('[Jhoel]','aqua'), color("Espere a que se conecte...", "yellow"))
    })
Fg.on('open', () => {
        const time_connect = moment.tz('America/La_Paz').format('HH:mm:ss')
        console.log(color('[Jhoel]','aqua'), color(`Conectado`, "aqua"))
        start('')
    })
	await Fg.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session/FG98.json', JSON.stringify(Fg.base64EncodedAuthInfo(), null, '\t'))
 
 
//-----๐๐๐๐ก๐ฉ๐๐ก๐๐๐ ๐ฌ ๐๐๐ฆ๐ฃ๐๐๐๐๐-----
Fg.on('group-participants-update', async (anu) => {
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Fg.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}\nBienvenido/a al Grupo *${mdata.subject}*
โฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ
โข *Pide las reglas del grupo*

โข Escriba *${prefix}verify* para comenzar a usar el Bot.`
				
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `โก *NUEVO ADMIN*
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ
โโฆโฑ *Nombre* : @${num.split('@')[0]}
โโฆโฑ *Nรบmero* : ${num.replace('@s.whatsapp.net', '')}
โโฆโฑ *Mensaje* : Felicidades  Admin ๐
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `โก *ADMIN DEGRADADO*
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ
โโฆโฑ *Nombre* : @${num.split('@')[0]}
โโฆโฑ *Nรบmero* : ${num.replace('@s.whatsapp.net', '')}
โโฆโฑ *Mensaje* : Lo siento :'v
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `_Adios @${num.split('@')[0]}_`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		const blocked = []
Fg.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	//-------------๐๐๐๐ ๐๐๐ ๐๐จ๐ง๐ข ๐๐๐ข๐ค๐จ๐๐ข -------------
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
Fg.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('Llamada recibida de '+ callerId)
Fg.sendMessage(callerId, 'โข Rompiste una de mis reglas *no me llame*\n\nโฆโฐโฐโฐโท *BLOQUEADO* โถ\nโโฆโฑโข *Lo siento* serรกs bloqueado\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\n\nโข Si es un error entra aquรญ para el desbloqueo\n\nwa.me/+56994858890', MessageType.text)
await sleep(4000)
await Fg.blockUser(callerId, 'add') // Usuario bloqueado
})

 
Fg.on('chat-update', async (mek) => {
  if (!mek.hasNewMessage) return
  mek = mek.messages.all()[0]
  if (!mek.message) return
  if (mek.key && mek.key.remoteJid == 'status@broadcast') return
  if (mek.key.fromMe) return
  global.prefix
  global.blocked
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const type = Object.keys(mek.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
  const jam = moment.tz('America/La_Paz').format('HH:mm')
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()

   mess = {
   	ferr: 'ใโใ Error! \nIntentalo de nuevo mas tarde'
   	}
   
const args = body.trim().split(/ +/).slice(1)
const value = args.join(' ') 
const tescuk = ["0@s.whatsapp.net"]
const totalchat = await Fg.chats.all()
const botNumber = Fg.user.jid
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
const isCmd = body.startsWith(prefix)
//-- Group Metadata
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? mek.participant : mek.key.remoteJid
  const groupMetadata = isGroup ? await Fg.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const isOwner = ownerNumber.includes(sender)
  const isVerify = _user.includes(sender)
  
  
  const isBan = blocked.includes(sender)
  
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isWelcom = isGroup ? _welcom.includes(from) : false
  const isAnti = isGroup ? _antilink.includes(from) : false
  const pushname = Fg.contacts[sender] != undefined ? Fg.contacts[sender].vname || Fg.contacts[sender].notify: undefined
const isBanned = ban.includes(sender)

//-- otros

			
  const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
  const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fg.user.phone


 

       //-- funciรณn de respuesta
			const reply = (teks) => {
				Fg.sendMessage(from, teks, text, {quoted:mek })
			}
			
			const sendMess = (hehe, teks) => {
				Fg.sendMessage(hehe, teks, text)
			}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Fg.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			//fake reply
      const replyimg = (pesan, tipe, rep1, rep2) => {
        Fg.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": `${rep1}`,
"fileLength": "201809",
"jpegThumbnail": `${rep2}` } } }})
      }
    
   //----------๐๐ ๐ข๐๐ ๐ ๐ฆ๐ง๐๐๐๐๐ฅ------------
   const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './media' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './media' + names + '.png'
                    let asw = './media' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Fg.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            //================ytdl=============
           const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('ใโใ Enviando');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Fg.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
      

			
//--MessageType
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')


//-------------๐ฆ๐ง๐๐๐๐๐ฅ ๐ ๐๐๐๐ฅ ---------
			function addMetadata(packname, author) {	
				if (!packname) packname = 'DyLux-FG'; if (!author) author = pushname ;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./exif/${name}.exif`)) return `./exif/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./exif/${name}.exif`, buffer, (err) => {	
					return `./exif/${name}.exif`	
				})	

			}
			
			

//--Colors
colors = ['red','white','black','blue','yellow','green']

//--Consola de registro de chat privado
if (!isGroup && isCmd) console.log(color('[Jhoel]','aqua'), "Pv", color(command, "blue"), "de", (sender.split('@')[0]),  args.length)
			
//--Consola de registro de grupo
if (isGroup && isCmd) console.log(color('[Jhoel]','aqua'), "Gp", color(command, "green"), "de", (sender.split('@')[0]), "en", (groupName), args.length)


//----------- ๐ฉ๐๐ฅ ๐๐๐ฅ๐๐๐ง๐๐ฅ๐ฬ๐ฆ๐ง๐๐๐๐ฆ---------

let Welcome_ = 'Off'
			if (isWelcom) {
			Welcome_ = 'On'
			}
let AntiLink_ = 'Off'
			if (isAnti) {
			AntiLink_ = 'On'
			}
			
			
			

//--- Total comandos
const cmdadd = () => {
	hit[0].totalcmd += 1
	fs.writeFileSync('./data/totalhit.json', JSON.stringify(hit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync('./data/totalhit.json'))[0].totalcmd

//--Members limete de grupos
if (isGroup) {
  try {
    const getmemex = groupMembers.length
    if (getmemex <= memberlimit) {
  Fg.sendMessage(from, `Lo sentimos, el grupo debe  tener  ${memberlimit} miembros, Adiรณs ๐๐ป invitame cuando  haya esa cantidad`, text)

    setTimeout(() => {
    Fg.groupLeave(from) // ur cods
  }, 5000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}


 
   
//-------๐๐จ๐ก๐๐๐ขฬ๐ก ๐๐ก๐ง๐ ๐๐๐ก๐ ๐ช๐๐๐ง๐ฆ๐๐ฃ๐ฃ------
const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
    if (!isBotGroupAdmins) return reply('๐ค Por suerte no soy  admin, asi que no te expulsare')
    linkgc = await Fg.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgc}`)) return reply('โฐ Menos mal que este enlace es de este grupo v:')
		if (isGroupAdmins) return reply(`โฐ Los *Admins* son libres ๐`)
		Fg.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('Adios')
		}, 1100)
		setTimeout( () => {
		Fg.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`ใโใ No permitimos enlaces de otros grupos!\nLo siento *${pushname}* seras expulsado`)
		}, 0)
	}
	
/*====================================================================*/
	
	
	



//-- Anti user ban
if (isCmd && isBan) return reply(banned())

//-- Leer automรกticamente si hay un mensaje
if (isCmd) Fg.chatRead(from)


//--๐๐จ๐ง๐ข ๐ฅ๐๐ฆ๐ฃ๐จ๐๐ฆ๐ง๐
        switch(is) {
 
case 'bot':
buf = fs.readFileSync(`./mp3/bot.mp3`)
Fg.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break

    
}  


//-- ๐๐ข๐ ๐๐ก๐๐ข๐ฆ
switch(command) {
  
//-- List menu
case 'menu':
case 'help':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
	uptime = process.uptime()
  capt = `Total Hits : ${reqcmd} \nโฃ Clasificacion : โโโโโ\nโฃ Usuarios : ${_user.length}`
  thum = await fs.readFileSync('./image/fg.jpeg').toString('base64')
 if (args.length < 1) return replyimg(menu(tanggal, jam, pushname, sender, Fg, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
  if (args[0] === '1' ) {
   return replyimg(menu1(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === '2' ) {
    return replyimg(menu2(prefix, tanggal, jam), text, capt, thum)
 } else if (args[0] === 'owner' ) {
    return replyimg(menuOwner(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'group' ) {
    return replyimg(menuGrup(prefix, tanggal, jam), text, capt, thum)
  }
          break
//-- informaciรณn bot
case 'info':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  uptime = process.uptime()
  reply(info(Fg, uptime, process, wa_version, mcc, mnc, os_version, device_manufacturer, device_model))
					break

//-- velocidad de respuesta
case 'speed':
case 'ping':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`๐ข *Velocidad* : ${latensi.toFixed(4)} _Segundos_`)
break

//cambio de Prefijo
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ownerB())
				  prefix = args[0]
					up.prefix = prefix
					fs.writeFileSync('./data/setting.json', JSON.stringify(up, null, '\t'))
					reply(`ใโใ Prefijo cambiado a  : *${prefix}*`)
					break


//-- Simsimi
case 'bot':
case 'simi':
if (!isVerify) return reply(userB(prefix))
		if (args.length < 1) return reply(`Hola ${pushname}`)
		sims = value
		simt = await fs.readFileSync('./img/fg.jpeg').toString('base64')
					try {
		anu = await fetchJson(`https://fdciabdul.tech/api/ayla/?pesan=${sims}`, {method: 'get'})
    jawab = anu.jawab
replyimg(jawab, text, sims, simt)
} catch (e) {
  reply(err())
  console.log('Error : %s', color(e, 'orange'))
}
break


  
//-- cรณdigo deidiomas

case 'idiomas':
case 'idioma':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  reply(bahasa())
  break




//--- Pregunta

case 'pregunta':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`โฐ Ejemplo: *${prefix}pregunta* soy feo?`)
apa = value
naon = ["Si","No","En efecto"," Tal vez","No lo se","Quizas","2 dias","Jamas", "Un domingo", "no lo hace", "es mas falso que el amor de ella"]
random = naon[Math.floor(Math.random() * (naon.length))]
apakah = `Pregunta : *${apa}*
Respuesta : ${random}`
reply(apakah)
break


//--- texto a voz
case 'tts': 
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
				if (args.length < 1) return Fg.sendMessage(from, `ใโใ Ingrese el cรณdigo de idioma y el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return Fg.sendMessage(from, `ใโใ Ingrese el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				dtt = body.slice(8)
				
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600
				? reply('ใโใ El texto es demasiado largo, tampoco de voy a leer la Biblia')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('ใโใ Lo siento ocurriรณ un error')
				Fg.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
break

//--- shipping

case 'shipping':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
    if (!isGroup) return reply(group())
					jds = []
					jdii = groupMembers
					koss = groupMembers
					akuu = jdii[Math.floor(Math.random() * jdii.length)]
				 diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*La pareja del dia* 
					
โโฏโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฎโ
@${akuu.jid.split('@')[0]}
โค๏ธ
@${diaa.jid.split('@')[0]}
โโฏโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฎโ`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	

//--- guapo

case 'guapo':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `El mas *Guapo* del grupo es  @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- guapa
case 'guapa':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `La mas  *Hermosa* del grupo es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- feo

case 'feo':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `El mas *Feo* del grupo es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- sadboy
case 'sadboy':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `El  *Chico triste* del grupo es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- sadgirl
case 'sadgirl':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `La *Chica triste* del grupo es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break

//--- tag random
case 'random':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `ใโใ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break



//-- Piedra papel o tijera 
case 'suit':
case 'ppt':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (args.length < 1) return reply(`โฐ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix + command}* papel`)
					if (args[0] === 'tijera' ) {
					  gunting = [
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Tijera*\nโโฆโฑDyLux *Papel*\nโโฆโฑGanaste๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Tijera*\nโโฆโฑDyLux *Piedra*\nโโฆโฑPerdiste F ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Tijera*\nโโฆโฑDyLux *Tijera*\nโโฆโฑEmpate ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'papel') {
					  ker = [
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Papel*\nโโฆโฑDyLux *Piedra*\nโโฆโฑGanaste๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Papel*\nโโฆโฑDyLux *Tijera*\nโโฆโฑPerdiste ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Papel*\nโโฆโฑDyLux *Papel*\nโโฆโฑEmpate ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'piedra') {
					  bat = [
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Piedra*\nโโฆโฑDyLux *Tijera*\nโโฆโฑGanaste๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Piedra*\nโโฆโฑDyLux *Papel*\nโโฆโฑTe gane jsjs ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ",
					    "โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโโฆโฑTu *Piedra*\nโโฆโฑDyLux *Piedra*\nโโฆโฑEmpate ๐\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('โฐ Seleccione piedra/papel/tijera')
					}
break

//-- Verdad 

case 'verdad':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`โฃ *Verdad*\n${verdad}`)
break

//-- Tod reto
case 'reto':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`โฃ *Reto*\n${reto}`)
break

//-- citas citas
case 'citas':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const citas = _citas[Math.floor(Math.random() * _citas.length)]
  reply(citas)
break

//-- frases motivacionales 
case 'motivacion':
case 'motivaciรณn':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const motivacion = _motivacion[Math.floor(Math.random() * _motivacion.length)]
  reply(motivacion)
break

//-- Tonterias
case 'tonterias':
case 'tonterรญas':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const tonteria = _tonteria[Math.floor(Math.random() * _tonteria.length)]
  reply(tonteria)
break

//-- hacker
case 'hacker':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const hacker = _hacker[Math.floor(Math.random() * _hacker.length)]
  reply(hacker)
break

//-- hechos - curiosidades 
case 'hechos':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const hechos = _hechos[Math.floor(Math.random() * _hechos.length)]
  reply(hechos)
break


//--Frases

case 'frases':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const pantunn =['La vida empieza cada cinco minutos','El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo"z','Lo que uno puede llegar a ser, uno debe serlo','El poder de la imaginaciรณn nos hace infinitos','ยกSeamos realistas, pidamos lo imposible!','La libertad muere si no se usa','Donde las palabras fallan la mรบsica habla','No se puede encontrar la paz evitando la vida','La vida es como el jazz... mejor si es improvisada','Todo lo que se puede imaginar es real','El conocimiento es un antรญdoto para el miedo','El amor es un humo hecho con los vapores de los suspiros','Un buen viajante no tiene planes','Lo que no puedo crear, no lo entiendo','De las dificultades nacen milagros','El amor es un mejor maestro que el deber','La vida es la flor de la que el amor es la miel','Mira atrรกs y sonrรญe ante los peligros pasados','Vivimos en un arcoiris de caos','A veces el corazรณn ve lo que es invisible a los ojos','Donde hay amor hay vida','Una vez aceptamos nuestros lรญmites, vamos mรกs allรก de ello','Escucha de vez en cuando; es fascinante lo que puedes llegar a oรญr','El placer es estropeado con frecuencia por el simple hecho de describirlo','El amor estรก compuesto por un alma habitando dos cuerpos','Cuanto mรกs hacemos, mรกs podemos hacer','El tiempo pasado en compaรฑรญa de gatos nunca es tiempo malgastado','Un amigo es alguien con quien te atreves a ser tรบ mism']
const pengirim = pantunn[Math.floor(Math.random() * pantunn.length)]
Fg.sendMessage(from, pengirim, text, { quoted: mek })
break  

//-- link whatsapp
case 'wame':
case 'wa.me':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					reply(`*Link WhatsApp:* wa.me/${sender.split('@')[0]}\n*O*\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break

//-- habla como el bot
case 'say':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
sendMess(from, value)
break

//-- copiar texto en imagen
case 'ocr':
  if (!isVerify) return reply(userB(prefix))
 
  if (isBanned) return reply(banf())
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Fg.downloadAndSaveMediaMessage(encmedia)
			
			reply(wait())
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							  
							.catch(err => {
								reply(err(prefix))
								fs.unlinkSync(media)
							})
					} else {
						reply('โฐ Responde o envรญa una imagen con texto')
					}
		break

//-- Convertir MP4 a mp3 
case 'tomp3':

                if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

					if (!isQuotedVideo) return reply('โฐ Responde a un video')
					reply(wait())
					
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error al convertir video a mp3')
						bufferlkj = fs.readFileSync(ran)
						Fg.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
						  
					})
					
					break

//-- audio lento
case 'slow':
  if (!isQuotedAudio) return reply('โฐ Responde a un audio')
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						  
					})
					
				break

//-- audio voz grueso 
case 'gemuk':
  if (!isQuotedAudio) return reply('Responde a un audio')
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						  
					})
					
				break

//-- tupai
case 'tupai':
  if (!isQuotedAudio) return reply('Responde a un audio')
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						  
					})
					
				break

//-- to vn
case 'tovn':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (!isQuotedAudio) return reply('Responde un audio')
  
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo convertir el audio a ptt')
						topt = fs.readFileSync(ran)
						Fg.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
					break

//--- bass
case 'bass': 
  if (!isQuotedAudio) return reply('Responde un audio')
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						  
					})
					
				break

//--- nighcore
case 'nightcore':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 //   if (!isPrem) return reply(premi())

	if (!isQuotedAudio) return reply('Responde un audio')
					night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					core = await Fg.downloadAndSaveMediaMessage(night)
					ran = getRandom('.mp3')
					
					reply(wait())
					exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(core)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
						fs.unlinkSync(ran)
						  
					   })
					
				       break

//-- add stiker
case 'gets': 
case 'getstick': 
case 'getstik':

if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
			  if (args.length < 1) return reply(`Ingrese el nombre de la pegatina, si no sabe vea la lista con *${prefix}liststick*`)
				stik = value
				try {
				result = fs.readFileSync(`./media/stick/${stik}.webp`)
				Fg.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('ใโใ El paquete no esta registrado')
				}
				 
				break

//--- Lista de Stickers guardados
case 'liststik':
case 'liststick':
case 'liststicker':
case 'liststickers':
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		teks = `โก *STICKER PACK*\nUsa el comando *${prefix}gets* para usar una pegatina\n*Total* : ${_stik.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let stik of _stik) {
	    teks += `โโฆโฑโฆโฏ ${stik}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    reply(teks.trim())
				break

//-- aรฑadir stickers
case 'addstik':
case 'addstick':
case 'addsticker':
case 'addstickers':
				if (!isQuotedSticker) return reply('Responde a un stikers')
				if (!isOwner) return reply(ownerB())
				stik = value
				if (!stik) return reply('Ponle un nombre al sticker')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Fg.downloadMediaMessage(boij)
				_stik.push(`${stik}`)
				fs.writeFileSync(`./media/stick/${stik}.webp`, delb)
				fs.writeFileSync('./media/stik.json', JSON.stringify(_stik))
				Fg.sendMessage(from, `ใโใ La pegatina se aรฑadio con exito\npara comprobar escriba ${prefix}liststick`, MessageType.text, { quoted: mek })
				 
				break

//--- menambah vn
case 'addvn':
				if (!isQuotedAudio) return reply('โฐ Responde  a un adio')
				if (!isOwner) return reply(ownerB())
				vn = value
				if (!vn) return reply('๐งฟ Nombre del audio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Fg.downloadMediaMessage(boij)
				_vn.push(`${vn}`)
				fs.writeFileSync(`./media/audio/${vn}.mp3`, delb)
				fs.writeFileSync('./media/vn.json', JSON.stringify(_vn))
				Fg.sendMessage(from, `ใโใ El audio se guardo\nPara ver la lista use ${prefix}listvn`, MessageType.text, { quoted: mek })
				 
				break

//--- mengambil vn
case 'getvn':

if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
			  if (args.length < 1) return reply(`Tambien ingrese el nombre vn en ${prefix}listvn`)
				vn = value
				try {
				buffer = fs.readFileSync(`./media/audio/${vn}.mp3`)
				Fg.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('ใโใ No se encontro el audio')
				}
				 
				break

//-- list vn
case 'listvn':
case 'vnlist':

if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
      teks = ` โก *PACK AUDIOS*\nPara usar escriba *${prefix}getvn* escoje una de la lista de audios\n*Total* : ${_vn.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let vn of _vn) {
	    teks += `โโฆโฑโฆโฏ ${vn}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    reply(teks.trim())
				break

//-- Aรฑadir una imagen
			case 'addimg':
				if (!isQuotedImage && isMedia) return reply('Responde una imagen')
				if (!isOwner) return reply(ownerB())
				img = value
				if (!img) return reply('Pon un nombre a la imagen')
				fto = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Fg.downloadMediaMessage(fto)
				_img.push(`${img}`)
				fs.writeFileSync(`./media/foto/${img}.jpeg`, delb)
				fs.writeFileSync('./media/image.json', JSON.stringify(_img))
				Fg.sendMessage(from, `ใโใ Se guardo la imagen\nPara ver escriba *${prefix}listimg*`, MessageType.text, { quoted: mek })
				 
				break

//--- Enviar una imagen guardada
			case 'getimg':
			
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
			  if (args.length < 1) return reply(`๐ Escribe el nombre de la imagen, para ver la lista use *${prefix}listimg*`)
				img = value
				try {
				buffer = fs.readFileSync(`./media/foto/${img}.jpeg`)
				Fg.sendMessage(from, buffer, image, { quoted: mek })
				} catch {
				  reply('โฐ El paquete no estรก registrado')
				}
				 
				break

//--- lista de imรกgenes
			case 'listimg':
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				teks = ` โก *PACK IMAGENES*\n Para enviar una imagen use *${prefix}getimg* Toma una imagen\n*Total* : ${_img.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let img of _img) {
	    teks += `โโฆโฑโฆโฏ ${img}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    reply(teks.trim())
				break

//--- Aรฑadir videos
			case 'addvid':
			  if (!isOwner) return reply(ownerB())
				if (!isQuotedVideo && isMedia) return reply('Responde a un video')
				vid = value
				if (!vid) return reply('Dale un nombre al video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Fg.downloadMediaMessage(boij)
				_vid.push(`${vid}`)
				fs.writeFileSync(`./media/video/${vid}.mp4`, delb)
				fs.writeFileSync('./media/vid.json', JSON.stringify(_vid))
				Fg.sendMessage(from, `ใโใ El video se guardo correctamente\nPara ver escriba *${prefix}listvid*`, MessageType.text, { quoted: mek })
				
				break

//--- Usar un video guardado
			case 'getvid':
			  if (args.length < 1) return reply(`Ingrese el nombre del video, aqui una lista *${prefix}listvid*`)
				vid = value
				try {
				buffer = fs.readFileSync(`./media/video/${vid}.mp4`)
				Fg.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('No se encontro el video')
				}
				 
				break

//--lista de vรญdeos 
			case 'listvid':
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				teks = ` โก *VIDEO PACK*\nPara enviar un video use *${prefix}getvid* nombre video\n*Total* : ${_vid.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let vid of _vid) {
	    teks += `โโฆโฑโฆโฏ ${vid}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    reply(teks.trim())
				 
				break

//-- sticker maker
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Fg.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('DyLux', 'FG98')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									Fg.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Fg.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`ใโใ Fallรณ, en el momento de la conversiรณn ${tipe} a la pegatina`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('DyLux', 'FG98')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									Fg.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`โฐ Envia una imagen con *${prefix + command}* o etiqueta una imagen que se haya enviado\n*Videos 1-9 segundos*`)
					}
					break

//-- stiker a image

					
					case 'toimg':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isQuotedSticker) return reply('โฐ Responde a un sticker')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ใโใ Error al convertir pegatinas en imagenes ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {quoted: mek, caption: 'ใโใ Aqui tienes'})
						fs.unlinkSync(ran)
					})
					break
					
					

//-- Dueรฑo del bot
case 'owner':
case 'creator':
case 'creador':

    nomor = '56994858890@s.whatsapp.net'
    owner = await fs.readFileSync('./image/fg.jpeg').toString('base64')
    capt = "Desarrollador\nOwner: ๊งโฆ๏ธโขโโ๏ธ๐๐ก๐จ๐๐ฅโก๏ธโ๏ธโขโโฆ๏ธ๊ง\nBOT : DyLux"
    const been = {
    text: `ใโใ @${nomor.split("@")[0]} Aqui mi dueรฑo, solo chatea si es necesario`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
replyimg(been, text, capt, owner)
break

//--borrar chats del bot
case 'clearchat':
		if (!isOwner) return reply(ownerB())
		anu = await Fg.chats.all()
		list_chat = await Fg.chats.all()
    for (let chat of list_chat) {
    Fg.modifyChat(chat.jid, "delete")
    }
    reply("๐ borre todos mis chats")
   break

//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins && !isOwner) return reply(admin())
					members_id = []
		teks = `โข Grupo : *${groupName}*\nโข Miembros : *${groupMetadata.participants.length}*\nโข Mensaje : ${value}\nโฆโฐโฐโฐโท *MENCIONES* โถ\n`
			for (let mem of groupMembers) {
				teks += `โโฆโฑโฆโฏ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
		teks += `โฆโฐโฐโฐโฐโฐโช Dylux โ แดฎแดผแต โชโฐโฐโฐโฐโฐโฐโฐ`
			mentions(teks, members_id, true)
			break

//-- Lista de Bloqueados
case 'blocklist':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
      teks = ` โก *BLOQUEADOS*\nLos siguientes nรบmeros son una lista de nรบmeros bloqueados por infringir las reglas y enviar spam al Bot\n\n*Total* : ${blocked.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let block of blocked) {
	    teks += `โโฆโฑ @${block.split('@')[0]}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break


case 'ban':
				if (!isOwner) return reply(ownerB())
				if (args.length < 1) return reply(`โฐ A quien quieres que banee?`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
					
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`ใโใ @${mentioned[0].split('@')[0]} ha sido baneado!\n\nEste usuario no podrรก volver a usar mis comandos`, mentioned, true)
					}
					
					break
				
		        case 'unban':
				if (!isOwner) return reply(ownerB())
				if (args.length < 1) return reply(`โฐ Menciona al usuario para desbanear!`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
				
				if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`ใโใ @${mentioned[0].split('@')[0]} ha sido Desbaneado`, mentioned, true)
					}
					break 

//-- Lista de baneados por el bot
case 'banlist':
  if (!isVerify) return reply(userB(prefix))
      teks = ` โก *BANEADOS*\nLos siguientes nรบmeros son una lista de nรบmeros baneados por infringir las reglas o enviar spam al Bot\n\n*Total* : ${ban.length}\nโฆโฐโฐโฐโท *LISTA* โถ\n`
	    for (let baned of ban) {
	    teks += `โโฆโฑโฆโฏ @${baned.split('@')[0]}\n`
					}
	    teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
	    Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break

//-- Reportes
case 'report':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
report = `  โก *INFORMACION*
Solicite e informe las funciones de error en el bot, asegรบrese de proporcionar un informe correcto y claro !

โฆโฐโฐโฐโท *REPORTES* โถ
โโฆโฑโฆโฏ *${prefix}Solicitud (Texto)*
โโฆโฑโฆโฏ *${prefix}Informe (Texto)*
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ

*Total*
Solicitudes : ${_solicitud.length}
Informes : ${_informe.length}

โ o puede ponerse en contacto con el propietario para obtener mรกs informaciรณn.`
reply(report)
break


//--- Pedidos solicitud
case 'pedido':
case 'solicitud':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  yoi = value
  if (args.length < 1) return reply('โฐ Ingrese las funciones que desee en el Bot *DyLux*')
  if (yoi.length > 200 ) return reply('El texto supera el lรญmite, su solicitud es rechazada !')
  _solicitud.push(yoi)
  fs.writeFileSync('./report/solicitud.json', JSON.stringify(_solicitud))
  reply(`ใโใ Gracias *${pushname}*, Su solicitud ha sido almacenada en la base de datos.`)
  
	break

//--- informes - bugs 

case 'informe':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  yoi = value
  if (args.length < 1) return reply('โฐ Ingrese el nombre de la funciรณn de error que ocurre cuando la prueba')
  if (yoi.length > 200) return reply('El texto supera el lรญmite, su solicitud es rechazada!')
  _informe.push(yoi)
  fs.writeFileSync('./report/informe.json', JSON.stringify(_informe))
  reply(`ใโใ Gracias *${pushname}*, Su informe se ha almacenado en la base de datos`)
	break

//-- lista de informes 
case 'verinformes':
case 'informes':
			if (!isOwner) return reply(ownerB())
				teks = ` โก *INFORMES*\nLa siguiente es una lista de informes recibidos en la fecha *${tanggal()}* con la cantidad de informes *${_informe.length}*\n\nโฆโฐโฐโฐโท *LISTA* โถ\n`
				for (let lap of _informe) {
					teks += `โโฆโฑโฆโฏ ${lap}\n`
				}
				teks  += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
				reply(teks.trim())
				break

//-- lista de solicitudes
case 'versolicitudes':
case 'solicitudes':
			if (!isOwner) return reply(ownerB())
				teks = ` โก *SOLICITUDES*\nLa siguiente es una lista de solicitudes recibidas en la fecha *${tanggal()}* con la cantidad de solicitudes *${_solicitud.length}*\n\nโฆโฐโฐโฐโท *LISTA* โถ\n`
				for (let req of _solicitud) {
					teks += `โโฆโฑโฆโฏ ${req}\n`
				}
				teks  += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
				reply(teks.trim())
				break

//--- Lista de administradores del grupo
case 'adminlist':
case 'listadmin':
case 'staff':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					teks = `โข *STAFF DEL GRUPO* _${groupMetadata.subject}_\nTotal : ${groupAdmins.length}\n\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโท\n`
			
					for (let admin of groupAdmins) {
						teks += `โโฆโฑโฆโฏ @${admin.split('@')[0]}\n`
					}
					teks += `โฆโฐโฐโฐโฐโช Dylux โ แดฎแดผแต โชโฐโฐโฐโฐ`
					mentions(teks, groupAdmins, true)
					break

case 'listonline':
case 'online':
case 'enlinea':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
  
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
        
			    let online = [...Object.keys(Fg.chats.get(ido).presences), Fg.user.jid]
			    Fg.sendMessage(from, 'En linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*ยฉPOWERED BY Dylux โ แดฎแดผแต*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
    
			    })
			    
				break

//--- abrir y cerrar grupo
					case 'grup':
					case 'grupo':
					case 'group':
					if (!isVerify) return reply(userB(prefix))
                    if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`Para abrir grupo : *${prefix}group* open\npara cerrar grupo : *${prefix}group* close`)
					if (args[0] === 'open') {
					    reply(`ใโใ Grupo abierto ahora *todos los participantes* pueden escribir`)
						Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`ใโใ Grupo cerrado ahora *solo los admin* pueden escribir`)
						Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
	
//--- Aรฑadir a un usuario al grupo
case 'add':
				  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				  
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply('โฐ Ingrese el nรบmero')
					if (args[0].startsWith('08')) return reply('Use cรณdigo de paรญs')
					if (args[0].startsWith('+5')) return reply('โฐ Use el cรณdigo de paรญs sin +')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Fg.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('ใโใ No se pudo agregar, tal vez porque es privado')
					}
					break

//--- Eliminar a un miembro
case 'kick':
			    if (!isVerify) return reply(userB(prefix))
  
			 // if (!isOwner) return reply('*ใโใ Comando en mantenimiento* โ ๏ธ')
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien quieres que elimine? mencionalo ๐')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'ใโใ รrdenes recibidas, emitidas :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupRemove(from, mentioned)
					} else {
						mentions(`ใโใ Ordenes recibidas, emitidas : @${mentioned[0].split('@')[0]}`, mentioned, true)
				 Fg.groupRemove(from, mentioned)
					}
					break

//-- Dar admin 
case 'promote':
case 'promover':
case 'rol':
				  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('โฐ Mencione al usuario para promoverlo a administrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'ใโใ Pedidos recibidos, te conviertes en administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`ใโใ Ahora @${mentioned[0].split('@')[0]} Es un admin del grupo *${groupMetadata.subject}*`, mentioned, true)
						Fg.groupMakeAdmin(from, mentioned)
					}
					break


//-- Bajar posiciones - quitar admin
case 'demote':
case 'degradar':
case 'delrol':
			    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona al al usuario para degradarlo')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'ใโใ Pedido recibido, puesto de administrador degradado :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`ใโใ Admin degradado : @${mentioned[0].split('@')[0]} Se convierte en miembro, Lo sentimos ๐`, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					}
		break

//-- link del grupo
case 'linkgroup':
case 'linkgrupo':
case 'link':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
				if (!isBotGroupAdmins) return reply(Badmin())
				linkgc = await Fg.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink del Grupo *${groupName}*`
				Fg.sendMessage(from, yeh, text, {quoted: mek})
				break

//-- Notification al grupo
case 'notif':
case 'notify':
if (!isGroup) return reply(group())
    if (!isGroupAdmins && !isOwner) return reply(admin())
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    
    if (args.length < 1) return reply(`Cual es el mensaje?`)
    teks = `Anuncio de  @${sender.split("@")[0]}\n*Mensaje* : ${value}`
    gc = await Fg.groupMetadata(from);
    member = gc['participants']
    jids = [];
    member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Fg.sendMessage(from, options, text)
break

//Hidetag 

case 'here':
case 'hidetag':
    if (!isGroup) return reply(group())
    if (!isGroupAdmins && !isOwner) return reply(admin())
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

    teks = value
    gc = await Fg.groupMetadata(from);
    member = gc['participants']
    jids = [];
    member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Fg.sendMessage(from, options, text)
break



//-- Bot sale del grupo
case 'leave': 
case 'salir':

    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
				    if (!isGroupAdmins && !isOwner) return reply(admin())
				anu = await Fg.groupLeave(from, `Adios *${groupMetadata.subject}*`, groupId)
				break

//-- cambie icono del grupo
case 'setppgc':
case 'seticongp':
case 'seticon':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
				if (!isGroupAdmins && !isOwner) return reply(admin())
				if (!isBotGroupAdmins) return reply(Badmin())
				if (!isQuotedImage && isMedia) return reply('Responde la foto que quieres hacer del perfil del grupo')
				try {
				media = await Fg.downloadAndSaveMediaMessage(mek)
				await Fg.updateProfilePicture (from, media)
				reply(wait())
				reply(`ใโใ  La foto de perfil del grupo se modificรณ correctamente *${groupMetadata.subject}*`)
				} catch (e) {
				  reply('Lo siento ocurriรณ un error inesperado')
				}
			break

//-- Clona un perfil para el bot
case 'clone':
case 'clonar':
        if (!isOwner) return reply(ownerB())
		if (!isGroup) return reply(group())
		if (args.length < 1) return reply('โฐ Menciona a quien quieres que clone su perfil ๐')
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a quiere quieres que clone su perfil ๐')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Fg.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Fg.updateProfilePicture(botNumber, buffer)
						mentions(`ใโใ Foto de perfil actualizada correctamente usando la foto de perfil de : @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('ใโใ Lo siento ocurrio un error')
					}
		break

//-- Transmite el mensaje con todos los usuarios y grupos 
                case 'bc':
					case 'tx': 
					 if (!isOwner) return reply(ownerB())
					if (args.length < 1) return reply('โฐ Que quieres transmitir?')
					anu = await Fg.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Fg.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fg.sendMessage(_.jid, buff, image, {caption: `*TRANSMISIรN โ STAFF*\nโโโโโโโโโโโโโโโโโ\n\n${body.slice(4)}`})
						}
						reply('*ใโใ Transmision realizada* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*TRANSMISIรN โ STAFF*\nโโโโโโโโโโโโโโโโโ\n\n${body.slice(4)}`)
						}
						reply('*ใโใ Transmision realizada* ')
					}
					break
					
					


//-- Total usuarios
case 'totaluser':
case 'totalusuarios':
  if (!isOwner) return reply(ownerB())
					teks = `โข Usuarios Verificados\nโข Total Usuarios : *${_user.length}*\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\n`
					no = 0
					for (let hehehe of _user) {
						no += 1
						teks += `โโฆโฑโฆโฏ @${hehehe.split('@')[0]}\n`
					}
					teks += `โฆโฐโฐโฐโฐโฐโช *${Fg.user.name}* โชโฐโฐโฐโฐโฐโฐโฐ`
					Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": _user}})
					break

//-- Eliminar mensaje del bot
case 'delete':
case 'del':

if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup)return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					try {
					Fg.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					  reply('ใโใ *Solo puedo borrar mensajes mรญos*')
					}
					break

//VERIFICACIรN 
          case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar': 
			if (isVerify) return reply(' โฐ *Tu cuenta ya estรก en mi base de datos* ๐')
					
				_user.push(sender)
fs.writeFileSync('./data/user.json', JSON.stringify(_user))
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

			capt = `โฆโฐโฐใ *VERIFICADO* ใ
โโฆโฑ *Nombre:* _${pushname}_
โโฆโฑ *Num:* _wa.me/${sender.split("@")[0]}_
โโฆโฑ *Hora:* _${jam}_
โโฆโฑ *Usuarios Verificados:* _${_user.length}_
โฐโฐโฐโฐโฐโฐใ *${Fg.user.name}* ใ
\nVerificaciรณn completa usa *${prefix}Help* para ver el Menu`

daftarimg = await getBuffer(ppimg)
Fg.sendMessage(from, daftarimg, image, {quoted: mek, caption: capt})
break

//--- Bienvenida on/off
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		if (!isGroup) return reply(group())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`โฐ *BIENVENIDAS*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
		if ((args[0]) === '1') {
		if (isWelcom) return reply('โฐ Bienvenida ya esta activa')
						_welcom.push(from)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`ใโใ La funciรณn de bienvenida se activo en el grupo *${groupMetadata.subject}*`)
		} else if ((args[0]) === '0') {
		if (!isWelcom) return reply('โฐ Bienvenida ya esta desactivada')
						_welcom.splice(from, 1)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`ใโใ La funciรณn de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`โฐ *BIENVENIDAS*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					}
		break

//--- on/off antilink WhatsApp 
				case 'antilink':
				case 'antilinkwha':
				case 'antilinkwhatsapp':
				if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`โฐ *ANTILINK WHATSAPP*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					if ((args[0]) === '1') {
						if (isAnti) return reply('โฐ Antilink ya estรก activo')
						_antilink.push(from)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`ใโใ Se activo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						if (!isAnti) return reply('โฐ Antilink ya estรก desactivado')
						_antilink.splice(from, 1)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`ใโใ Se desactivo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`โฐ *ANTILINK WHATSAPP*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					}
					break
					
					
//--- aรฑadir verdad 

case 'addverdad':
  if (!isOwner) return reply(ownerB())
  tru = value
  if (args.length < 1) return reply('?? Escribe el texto')
  _verdad.push(tru)
  fs.writeFileSync('./result/verdad.json', JSON.stringify(_verdad))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir reto 

case 'addreto':
  if (!isOwner) return reply(ownerB())
  dar = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _reto.push(dar)
  fs.writeFileSync('./result/reto.json', JSON.stringify(_reto))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir motivacion

case 'addmotivacion':
case 'addmotivaciรณn':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _motivacion.push(stat)
  fs.writeFileSync('./result/motivacion.json', JSON.stringify(_motivacion))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir hechos 

case 'addhecho':
case 'addhechos':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _hechos.push(stat)
  fs.writeFileSync('./resutl/hechos.json', JSON.stringify(_hechos))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir citas

case 'addcita':
case 'addcitas':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _citas.push(stat)
  fs.writeFileSync('./result/citas.json', JSON.stringify(_citas))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir tonterรญas 

case 'addtonteria':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _tonteria.push(stat)
  fs.writeFileSync('./result/tonteria.json', JSON.stringify(_tonteria))
  reply(`ใโใ Hecho`)
  break

//--- aรฑadir hacker
case 'addhacker':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('๐ Escribe el texto')
  _hacker.push(stat)
  fs.writeFileSync('./result/hacker.json', JSON.stringify(_hacker))
  reply(`ใโใ Hecho`)
  break



//-- Termux
case 'termux':
case 'install':
case 'instalar':
  if (!isOwner) return reply(ownerB())
	const cmd = value
  if (args.length < 1) return reply(termux())
	exec(cmd, (err, stdout) => {
	if(err) return Fg.sendMessage(from, `*Root Term*\n ${err}`, text, { quoted: mek })
	if (stdout) {
	Fg.sendMessage(from, stdout, text)
		}
	})
break
case 'ttp':  
                  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())     
                    if (args.length < 1) return reply(`โฐ _Envie el texto_\n\n๐Ejemplo *${prefix}ttp* DyLux`)
                    reply(wait())
                    F = body.slice(5)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
                    
                    case 'attp':
	              if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

					if (args.length < 1) return reply(`โฐ _Envie el texto_\n\n๐Ejemplo *${prefix + command}* DyLux`)
					  reply(wait())
					
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					  
break
					
					case 'attp2':  
                  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())     
                    if (args.length < 1) return reply(`โฐ _Envie el texto_\n\n๐Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = body.slice(7)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
                    
                    //descargar imgane 

   case 'image':
   case 'imagen':
   case 'img':
            if (!isVerify) return reply(userB(prefix))

  if (isBanned) return reply(banf())
if (args.length < 1) return reply('ใโใ Que quieres que busque?')
            const gimg = args.join('');
            try {
            reply(wait())
            
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Fg.sendMessage(from,{url:images},image,{quoted: mek, caption: `ใโใ Aqui tienes : *${gimg}*`})
            });
            
            } catch {
  	reply(mess.ferr)
  }
   break
   
     //nombre free fire 
		case 'nickff':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
	Fg.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
	teks = '=================\n'
	for (let i of data.result) {
	teks += `*Nick* : ${i}\n=================\n`
					}
	reply(teks.trim())
	break 
	
	  //chat leer mรกs 
  case 'leermas':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
Fg.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`ใโใ Entrada de texto\nEjem : ${prefix + command} hola= que hacen`)
tels = body.slice(9)
var teks1 = tels.split("=")[0];
var teks2 = tels.split("=")[1];
hasil = `${teks1}อออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออ${teks2}`
Fg.sendMessage(from, hasil, text, {
  quoted: mek
})
break 

case 'play':
			
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

  if (args.length < 1) return reply(`โณ๏ธ *Ingresa el tรญtulo de una canciรณn*\n\n๐Ejemplo *${prefix + command}* Rosas`)
  reply(wait())
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                  	
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*๐ถMusica encontrada*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp3\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค Enviando archivos, espere si el audio no aparece, descargue por el link_`)
                        const captions = `*๐ถMusica encontrada*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp3\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค Enviando archivos, espere si el audio no aparece, descargue por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api) }
                        
                   break

		
//si el play falla
                  case 'play2':
                 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`โณ๏ธ *Ingresa el tรญtulo de una canciรณn*\n\n๐Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())

                playfg = value
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${playfg}&apikey=hamilton49`)
                if (anu.error) return reply(anu.error)
                infomp3 = `
*๐ถMusica encontrada*
โฃ *๐Tรญtulo* : ${anu.result.title}
โฃ *๐ฎ Fuente :* ${anu.result.source}
โฃ *โ๏ธTamaรฑo* : ${anu.result.size}
โฃ *๐ Link* : ${anu.result.url_audio}
_๐ค Enviando, espere si el audio no aparece, descargue por el link_`

                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Fg.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break		
//YouTube Descargas
  case 'ytmp3':
              if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

					if (args.length < 1) return reply(`โฐ Use en comando mรกs el link de YouTube\n\n๐ Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(err(prefix))
				try {
				reply(wait()) 
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
					
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*ใโใ Descarga Completa*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp3\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค El archivo se estรก enviando, si no llega descargue por el link_`)
				const captions = `*ใโใ Descarga Completa*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp3\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค El archivo se estรก enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)}
				
				break
 		case 'ytmp4':
				 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

					if (args.length < 1) return reply(`โฐ Use en comando mรกs el link de YouTube\n\n๐ Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(err(prefix))
				try {
				reply(wait()) 
				ytv(args[0])
				.then((res) => {
					
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*ใโใ Descarga Completa*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp4\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค El archivo se estรก enviando, si no llega descargue por el link_`)
				const captionsYtmp4 = `*ใโใ Descarga Completa*\n\nโฃ *๐Tรญtulo* : ${title}\n*๐Ext* : mp4\nโฃ *โ๏ธTamaรฑo* : ${filesizeF}\nโฃ *๐ Link* : ${a.data}\n\n_๐ค El archivo se estรก enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				
				break

//respuesta falsa
case 'fake':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())

if (args.length < 1) return reply(`โฐ *Uso del comamdo* :\n${prefix}fake @tag=msj=msjbot\n\n๐ *Ejemplo* : \n${prefix}fake @tagmember=hola=hola que hace`)
var gh = body.slice(7)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("=")[0];
var target = gh.split("=")[1];
var bot = gh.split("=")[2];
Fg.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
  
break

case 'dueรฑogrupo':
  case 'dueรฑogp':
 case 'ownergroup':
		case 'creadorgrupo':
		case 'ownergp':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
 Fg.updatePresence(from, Presence.composing)
   options = {
    text: `ใโใ Este es el nรบmero del Creador de grupo : wa.me/${from.split("-")[0]}`,
   contextInfo: { mentionedJid: [from] }
    }
   Fg.sendMessage(from, options, text, { quoted: mek } )
				break	
				
				
 case 'runtime':    
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
					runtime = process.uptime()
					runte = `ใ *TIEMPO DE EJECUCION* ใ\n\n*${kyun(runtime)}*`
					reply(`${runte}`)
					break
					
					case '3dtext':
				
				if (args.length < 1) return reply(`โฐ Ingrese el texto\n๐ Ejemplo : ${prefix}3dtext DyLux`)
			    defg = body.slice(8)
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
                	reply(wait())
                Fg.sendMessage(from, data, image, {quoted: mek, caption: `ใโใ Listo : *${defg}*`})
                
                break
                
                case 'ytsearch':
    	 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  
				
                    if (args.length < 1) return reply(`โฐ Ejemplo : ${prefix + command} Lil Peep`)
                    reply(wait())
				
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `๐ Tรญtulo : ${x.title}\n`
                        ini_txt += `๐จ๐ปโ๐ป Vistas : ${x.views}\n`
                        ini_txt += `๐ค Publicado : ${x.published}\n`
                        ini_txt += `๐ Miniaturas : ${x.thumbnail}\n`
                        ini_txt += `๐ Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                      
                    break
                    
                    case 'igstalk':
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())

                   if (args.length < 1) return reply(`โฐ Escriba un Nombre de Usuario\n\n๐Ejemplo : *${prefix + command}* fg98._`)
                   yolo = body.slice(9) 
try {
hmm = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${yolo}?apikey=${lolkey}`)
reply(wait())

buffer = await getBuffer(hmm.result.photo_profile)
hasil = `โฆโฐโฐใ *STALKING* ใ\nโโฃ *๐Username* : ${hmm.result.username}\nโโฃ *๐Nombre Completo* : ${hmm.result.fullname}\nโโฃ *๐ฅSeguidores* : ${hmm.result.followers}\nโโฃ *๐ซSiguiendo* : ${hmm.result.following}\nโโฃ *๐Bio* : ${hmm.result.bio}\nโโฃ *๐Link* : https://www.instagram.com/${hmm.result.username}\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ `
Fg.sendMessage(from, buffer, image, {
  quoted: mek, caption: hasil
}) 
  
} catch {
  reply(mess.ferr)
}

break

case 'fakedonald':
        if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 

                    if (args.length < 1) return reply(`โฐ Ejemplo : ${prefix + command} DyLux`)
                    reply(wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    Fg.sendMessage(from, ini_buffer, image, { quoted: mek })
                      
                    break
                    
                    case 'soporte':
case 'support':
 if (!isVerify) return reply(userB(prefix))

      reply(`๐ *Grupo de soporte*\n\nhttps://chat.whatsapp.com`) 
   break
   
   case 'topgay':
try{
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
                   if (!isGroup) return reply(group())
             
d = []


teks = 'โก ๐ณ๏ธโ๐ *TOP 10 GAYS*\n Estรก es una lista de los mรกs gays del grupo\nโฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\n' 
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `โโฆโฑโฆโฏ๐ณ๏ธโ๐ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
teks += `โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`
mentions(teks, d, true)

  
  
} catch (e) {
console.log(e)
reply('ใโใ Ocurriรณ un error inesperado intente de nuevo')

}
break

case 'hoy':
                   case 'hora' :
                   if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())

                   reply(`โข Hora ${jam}\nโข ${tanggal()}`)
                   break              
                   
                   case 'dog':  
                  if (!isVerify) return reply(userB(prefix))
                     if (isBanned) return reply(banf())
                   reply(wait())
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Fg.sendMessage(from, anu1, image, {caption: `ใโใ Aquรญ, se parece a ti`, quoted: mek})
                   break
       case 'cat':  
              if (!isVerify) return reply(userB(prefix))
                     if (isBanned) return reply(banf())
                reply(wait())
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Fg.sendMessage(from, anu1, image, {caption: `ใโใ Aquรญ, se parece a ti`, quoted: mek})
                   break
                   
                   case 'igfoto':       
                 case 'igvideo':                      	  
                   if (!isVerify) return reply(userB(prefix))
                     if (isBanned) return reply(banf())
                     
                    if (args.length < 1) return reply(`โฐ Ingrese un link de una foto o video de Instagram`)
                    reply(wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${ini_url}`)
                    
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        Fg.sendMessage(from, ini_buffer, ini_type, {quoted: mek })
                    }
                    
                    break
                   
                   case 'emoji':
                   case 'semoji':
                   case 'smoji':
                   if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
              
			if (args.length < 1) return reply(`*EMOJI A STICKER*\nโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ\nโฐ Ingrese el emoji\n\n๐ Ejemplo : *${prefix + command}* ๐\n\n\nAlias del comando\n${prefix}emoji\n${prefix}semoji\n${prefix}smoji`)
			reply(wait())
                    
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply('ใโใ Por favor ingrese solo un emoji'); 
            })
            
    		break
    
    case 'qrcode':  
              if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                   if (args.length < 1) return reply(`โฐ Ingrese el Texto`)  
                   reply(wait())
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   Fg.sendMessage(from, anu, image, {caption: `ใโใ Texto convertido en Codigo Qr`, quoted: mek})
                   break
                 
                 //logo
                  case 'wall':   
               if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                   if (args.length < 1) return reply(`โฐ Ingrese el texto\n\n๐ Ejemplo *${prefix + command}* DyLux`)
                   F = body.slice(6)
                   reply(wait())
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=Alphabott&text=${F}`)
                   Fg.sendMessage(from, anu, image, {caption: `ใโใAquรญ *${F}*`, quoted: mek})
                   break  
                   
                   
                    case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break
		case  'gay':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break
		case  'glass':
		case  'vidrio':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break
		case  'passed':
		case  'aprobado':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break
					
		case  'jail':
		case  'celda':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
					break 
		
					
					case 'red':
					case 'rojo':
		if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('ใโใ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('๐ค Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('โฐ Envia o responde a una imagen')
					}
				 break
				
				//robar stickers
				case 'take':
         case 'takestick':
         case 'robar':
         if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                   
if (!isQuotedSticker) return reply(`โฐ Responde a un sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nombre=Autor\n\n๐Ejemplo *${prefix + command}* Memes=XD`)
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = value
var pack = kls.split("=")[0];
var author2 = kls.split("=")[1];
if (!value) return reply(`โฐ Uso del comamdo\n\n*${prefix + command}* Nombre=Autor`)
if (!pack) return reply(`ใโใ Porfavor escribe bien el formato:\n*${prefix + command}* nombre=autor`)
if (!author2) return reply(`ใโใ Porfavor escribe bien el formato:\n*${prefix + command}* nombre=autor`)
reply(wait())
const dlfile = await Fg.downloadMediaMessage(encmediats)

const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');

Fg.sendMessage(from, imageBuffer, sticker, {quoted: mek})

break

case 'profile':
					case 'perfil':
					case 'itsme':
					   if (!isVerify) return reply(userB(prefix))
                       if (isBanned) return reply(banf())  
					Fg.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
					}
					 profile = `โฆโฐโฐโฐโฐใ *PERFIL* ใ
โโข *๐ Nombre:* ${pushname}
โโข *๐ Link:* wa.me/${sender.split("@")[0]}
โฆโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐโฐ`

					buffer = await getBuffer(ppimg)

					Fg.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
				
				///-------------------------------------------
				
				//Actualiza a รบltimo cambio del repositorio de github 
				case 'actualizar':
case 'update':
if (!isOwner) return reply(ownerB())
reply(`โฐ Espere un momento el bot se estรก actualizando`)
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`ใโใ *El bot se ah actualizado de forma satisfactoria*\n Informe de la actualizaciรณn:\n\n${stdout}\n\n Los cambios serรกn reflejados la prรณxima vez que inicie el bot.`)
})
break


		
		
		
				
//---- ver una web
	case 'view':
  case 'fetch':
  case 'result':
  if (!isOwner) return reply(ownerB())
teks = args.join(` `)
let res = await fetchText(teks)
reply(res)
break




	default:
				//comando no registrado
				
				/*if (body.startsWith(`${prefix + command}`)) {
  reply(`โข Hola *${pushname}*\nโโโโโโโโโโโโโโโ\nโโผ ใโใ *${prefix + command}* No estรก en mi lista de Menu\nโโผ๐๏ธ Escribe *${prefix}Help* para ver el Menu\nโโโโโโโโโโโโโโโ`)
				}*/
				

}
	})
}
starts()

//prรณximamente...

         
