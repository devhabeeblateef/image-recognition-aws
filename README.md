# Image Recognition App Using AWS Rekognition

This project is a simple image recognition web application that uses **AWS Rekognition** to analyze uploaded images and identify labels (e.g., objects, scenes, and activities). Built with **Node.js** and **Express**, it provides an easy-to-use interface for exploring AWS Rekognition's powerful image analysis capabilities.

## Features

- Upload images directly through the web interface.
- Analyze images using AWS Rekognition and retrieve:
  - Detected labels
  - Confidence scores
- Clear and intuitive user interface built with **EJS**.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js installed on your machine.
- AWS account with access to AWS Rekognition.
- AWS credentials (`accessKeyId`, `secretAccessKey`, and `region`) configured.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-recognition-app.git
   cd image-recognition-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure AWS credentials:
   Update the AWS configuration section in `app.js` with your **AWS Access Key ID**, **Secret Access Key**, and **Region**:
   ```javascript
   AWS.config.update({
       accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
       secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
       region: 'YOUR_REGION'
   });
   ```

4. Create a `uploads` folder for storing uploaded images temporarily:
   ```bash
   mkdir uploads
   ```

5. Start the server:
   ```bash
   node app.js
   ```

6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

1. Access the app at `http://localhost:3000`.
2. Upload an image file (JPEG, PNG, etc.).
3. View the detected labels and their confidence scores.

## Project Structure

```
project-root/
│
├── app.js                # Main server file
├── views/                # EJS templates
│   └── index.ejs         # Main front-end template
├── public/               # Static files (CSS, JS, images, etc.)
├── uploads/              # Temporary storage for uploaded images
├── package.json          # Dependencies and scripts
├── package-lock.json     # Lock file for exact dependency versions
└── README.md             # Project documentation
```

## Dependencies

- [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3)
- [Express.js](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer) (for handling file uploads)
- [Body-parser](https://github.com/expressjs/body-parser)
- [EJS](https://ejs.co/)

## Contributing

Contributions are welcome! Feel free to:
- Fork the repository.
- Create a feature branch.
- Submit a pull request with your changes.

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Acknowledgments

- [AWS Rekognition](https://aws.amazon.com/rekognition/) for its powerful image analysis capabilities.
- The open-source community for supporting libraries like Express and Multer.
```
