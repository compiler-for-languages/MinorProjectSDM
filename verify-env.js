require('dotenv').config();

const required = [
    'TWILIO_SID',
    'TWILIO_AUTH_TOKEN',
    'TWILIO_MESSAGING_SERVICE_SID',
    'TWILIO_PHONE_NUMBER',
    'EMAIL_USER',
    'EMAIL_PASS',
    'MONGO_URI'
];

console.log("--- ENV CHECK ---");
required.forEach(key => {
    const val = process.env[key];
    if (!val) {
        console.error(`[MISSING] ${key}`);
    } else {
        const masked = val.length > 4 ? val.substring(0, 4) + '***' : '***';
        console.log(`[OK] ${key} = ${masked}`);
    }
});
console.log("-----------------");
