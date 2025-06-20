import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, phone, insurance, contact, msg, consent, address, city, state, zip } = await req.json();

    try {
        // Load credentials from environment
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[name, email, phone, insurance, contact, address, city, state, zip, msg]],
            },
        });

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Insurance Submission',
            text: `Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Insurance Type: ${insurance}
            Contact Method: ${contact}
            Address: ${address}
            City: ${city}
            State: ${state}
            Zip Code: ${zip}
            Message: ${msg}`,
        });

        return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('❌ Submit error:', error);
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}
