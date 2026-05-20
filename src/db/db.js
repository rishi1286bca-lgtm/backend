const mongoose = require('mongoose');

async function ConnectDB() {
    try {
        const mongoURI = process.env.MONGODB_URI || "mongodb+srv://rishitiwaribca756_db_user:2Zx0DnwtaC9oRnnJ@cluster0.2xeyjdx.mongodb.net/New-project";
        
        // Super simple - Mongoose 9 handles everything automatically
        await mongoose.connect(mongoURI);
        
        console.log("✅ Database connected successfully");
        
        // Monitor connection
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB error:', err);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected, attempting to reconnect...');
        });
        
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        // Don't crash the server, just log error
        // The server will still run but DB operations will fail
    }
}

module.exports = ConnectDB;