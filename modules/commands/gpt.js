module.exports.config = {
name: "gpt",
version: "1.0.0",
hasPermission: 0,
description: "test",
commandCategory: "Test",
usages: "test",
cooldowns: 0,
prefix: false
},
module.exports.run = async function({ api, event, args }) {
const { threadID: t, messageID: m } = event;
const axios = require("axios");
const prompt = args.join(" ");
if (!prompt) return api.sendMessage("Thiếu nội dung cần tìm", t, m);
try {
const res = await axios.get(`https://api.kenliejugarap.com/blackbox-gpt4o/?text=${encodeURIComponent(prompt)}`);
const response = res.response;

return api.sendMessage("x", t, m);
} catch(e) {
console.log(e);
return api.sendMessage("Không thể tìm câu trả lời qua API!", t, m);
            }
      }
