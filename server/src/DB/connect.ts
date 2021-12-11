import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default { connect };
