const nodemailer = require('nodemailer');
const twilio = require('twilio');
const webPush = require('web-push');

const emailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const smsClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmailNotification = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await emailTransporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    throw new Error('Failed to send email notification');
  }
};

const sendSMSNotification = async (to, message) => {
  try {
    await smsClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    console.log(`SMS sent to ${to}`);
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
    throw new Error('Failed to send SMS notification');
  }
};

const sendPushNotification = async (subscription, payload) => {
  try {
    await webPush.sendNotification(subscription, JSON.stringify(payload));
    console.log('Push notification sent successfully');
  } catch (error) {
    console.error(`Error sending push notification: ${error.message}`);
    throw new Error('Failed to send push notification');
  }
};

module.exports = {
  sendEmailNotification,
  sendSMSNotification,
  sendPushNotification,
};
