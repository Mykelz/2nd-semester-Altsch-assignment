const fs = require("fs");

exports.findUser = (username)=>{
    const rawText = fs.readFileSync("./db.json", "utf-8");
    console.log("rawText", rawText);
    const users = JSON.parse(rawText);
    return users.find((user)=> user.username === username);
}


