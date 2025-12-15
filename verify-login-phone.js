const http = require('http');

function postRequest(path, data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(body));
                    } else {
                        reject({ statusCode: res.statusCode, body: body });
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

async function testLogin() {
    console.log("Testing Login API for Phone Number Return...");

    // 1. Create a test user
    const timestamp = Date.now();
    const testUser = {
        name: "Test User",
        email: `test${timestamp}@example.com`,
        phone: "+919999999999",
        password: "password123"
    };

    try {
        // Register
        console.log(`\n1. Registering new user: ${testUser.email}`);
        const regData = await postRequest('/api/user/register', JSON.stringify(testUser));

        console.log("   [PASS] Registration Successful");
        if (regData.phone === testUser.phone) {
            console.log(`   [PASS] Phone number returned correctly: ${regData.phone}`);
        } else {
            console.error(`   [FAIL] Expected phone ${testUser.phone}, got ${regData.phone}`);
        }

        // Login
        console.log(`\n2. Logging in user: ${testUser.email}`);
        const loginData = await postRequest('/api/user/login', JSON.stringify({ email: testUser.email, password: testUser.password }));

        console.log("   [PASS] Login Successful");
        if (loginData.phone === testUser.phone) {
            console.log(`   [PASS] Phone number returned correctly: ${loginData.phone}`);
        } else {
            console.error(`   [FAIL] Expected phone ${testUser.phone}, got ${loginData.phone}`);
        }

    } catch (err) {
        console.error("Test failed:", err);
    }
}

testLogin();
