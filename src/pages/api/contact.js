import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASS,
    },
  });

  try {
    // Sending the email
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: 'kusame25@gmail.com',
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });

    // Send success response
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // Log the error and send failure response
    console.error(error); // Change from console.log to console.error for better error logging
    return res.status(500).json({
      message: 'Could not send the email. Your message was not sent.',
    });
  }
}
