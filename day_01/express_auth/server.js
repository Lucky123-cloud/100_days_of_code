const express = require('express');
const jtw = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const app = express();

app.use(express.json());

const JWT_SECRET = 'secret'


// Dummy user data
const users = [];

// Register endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    //check if the user exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //store user
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    res.status(201).json({ message: "User created successfully" });
});

//login user endpoint

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    //check if user exixts
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ message: "User not found, please sign up" });
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
    }

    //create token
    const token = jtw.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
})

//protected route
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jtw.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}, you have access to this protected route` });
    res.json({ message: "This is a protected route", user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});