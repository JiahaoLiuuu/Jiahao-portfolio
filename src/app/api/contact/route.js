import { Resend } from 'resend';

let resend;

try {
  resend = new Resend(process.env.RESEND_API_KEY);
} catch (error) {
  console.error('Failed to initialize Resend:', error);
}

export async function POST(req) {
  if (!resend) {
    console.error('Resend is not initialized. Check your RESEND_API_KEY.');
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, message } = await req.json();

  console.log('Received form submission:', { name, email, message });

  try {
    console.log('Attempting to send email...');
    const data = await resend.emails.send({
      from: 'Jiahao Liu <onboarding@resend.dev>',
      to: 'liujiahaokyle@gmail.com',
      reply_to: email,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}