let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya BLACKBOTZ`\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nLINK YT\nhttps://www.youtube.com/results?search_query=ZansLord\n\nSubscribe Me\nYT : ZANSLORD",
                        "description": "*©BLACKBOTZ 🅥*",
                        "buttonText": "SUBSCRIBE ZANSLORD 🅥",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nBY BLACKBOTZ 🅥",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nBY BLACKBOTZ 🅥",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nBY BLACKBOTZ 🅥",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nBY BlackBotz 🅥",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler