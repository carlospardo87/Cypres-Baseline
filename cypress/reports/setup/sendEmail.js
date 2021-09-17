'use strict'

const nodemailer = require("nodemailer");
const chalk = require("chalk");
const fs = require('fs')


const resultInfo = () => {
try {
  let rawData =  fs.readFileSync('cypress/support/storeResult.js', 'utf8');
  return JSON.parse(rawData)
} catch (err) {
  console.error(err)
  return false
}
}

const percentSuccess = () => {
  let a = parseFloat(resultInfo().totalPassed)*100
  return (a/parseFloat(resultInfo().totalTests)).toFixed(2)
}

const envType = () => {
  if (resultInfo().config.baseUrl.includes('sit')) {
    return 'SIT'
  }else {
    return 'DEV'
  }
}


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
  to: 'carlos.pardo@usfoods.com, bab5fc4c.usfoods.onmicrosoft.com@amer.teams.ms',//'2S-DL-R4Ordering@usfood.com,2S-DL-Panamax@usfood.com,2S-DL-R4List@usfood.com,2S-DL-R4ProductDiscovery@usfood.com,2S-DL-R4Alerts@usfood.com',
  subject: 'Automation report',
  text: 'Automation',
  html: `<b> 👉🏻  <i>List Management Team</i>  👈🏻 </b><br>
   <b>  ------------------------------------------------------------------------------------------------------------- </b>
  
  <table class="default">
  <tr>
    <th>| Total_Tests | </th><th> Total_Passed |</th><th> Total_Failed |</th><th> Browser_Name |</th><th> Environmet </th><th>| Viewport |</th><th> % Success |</th>
  </tr>
  <tr>
    <td>${resultInfo().totalTests}</td>
    
    <td>${resultInfo().totalPassed}</td>
    
    <td>${resultInfo().totalFailed}</td>
   
    <td>${resultInfo().browserName}</td>
    
    <td>${envType()}</td>
    
    <td>${resultInfo().config.viewportWidth}x${resultInfo().config.viewportHeight}</td>
    
    <td>${percentSuccess()}</td>
  </tr>
</table>`,

  attachments: [{
    path: '../results/cypress/reports/report.html'}]
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.info(chalk.red(`    Error sending email: ${error}`))
  } else {
    console.info(chalk.green(`🚀     Report was sent by email successfully     👍`))
    resultInfo()
  }
});





