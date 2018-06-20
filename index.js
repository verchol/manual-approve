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
