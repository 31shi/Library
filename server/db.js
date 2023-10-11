const mongoose = require("mongoose");
require('dotenv').config();

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("DBに接続中");
    } catch (error) {
        console.log("DBに接続できません", error);
    }
}