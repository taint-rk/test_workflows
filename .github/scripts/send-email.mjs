import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: 'nguyentantai13031999@gmail.com',
    pass: 'rhiuoputwpzvcgrc',
  },
});

(async () => {
  // Neon API logic ran here, returning values to include in the body of the email.
  let branch_id = 'little-salad-123';
  let days = 3;
  let email = 'nguyentantai13031999@gmail.com';

  try {
    await transporter.sendMail({
      from: '"Warning | DevOps" <nguyentantai13031999@gmail.com>',
      to: email,
      subject: 'Stale Branch Detected!',
      html: `Branch: <b>${branch_id}</b> will be deleted in <b>${days}</b> days`,
    });
  } catch (error) {
    console.error(error);
  }
})();