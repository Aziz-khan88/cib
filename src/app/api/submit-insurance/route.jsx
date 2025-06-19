import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    const { name, email, phone, insurance, contact, msg, consent, address, city, state, zip } = await req.json();

    try {

        const credentialsPath = path.join(process.cwd(), 'config/credentials.json');
        const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });


        await sheets.spreadsheets.values.append({
            spreadsheetId: '1xg2lr6wJcAiCKmOEHcXVy5ONJ45rTqW3jLzIfIxEUfk',
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[name, email, phone, insurance, contact, address, city, state, zip, msg]],
            },
        });

        // ✅ Send email notification
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
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInsurance Type: ${insurance}\nContact Method: ${contact}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip Code: ${zip}`,
        });

        return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('❌ Submit error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
