import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(express.json());
app.use(cors({ origin: true }));

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function buildTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE === 'true' || true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const toAddress = process.env.MAIL_TO || 'ammarfarooq207@gmail.com';

  if (!isSmtpConfigured()) {
    return res.status(200).json({ status: 'mock', message: 'SMTP not configured. Request logged only.' });
  }

  try {
    const transporter = buildTransporter();
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${message}</p><p>From: <b>${name}</b> &lt;${email}&gt;</p>`,
    });
    return res.status(200).json({ status: 'sent' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`);
});
