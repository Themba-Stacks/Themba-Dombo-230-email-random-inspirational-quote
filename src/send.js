function sendEmailAPI(email, emailContent) {

  const SibApiV3Sdk = require('sib-api-v3-sdk');
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.SMTP_PASSWORD;
  const apiInstance = new SibApiV3Sdk.SMTPApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.to = [{ "email": email }];
  sendSmtpEmail.sender = { "email": "themba.dombo@umuzi.org", "name": "Great Quotes" };
  sendSmtpEmail.subject = "Inspirational Quote";
  sendSmtpEmail.htmlContent = emailContent;
  sendSmtpEmail.tags = ["Inspirational quotes"];

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully.');
  }, function (error) {
    console.error(error);
  }
  );
};

module.exports = sendEmailAPI;