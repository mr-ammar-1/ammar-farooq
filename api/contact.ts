import nodemailer from "nodemailer";

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function buildTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(input: { name: string; email: string; message: string }) {
  const brand = "Ammar Farooq";
  const bg = "#FAFAFA";
  const card = "#FFFFFF";
  const text = "#171717";
  const muted = "#6B7280";
  const border = "#E5E7EB";
  const primary = "#262626";
  const red = "#EF4444";
  const yellow = "#F59E0B";
  const grayDot = primary;
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeMessage = escapeHtml(input.message);
  return `
  <!doctype html>
  <html lang="en">
    <body style="margin:0;background:${bg};font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:${text};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${bg};padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:${card};border:1px solid ${border};border-radius:16px;overflow:hidden;">
              <tr>
                <td style="background:rgba(241,245,249,0.8);border-bottom:1px solid ${border};padding:16px 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                    <tr>
                      <td width="80" style="vertical-align:middle;">
                        <span style="display:inline-block;width:12px;height:12px;background:${red};border-radius:50%;margin-right:6px;"></span>
                        <span style="display:inline-block;width:12px;height:12px;background:${yellow};border-radius:50%;margin-right:6px;"></span>
                        <span style="display:inline-block;width:12px;height:12px;background:${grayDot};border-radius:50%;"></span>
                      </td>
                      <td style="vertical-align:middle;font-size:13px;color:${muted};">
                        New contact on ${brand}
                      </td>
                      <td align="right" style="vertical-align:middle;font-size:12px;color:${muted};">${new Date().toLocaleString()}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:24px 24px 8px 24px;">
                  <h1 style="margin:0 0 8px 0;font-size:20px;line-height:28px;">New message from ${safeName}</h1>
                  <p style="margin:0;font-size:14px;color:${muted};">Reply to <a href="mailto:${safeEmail}" style="color:${primary};text-decoration:none;">${safeEmail}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 24px 24px 24px;">
                  <div style="border:1px solid ${border};border-radius:12px;background:${card};padding:16px;">
                    <p style="margin:0 0 8px 0;font-size:13px;color:${muted};">Message</p>
                    <div style="font-size:15px;line-height:1.6;white-space:pre-wrap;color:${text};">${safeMessage}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 24px 24px 24px;">
                  <table role="presentation" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="background:${primary};color:#FAFAFA;padding:10px 16px;border-radius:8px;">
                        <a href="mailto:${safeEmail}" style="color:#FAFAFA;text-decoration:none;font-size:14px;">Reply to ${safeName}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;border-top:1px solid ${border};">
                  <p style="margin:0;font-size:12px;color:${muted};">© ${new Date().getFullYear()} ${brand}. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

type ContactPayload = { name: string; email: string; message: string };
type Req = { method?: string; body?: unknown };
type Res = { status: (code: number) => Res; json: (body: unknown) => void };

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = (req.body as ContactPayload) || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "Invalid payload" });
    return;
  }

  const toAddress = process.env.MAIL_TO || "ammarfarooq207@gmail.com";

  if (!isSmtpConfigured()) {
    res.status(200).json({ status: "mock", message: "SMTP not configured. Request logged only." });
    return;
  }

  try {
    const transporter = buildTransporter();
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: buildEmailHtml({ name, email, message }),
    });
    res.status(200).json({ status: "sent" });
  } catch {
    res.status(500).json({ error: "Failed to send email" });
  }
}
