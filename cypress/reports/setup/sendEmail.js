
const nodemailer = require("nodemailer");
const chalk = require("chalk");

let transporter = nodemailer.createTransport({
  host: "smtp.usfood.com",    
  secureConnection: false, // TLS requires secureConnection to be false
  port: 25, // port for secure SMTP
  requireTLS: false,
  auth: {
    user: 'carlos.pardo@usfoods.com',
    pass: 'Usfoods87'
  },
  tls:{
    rejectUnauthorized: false
  }
});

let mailOptions = {
  from: '"Automation Report 👻" <foo@usfoods.com>',
  to:  'carlos.pardo@usfoods.com' ,//'2S-DL-R4Ordering@usfood.com,2S-DL-Panamax@usfood.com,2S-DL-R4List@usfood.com,2S-DL-R4ProductDiscovery@usfood.com,2S-DL-R4Alerts@usfood.com',
  subject: 'Automation report',
  text: "Automated testing report - List Management Team",
  html: '<b> 🚀    List Management Team    🚀</b>',
  attachments: [{
    path: '../results/cypress/reports/test-results/report.html'}]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.info(chalk.red(`    Error sending email: ${error}`))
  } else {
    //console.log('Email sent: ' + info.response);
    console.info(chalk.green(`🚀     Report was sent by email successfully     👍`))
  }
});