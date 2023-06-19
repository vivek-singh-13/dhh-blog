const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true,
        //useCreateIndex: true
    })
    .then(console.log("Connected"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

const storage = multer.diskStorage({
    destination: (req, file, callbackFunc) => {
        callbackFunc(null, "images");
    },
    filename: (req, file, callbackFunc) => {
        callbackFunc(null, req.body.name);
    }
})

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.listen("5000", () => {
    console.log("Backend is running")
})
