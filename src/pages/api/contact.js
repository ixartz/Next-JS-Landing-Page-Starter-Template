import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
  const {
    communityName,
    communityPhone,
    communityAddress,
    numberOfUnits,
    propertyMgmtCompanyName,
    propertyMgrName,
    propertyMgrEmail,
    expectedStartDate,
    additionalComments,
  } = req.body;

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
      replyTo: propertyMgrEmail,
      subject: `Contact form submission from ${propertyMgrName}`,
      html: `
      <p>Community Name: ${communityName}</p>
      <p>Community Phone: ${communityPhone}</p>
      <p>Community Address: ${communityAddress}</p>
      <p>Number of Units: ${numberOfUnits}</p>
      <p>Property Management Company Name: ${propertyMgmtCompanyName}</p>
      <p>Property Manager Name: ${propertyMgrName}</p>
      <p>Property Manager Email: ${propertyMgrEmail}</p>
      <p>Expected State Date: ${expectedStartDate}</p>
      <p>Additional comments: ${additionalComments}</p>
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
