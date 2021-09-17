
const sendmail = require('sendmail')();


  sendmail({
    from: 'carlos.pardo@usfoods.com',
    to: 'carlos.pardo@usfoods.com',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });





