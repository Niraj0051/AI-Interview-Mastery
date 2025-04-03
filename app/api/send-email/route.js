import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    // Parse request body
    const { name, email, message, rating } = await request.json();

    // Construct the email message
    const msg = {
      to: 'nirajpingale4@gmail.com',
      from: process.env.NEXT_PUBLIC_SENDGRID_FROM, // Must be a verified sender
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <h3><strong>Name:</strong> ${name}</h3>
        <h3><strong>Email:</strong> ${email}</h3>
        <h3><strong>Rating:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</h3>
        <h3><strong>Message:</strong></h3>
        <h3>${message}</h3>
      `,
    };

    // Send the email using SendGrid
    await sgMail.send(msg);

    // Return success response
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return error response
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
