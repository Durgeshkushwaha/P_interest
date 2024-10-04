const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Corrected MongoDB URI
let uri = 'mongodb+srv://durgeshkushwaha361000:1bg13YtCnYXw2wKI@cluster0.ybsnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error: ', err));

const userschema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userschema.plugin(plm);

module.exports = mongoose.model("user", userschema);
