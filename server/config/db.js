const mongoose = require('mongoose');
const linkDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB linked: ${conn.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
};
module.exports = linkDb;