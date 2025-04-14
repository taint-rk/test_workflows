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
  let branch = process.env.BRANCH_NAME;
  let actor = process.env.ACTOR;
  let email = 'nguyentantai13031999@gmail.com';

  try {
    await transporter.sendMail({
      from: '"Warning | DevOps" <nguyentantai13031999@gmail.com>',
      to: email,
      subject: 'Test send mail from git action!',
      html: `Branch: <b>${branch}</b> have ${actor} action!`,
    });
  } catch (error) {
    console.error(error);
  }
})();