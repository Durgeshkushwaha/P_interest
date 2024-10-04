const mongoosse = require("mongoose")

const postschema = mongoosse.Schema({
    user: {
        type: mongoosse.Schema.Types.ObjectId,
        ref: "user"
    },
    title: String,
    description: String,
    image: String
});


module.exports = mongoosse.model("post", postschema);