let quoteArray = require("./getQuote.js")
const quotes = quoteArray("../src/inspirationalQuote.txt")

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SMTP_PASSWORD;

const apiInstance = new SibApiV3Sdk.SMTPApi();
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
const email = process.argv[2];

sendSmtpEmail.to = [{ "email": email }];
sendSmtpEmail.sender = { "email": "themba.dombo@umuzi.org", "name": "Great Quotes" };
sendSmtpEmail.subject = "Inspirational Quote";
sendSmtpEmail.htmlContent = quotes[Math.floor(Math.random() * quotes.length)];
sendSmtpEmail.tags = ["Inspirational quotes"];

apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
  console.log('API called successfully. Returned data: ' + data);
}, function (error) {
  console.error(error);
}
);
