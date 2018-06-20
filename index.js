const { IncomingWebhook } = require('@slack/client');
const channelUrl = "https://hooks.slack.com/services/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"
const url = channelUrl || process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);
const message = require('./message.json');
// Send simple text to the webhook channel
webhook.send(message, function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
  });
