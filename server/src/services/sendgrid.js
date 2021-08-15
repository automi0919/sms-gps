// import path from 'path';
// import ejs from 'ejs';
const sgMail = require( '@sendgrid/mail');
const config = require('../config');

sgMail.setApiKey(config.SENDGRID_API_KEY);

const sendMail = async (data) => {
  // const html = await ejs.renderFile(
  //   path.resolve(__dirname, `../../templates/${template}.ejs`),
  //   data
  // );
  const getMailBody = () => {
    return `
      You have mail from ${data.from}.
      ${data.text}
    `;
  }

  const msgBody = getMailBody();

  return sgMail.send({
    from: {
      email: config.MAIL_FROM,
      name: config.MAIL_FROM_NAME,
    },
    to: config.MAIL_TO,
    subject: `SAFE LOCATE MESSAGE \n ${data.name} SEND MESSAGE.`,
    html:msgBody
  });
};


module.exports = {
  sendMail
};