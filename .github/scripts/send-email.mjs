import nodemailer from 'nodemailer';
import 'dotenv/config';
import fs from 'fs';

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

const branch = process.env.BRANCH_NAME;

var readme = fs.readFileSync('README.md', 'utf8');

if (readme.includes(`# notification for branch ${branch}`)) {
  console.log(`The branch ${branch} already exists in the README file.`);
  const htmlTemplate = readme.slice(readme.indexOf(`# notification for branch ${branch}`), readme.indexOf(`# end notification for branch ${branch}`));

  (async () => {
    try {
      await transporter.sendMail({
        from: '"Warning | DevOps" <nguyen.tai@yamata.org>',
        to: 'nguyen.tai@yamata.org',
        subject: `Notify the manual actions required after the ${branch} branch is deployed`,
        html: htmlTemplate,
      });
    } catch (error) {
      console.error(error);
    }
  })();
}