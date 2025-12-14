const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// Use a test number (your own or a generic one if you have one, 
// strictly speaking we need a real number to test sending, 
// but for now let's just use a placeholder or try to send to the user's number if known, 
// or just check initialization). 
// actually, let's try to send to a dummy safe number or check if client inits.
// better yet, we just print the config status first.

async function testSMS() {
    console.log("Testing SMS Configuration...");

    if (!accountSid || !authToken) {
        console.error(" [ERROR] Missing Twilio SID or Auth Token in .env");
        return;
    }

    const client = new twilio(accountSid, authToken);

    console.log(" [INFO] Client initialized with SID:", accountSid.substring(0, 6) + "...");

    // We can't really "send" without a valid 'To' number. 
    // But we can check if we have a valid 'From'.
    if (messagingServiceSid) {
        console.log(" [INFO] Using Messaging Service SID:", messagingServiceSid);
    } else if (twilioPhoneNumber) {
        console.log(" [INFO] Using Twilio Phone Number:", twilioPhoneNumber);
    } else {
        console.error(" [ERROR] No Sender ID (MessagingService or Phone) configured.");
    }

    console.log("NOTE: To test actual sending, we need a valid 'To' number.");
    // We will attempt a dry-run or list messages to verify auth matches
    try {
        const messages = await client.messages.list({ limit: 1 });
        console.log(" [SUCCESS] Authentication verified. Account has", messages.length > 0 ? "history" : "no history", "messages.");
    } catch (err) {
        console.error(" [FAIL] Authentication Failed or API Error:", err.message);
    }
}

testSMS();
