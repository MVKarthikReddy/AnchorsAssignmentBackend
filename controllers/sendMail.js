"use strict";
const nodemailer = require("nodemailer");
const { tryCatch } = require("../utils/tryCatch");


const sendMail = tryCatch(
  async (req,res) => {
       
    const {username,num} = req.body.details
    
    // Creating transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // using gmail service
        auth: {
          // setting `user` and `pass`
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

    // Sending the mail using transporter
    const info = await transporter.sendMail({
        from: 'Notification Alert <notifierbot2@gmail.com>', // sender address
        to: "ravi@anchors.in", //  receiver address
        subject: "Callback Details", // Subject line
        text: `username: ${username}\nMobile: ${num}`, // plain text body
        html: `<b>username: ${username}<br><br>Mobile: ${num}</b>`, // html body
    });
    
    // returning the message Id as response
    res.status(200).send({
        'msg': info.messageId
    })
    
}
)

module.exports = {
    sendMail
}