const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://res.cloudinary.com/sumeranger/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1624398980/pexels-karolina-grabowska-4207567_sctx4f.jpg",
    },
    profilePicCloudId:{
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
