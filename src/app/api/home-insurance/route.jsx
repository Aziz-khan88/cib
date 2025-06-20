import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const answers = await req.json(); // Expecting: [q1, q2, ..., q19]

  if (!Array.isArray(answers) || answers.length !== 19) {
    return NextResponse.json({ message: "Invalid form data", status: 400 });
  }

  try {
    // Authenticate with Google Sheets API using Service Account
    const auth = new google.auth.JWT({
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append answers to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_HOME,
      range: 'Sheet1!A2',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [answers],
      },
    });

    // Optional: Email summary
    const emailBody = answers
      .map((answer, i) => `Q${i + 1}: ${answer || '[blank]'}`)
      .join('\n');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
        process.env.EMAIL_USER,
        "seoproduction@inhousedept.com",
        "info@circadianbrokers.com",
      ],
      subject: 'New Home Insurance Form Submission',
      text: emailBody,
    });

    return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('❌ Submission Error:', error);
    return NextResponse.json({
      message: 'Server error',
      error: error.message,
    }, { status: 500 });
  }
}
