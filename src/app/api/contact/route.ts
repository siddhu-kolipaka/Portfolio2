import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let transporter;
    const isSmtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (isSmtpConfigured) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Create Ethereal test account dynamically for out-of-the-box demo
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`\n=== ETHEREAL SMTP TEST ACCOUNT GENERATED ===`);
      console.log(`User: ${testAccount.user}`);
      console.log(`Pass: ${testAccount.pass}`);
    }

    const mailOptions = {
      from: isSmtpConfigured ? `"${name}" <${process.env.SMTP_USER}>` : `"${name}" <${email}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER || "receiver@example.com", // Fallback email
      subject: `Portfolio Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #0d0e12; color: #fff; border: 1px solid #a855f7; border-radius: 8px;">
          <h2 style="color: #a855f7; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 10px;">[ NEW DEPLOYED CONTACT INCOMING ]</h2>
          <p><strong>Sender:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #161922; padding: 15px; border-radius: 4px; border-left: 4px solid #e21b22; margin-top: 20px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    if (!isSmtpConfigured) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`Message sent: %s`, info.messageId);
      console.log(`Preview URL: %s`, previewUrl);
      return NextResponse.json({
        success: true,
        isDemo: true,
        previewUrl,
        message: "Email sent to Ethereal developer test server. Preview URL printed to server console!"
      });
    }

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
