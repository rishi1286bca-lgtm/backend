const mongoose = require('mongoose');

async function ConnectDB() {
    try {
        // Use standard connection string instead of SRV
        const mongoURI = "mongodb://rishitiwaribca756_db_user:2Zx0DnwtaC9oRnnJ@cluster0.2xeyjdx.mongodb.net:27017/New-project?ssl=true&replicaSet=atlas-u6hepv-shard-0&authSource=admin&retryWrites=true&w=majority";
        
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        setTimeout(ConnectDB, 5000);
    }
}

module.exports = ConnectDB;