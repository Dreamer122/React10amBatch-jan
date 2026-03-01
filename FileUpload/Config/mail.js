const nodemailer = require("nodemailer");
require("dotenv").config()

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
   // Use true for port 465, false for port 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Send an email using async/await
exports.sendmail =async(email) => {
  const info = await transporter.sendMail({
    from: 'monika',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b><h2>File uploaded successfully</h2>", // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
};