const mongoose = require("mongoose");
const { connect } = require("node:http2");


const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");



    } catch (error) {
        console.log(error.message);
        

    }
}

module.exports = connectDB