const express = require("express");
const { RekognitionClient, DetectLabelsCommand } = require("@aws-sdk/client-rekognition");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

require('dotenv').config()
const app = express();
const port = 5000;

// AWS Rekognition Client
const rekognitionClient = new RekognitionClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  },
});

// Configure Multer
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("image");

// Set view engine to EJS
app.set("view engine", "ejs");

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { error: null, labels: [] });
});

app.post("/upload", (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.render("index", { error: "Error uploading file", labels: [] });
    } else if (err) {
      return res.render("index", { error: "Error uploading files", labels: [] });
    }

    const image = req.file;

    if (image) {
      // Handle Image Analysis
      const imagePath = image.path;
      const imageBuffer = fs.readFileSync(imagePath);

      const params = {
        Image: {
          Bytes: imageBuffer,
        },
      };

      try {
        const command = new DetectLabelsCommand(params);
        const data = await rekognitionClient.send(command);
        res.render("index", { error: null, labels: data.Labels });
      } catch (err) {
        console.error("Error detecting labels:", err);
        res.render("index", { error: "Error analyzing image", labels: [] });
      }
    } else {
      res.render("index", { error: "Please upload an image file", labels: [] });
    }
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`);
});