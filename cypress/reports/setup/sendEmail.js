
const chalk = require("chalk");
const fs = require('fs')

const nodemailer = require('nodemailer')


module.exports =  function(results,failedTest) {
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
      let seconds = ((parseFloat(results.totalDuration))/1000).toFixed(0)
      let minute = Math.floor((seconds / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      let second = seconds % 60;
      second = (second < 10)? '0' + second : second;
      return minute + ':' + second;
    }

    const getFailedTest = () => {
      if (failedTest.length > 0) {
        return failedTest.toString();
      } else {
        return '😃 There were not test cases failed !!!'
      }
}

    nodemailer.createTransport({
      host: "smtp.usfood.com",
      secureConnection: false, // TLS requires secureConnection to be false
      port: 25, // port for secure SMTP
      requireTLS: false,
      auth: {
        user: 'no-reply@usfoods.com',
        pass: ''
      },
      tls: {
        rejectUnauthorized: false
      }
    }).sendMail({
      from: '"List Automation Report 👻" <foo@usfoods.com>',
      to: 'carlos.pardo@usfoods.com, gowthaman.ramasamy2@usfoods.com, 07cb4008.usfoods.onmicrosoft.com@amer.teams.ms',
      subject: 'Automation report',
      text: 'Automation',
      html: `<b> 👉🏻  <i>Regression Status</i>  👈🏻 </b><br>
      <b>  ------------------------------------------------------------------------------------------------------------------------------------ </b>
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
</table>
  <table><tr><th></th></tr><tr><td></td></tr></table>
  <b></b>
      <b> 👉🏻 <i>Failed Test Cases</i> 👈🏻</b><br>
      <b>  ------------------------------------------------------------------------------------------------------------------------------------ </b>
      <p>
      ${getFailedTest()}
      </p>`,

      attachments: [{
        path: '../results/cypress/reports/report.html'}]

    }, function (error, info) {
      if (error) {
        console.info(chalk.red(`👉🏻 Error sending email: ${error}`))
         reject(error);
      } else {
        console.info(chalk.bold.green(`🚀 Report was sent by email successfully   👍`))
         resolve(info.messageId);
      }
    });
  })
}





