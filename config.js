//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "2250101142246";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09kOExYNU9MOUNOTk5HNzJCMGM4ZlJvYWZuRlZwditHTGF2dnlzTnVXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjIxZzAwRXZzUDIzWmIzd1FuLzFsU3RWOFNOWWFpZ2ZqVkV2UHZscURTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQTJGZmFOQ1VpWDAxNldXT3R6V0ZOWUNqRWoyMjJlc2ZvSlFjTUwrYzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrcU1MWUxuamJMUTNwV0QzdW1HOU45dTVkU093dldZMHRNcXh6N0l6YzBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPZ0F3R05td1JIQ3VZTFBaWWVHQWdIM3VIcjA2ZzhFMzhlcm9yVUNFWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPUUZQNjRkUld1TVhRcENkN2NkUmFaWVUwaTdPbWZMMzNYL0dTMGhVV3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZzQzFYNE43YnlXcXJIcW8yMzhnMGxBQU9lcmFzSC92UzQ0bm5LSHRYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkV4b0dnanpkZzVqb01INlljZzJZRnlvVUJJTHVoT3UvSWFTWTFtckZSRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRVMDhJdnladS9pRVN5Uk81WFNmZVl2dWhFZXdXSFN1cmE1NjRwdHczcSt3VlU1enRoaFg4clM0Z0g2NEcxdzJ2SnlzZXp2SGl4WHJzMFRWMkloU0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJJQ1EramdBUVlnRnBQRnFXaHZPdUpPTHVHd0JqZGU1cm5hVTdvTVVMQkZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAxMTQyMjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFERThDMDNDRDU3OTA1MEYwM0VFNUY1QUVCRjc4MTY2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1ODQ5MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAxMTQyMjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc1MTY4NDBCQ0Q2NkNFMTg4QkZCQURFN0I3NTU3MkZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1ODQ5MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAxMTQyMjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCN0U0N0E2NjUyMkY4RDM5MTlDNDM0REY4RjFGMDc5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1ODQ5MTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTAxMTQyMjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBNTU5RDM0RUU3ODY4NkZDMEM5NTVCQTc1QkY0MTlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1ODQ5MTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkV1QzF5SXgtUkVLb3VjNU5JUzNuUXciLCJwaG9uZUlkIjoiMzY3YWRjYmItZTBhYS00NGJhLWIyOTYtMmIzZDVlZTI5NDVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMzR0VJTDlaKzNka2gxcC9SaVgxa0Y5aVhSND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdzVZelRvUW5kZFBPaGlEbVFiVG9zTEN0blk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFBYN0tCWVYiLCJtZSI6eyJpZCI6IjIyNTAxMTQyMjQ2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU29uaWMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lZ3JQRUVFSUxaeTdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhXTlZ5TlV1UmpFOFQ5OVgwaTdyVlMzSDRLOXJkZnF3QnF6K2lKT0tvMjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVNNW56NU1Oa3FKaHJGcnB2YlRWVkNHM3ppeng3TWxWOFNNeEJiZTlxdTl1ZW1ZSWxtUDJnWk44dXpaRy93alg5Qnllb2pKb1p6TkxxekVIZWNzY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZbGNDdjBCTnNmMHVQeis4UWFzOHk2RFV5L2pFZ1BnWHkyeGUvYjQ1MytjSUlWMk5kNHBXL24renpUNzdna09ZNlFkVXBLK2pidXFsQ1poNVRGandBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAxMTQyMjQ2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjFqVmNqVkxrWXhQRS9mVjlJdTYxVXR4K0N2YTNYNnNBYXMvb2lUaXFOdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTU4NDkxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEbG4ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
