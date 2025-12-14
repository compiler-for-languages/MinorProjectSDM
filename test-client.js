// Native fetch in Node 18+

const BASE_URL = 'http://localhost:3000';

async function test() {
    console.log("1. Testing Health...");
    try {
        const res = await fetch(`${BASE_URL}/api/health`);
        const data = await res.json();
        console.log("   Health:", data);
    } catch (e) {
        console.error("   Health Check Failed:", e.message);
        return;
    }

    console.log("\n2. Registering 'TEST_CONTROL_USER'...");
    try {
        const res = await fetch(`${BASE_URL}/api/reminders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                patientName: "TEST_CONTROL_USER",
                email: "test@example.com",
                phone: "+15550000000",
                intervalHours: 1,
                startTime: new Date().toISOString()
            })
        });
        const data = await res.json();
        console.log("   Register Response:", data);
    } catch (e) {
        console.error("   Register Failed:", e.message);
    }

    console.log("\n3. Stopping 'TEST_CONTROL_USER'...");
    try {
        const res = await fetch(`${BASE_URL}/api/reminders/stop`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                patientName: "TEST_CONTROL_USER"
            })
        });
        const data = await res.json();
        console.log("   Stop Response:", data);
    } catch (e) {
        console.error("   Stop Failed:", e.message);
    }
}

test();
