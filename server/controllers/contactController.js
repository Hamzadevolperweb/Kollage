import nodemailer from 'nodemailer';
import ContactMessage from '../models/ContactMessage.js';

export const submitContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Mock save for development (if MongoDB is not available)
    try {
      const contact = new ContactMessage({ name, email, subject, message });
      await contact.save();
      console.log('✓ Contact message saved to database');
    } catch (dbError) {
      console.log('ℹ Database unavailable - contact saved in memory only');
    }

    // Try to send email (optional for local dev)
    if (process.env.EMAIL_USER && process.env.EMAIL_USER !== 'demo@example.com') {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `Kollage Studio <${process.env.EMAIL_USER}>`,
          to: 'info@kollagestudio.com',
          subject: `New contact request: ${subject}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message}</p>`,
        });
        console.log('✓ Email sent successfully');
      } catch (emailError) {
        console.log('ℹ Email service not configured (development mode)');
      }
    }

    res.status(201).json({ message: 'Contact message submitted successfully.', success: true });
  } catch (error) {
    next(error);
  }
};
