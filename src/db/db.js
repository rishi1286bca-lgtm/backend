const mongoose = require('mongoose');


async function ConnectDB() {
    
    await mongoose.connect("mongodb+srv://rishitiwaribca756_db_user:2Zx0DnwtaC9oRnnJ@cluster0.2xeyjdx.mongodb.net/New-project")

    console.log("DB is connected");

    
}
module.exports = ConnectDB;