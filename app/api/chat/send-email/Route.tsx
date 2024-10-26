// import type { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { name, contact, question } = req.body

//     // Configure nodemailer with your email service
//     const transporter = nodemailer.createTransport({
//       // Add your email service configuration here
//     })

//     try {
//       await transporter.sendMail({
//         from: process.env.EMAIL_FROM,
//         to: process.env.EMAIL_TO,
//         subject: 'New Question from Chat Bot',
//         text: `
//           Name: ${name}
//           Contact: ${contact}
//           Question: ${question}
//         `,
//       })

//       res.status(200).json({ message: 'Email sent successfully' })
//     } catch (error) {
//       console.error('Error sending email:', error)
//       res.status(500).json({ message: 'Failed to send email' })
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }