
const chalk = require("chalk");
const fs = require('fs')

const nodemailer = require('nodemailer')


module.exports =  function(results) {
  return new Promise( (resolve, reject) => {

    const percentSuccess = () => {
      let percentPassed = parseFloat(results.totalPassed)*100
      return (percentPassed/parseFloat(results.totalTests)).toFixed(2)
    }
    const envType = () => {
      if (results.config.baseUrl.includes('sit')) {
        return 'SIT'
      }else {
        return 'DEV'
      }
    }

    const durationInSeconds = () => {
      return parseFloat(((results.totalDuration)/1000).toFixed(2))
    }

    nodemailer.createTransport({
      host: "smtp.usfood.com",
      secureConnection: false, // TLS requires secureConnection to be false
      port: 25, // port for secure SMTP
      requireTLS: false,
      auth: {
        user: 'carlos.pardo@usfoods.com',
        pass: 'Usfoods87'
      },
      tls: {
        rejectUnauthorized: false
      }
    }).sendMail({
      from: '"Automation Report 👻" <foo@usfoods.com>',
      to: 'carlos.pardo@usfoods.com, gowthaman.ramasamy2@usfoods.com',// bab5fc4c.usfoods.onmicrosoft.com@amer.teams.ms, 2S-DL-R4List@usfood.com',//'2S-DL-R4Ordering@usfood.com,2S-DL-Panamax@usfood.com,2S-DL-R4ProductDiscovery@usfood.com,2S-DL-R4Alerts@usfood.com',
      subject: 'Automation report',
      text: 'Automation',
      html: `<b> 👉🏻  <i>List Management Team</i>  👈🏻 </b><br>
   <b>  ------------------------------------------------------------------------------------------------------------- </b>
  
  <table class="default">
  <tr>
    <th>| Total_Tests | </th><th> Total_Passed |</th><th> Total_Failed |</th><th> Browser_Name |</th><th> Environmet </th><th>| Viewport |</th><th> % Success | </th><th> Duration (seconds) |</th>
  </tr>
  <tr>
    <td>${results.totalTests}</td>
    
    <td>${results.totalPassed}</td>
    
    <td>${results.totalFailed}</td>
   
    <td>${results.browserName}</td>
    
    <td>${envType()}</td>
    
    <td>${results.config.viewportWidth}x${results.config.viewportHeight}</td>
    
    <td>${percentSuccess()}</td>
    
    <td>${durationInSeconds()}</td>
  </tr>
</table>`,
      attachments: [{
        path: '../results/cypress/reports/report.html'}]

    }, function (error, info) {
      if (error) {
        console.info(chalk.red(`    Error sending email: ${error}`))
         reject(error);
      } else {
        console.info(chalk.green(`🚀     Report was sent by email successfully   👍`))
         resolve(info.messageId);
      }
    });
  })
}





