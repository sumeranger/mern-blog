const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const upload = require("./utils/multer");
const path = require("path");

const port = process.env.PORT || 8080;
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

const cloudinary = require("./utils/cloudinary");

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const data = await cloudinary.uploader.upload(req.file.path);

    res.json(data?.url);
  } catch (err) {
    console.log(err);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("react-blog/build"));
  app.listen(port, () => {
    console.log("Backend is running.");
  });
} else {
  app.listen(5000, () => {
    console.log("Backend is running.");
  });
}
