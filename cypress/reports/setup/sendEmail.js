
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.usfood.com",    
  secureConnection: false, // TLS requires secureConnection to be false
  port: 25, // port for secure SMTP
  requireTLS: false,
  auth: {
    user: 'carlos.pardo@usfoods.com',
    pass: '******'
  },
  tls:{
    rejectUnauthorized: false
  }
});

let mailOptions = {
  from: 'carlos.pardo@usfoods.com',
  to:  '076bebe1.usfoods.onmicrosoft.com@amer.teams.ms' ,//'2S-DL-R4Ordering@usfood.com,2S-DL-Panamax@usfood.com,2S-DL-R4List@usfood.com,2S-DL-R4ProductDiscovery@usfood.com,2S-DL-R4Alerts@usfood.com',
  subject: 'Automation report',
  text: "Automated testing report - Product Search Team",
  attachments: [{
    path: 'cypress/reports/test-results/automation_report.html'}]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});