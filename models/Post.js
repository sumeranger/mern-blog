const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      default:"https://res.cloudinary.com/sumeranger/image/upload/v1624399478/pexels-sharon-mccutcheon-1191710_iwpakf.jpg",
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    photoCloudId:{
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
