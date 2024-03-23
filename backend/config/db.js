const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.bgCyan.bold);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed.bold);
    process.exit();
  }
};
module.exports = connectDB;
