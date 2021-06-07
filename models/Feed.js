const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 15
    },
    message: {
        type: String,
        required: true,
        maxLength: 40

    }
    
}, { timestamps: true });

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = {
    Feed
};
