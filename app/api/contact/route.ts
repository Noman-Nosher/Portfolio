import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, projectType, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure email transporter
    // Note: In production, use environment variables for email credentials
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contact@nexvision.tech',
      subject: `New Project Inquiry: ${projectType}`,
      html: `
        <h2>New Project Inquiry from NexVision Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This email was sent from the NexVision Technologies contact form.</em></p>
      `,
    }

    // Send email (only if SMTP credentials are configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions)
    } else {
      // For development: Log the form data instead of sending email
      console.log('Form submission received:')
      console.log(JSON.stringify(body, null, 2))
    }

    // Store in database (implement this based on your needs)
    // await saveToDatabase(body)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}


