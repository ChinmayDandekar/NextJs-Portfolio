



import { NextResponse, NextRequest } from 'next/server'

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

const nodemailer = require('nodemailer');

// Handles POST requests to /api



export default async function POST(request) {

    const { params } = await request.json

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;


    console.log("dealing with request")



    console.log(body)
    const name = formdata.get('name')
    const email = formdata.get('email')
    const message = formdata.get('message')

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 25,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }

  }