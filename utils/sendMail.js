const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const port = process.env.SMTP_PORT;

  const config = {
    host: process.env.SMTP_HOST,
    port,     
    secure: port == 465,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
