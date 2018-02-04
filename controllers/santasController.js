const config = require('../config/email');
const nodemailer = require('nodemailer');

exports.emailSantas = function(req, res) {
	 let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: config.user,
            pass: config.pass
        }
    });

    let mailOptionsArr = [];
    req.body.santas.forEach((santa) => {
        let mailOptions = {
            from: 'sfvt34w3gdk4urft@ethereal.email',
            to: santa.email,
            subject: "Here's your secret santa!",
            text: `Hello here it is: ${santa.matchedName}`
        };

        mailOptionsArr.push(mailOptions);
    });

    console.log(mailOptionsArr);
    //get rid of this later
    messages = "";
    mailOptionsArr.forEach((mailOption) => {
        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                res.send(error);
            }
        });
    });

    res.send(messages);
}