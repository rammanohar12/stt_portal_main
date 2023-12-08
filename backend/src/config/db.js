const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,  // <-- Add this option
        // useFindAndModify: false,
      })
      .then(() => {
        console.log("Connected to database successfully");
      });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
