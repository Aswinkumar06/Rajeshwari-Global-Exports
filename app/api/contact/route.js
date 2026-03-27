import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();

  const { name, email, company, phone, country, inquiryType, product, quantity, message } = data;

  try {
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rajeshwaritraders12@gmail.com',
      replyTo: email,
      subject: `New Cocopeat Inquiry - ${inquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a7c59; margin-bottom: 20px;">New Inquiry from Rajeshwari Global Exports Website</h2>
          
          <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Country:</strong> ${country}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Inquiry Details</h3>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <p><strong>Product Interest:</strong> ${product || 'Not specified'}</p>
            <p><strong>Estimated Quantity:</strong> ${quantity || 'Not specified'}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px; border-top: 1px solid #ddd; padding-top: 12px;">
            This email was sent from the Rajeshwari Global Exports website contact form.
          </p>
        </div>
      `
    });

    // Also send a confirmation email to the user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'We received your inquiry - Rajeshwari Global Exports',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a7c59; margin-bottom: 20px;">Thank You for Your Inquiry</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to Rajeshwari Global Exports. We have received your inquiry and appreciate your interest in our premium cocopeat products.</p>
          
          <p>Our team will review your message and get back to you within 24 hours with comprehensive information tailored to your requirements.</p>
          
          <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Inquiry Summary</h3>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <p><strong>Product Interest:</strong> ${product || 'Not specified'}</p>
          </div>

          <p>In the meantime, if you have any urgent questions, feel free to reach out to us via:</p>
          <ul>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/919080653388" style="color: #4a7c59; text-decoration: none;">+91-9080653388</a></li>
            <li><strong>Email:</strong> <a href="mailto:rajeshwaritraders12@gmail.com" style="color: #4a7c59; text-decoration: none;">rajeshwaritraders12@gmail.com</a></li>
          </ul>

          <p>Best regards,<br>
          <strong>Rajeshwari Global Exports Team</strong><br>
          Premium Cocopeat Exporter from India</p>

          <p style="color: #999; font-size: 12px; border-top: 1px solid #ddd; padding-top: 12px;">
            Sathyamangalam, Tamil Nadu, India
          </p>
        </div>
      `
    });

    return Response.json({ success: true, message: 'Inquiry sent successfully' });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ 
      error: 'Failed to send inquiry. Please try again or contact us directly.',
      details: error.message 
    }, { status: 500 });
  }
}
