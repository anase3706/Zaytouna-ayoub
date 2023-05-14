const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~af217TY0Afe4270decfc1a07dddfcfb3401d', //your ssid to run bot
    MONGO_URL : process.env.MONGO_URL,//must be enter your mongo url;
    HEROKU: {
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
    },
    BASE_URL : "https://inrl-web.onrender.com/",
    TUTORIAL : "https://youtube.com/@noureddineouafy2",
    PMB_MSG : "pm msgs isn't allowed",
    PMBC_MSG : "pm call isn't allowed",
    AUTOMUTE_MSG : "_group will been muted at @time_",
    AUTOUNMUTE_MSG : "_group will unmute at @time_",
    GIT : "http://instagram.com/ayoub_189000",
    WAGRP : 'http://instagram.com/ayoub_189000',
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "true"),
    REACT : toBool(process.env.REACT || "true"),
    AUTO_BIO : toBool(process.env.AUTO_BIO || "true"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : toBool(process.env.STATUS_VIEW || "true"),
    READ_CHAT : toBool(process.env.READ_CHAT ||  "false"),
    AUTO_CHAT_PM : toBool(process.env.AUTO_CHAT_PM || "false"),
    AUTO_CHAT_GRP : toBool(process.env.AUTO_CHAT_GRP || "false"),
    FOOTER : process.env.FOOTER || "ayoub-ᴍᴅ",
    PASSWORD : process.env.PASSWORD || 'inrl-bot~md',
    WARNCOUND : process.env.WARNCOUND || 5,
    ALIVE_DATA : process.env.ALIVE_DATA || "$text>_iam alive now &sender_",
    BOT_INFO : process.env.BOT_INFO || "212605784394;INRL-BOT-MD;INRL;https://telegra.ph/file/2948bed0167dbbb54d3ac.jpg",
    WORKTYPE : process.env.WORKTYPE || "public",
    PREFIX : process.env.PREFIX || false,
    WELCOME_MSG : process.env.WELCOME_MSG || "$text>_hey bro/sis_ *&user*\nthanks for join;$image>&pp;",
    EXIT_MSG : process.env.EXIT_MSG || "$text>_goodbye _ *&user*;$image>&pp;",
    LANG : process.env.LANG || "en",
    BLOCK_CHAT : process.env.BLOCK_CHAT || "jid@g.us, jid2@g.us",//set chat similarly
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    AUDIO_DATA : process.env.AUDIO_DATA || "ᴍᴜꜱɪᴄ;ᴋɪᴅ;https://telegra.ph/file/2948bed0167dbbb54d3ac.jpg",
    STICKER_DATA : process.env.AUDIO_DATA || "zaytouna;bot",
    INSTAGRAM :  process.env.INSTAGRAM || "nullX",
    CAPTION : process.env.CAPTION || "created by http://instagram.com/ayoub_189000",
    SUDO : process.env.SUDO || "212672801381"
};
