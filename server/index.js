const express = require('express');
const cors = require('cors');

const app = express();

const authRoutes = require('./routes/auth.js');

const PORT = process.env.PORT || 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(accountSid, authToken);

require('dotenv').config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/', (req, res) => {
    const { message, user: sender, type, members } = req.body;

    if (type === 'message.new') {
        members
            .filter((member) => member.user_id !== sender.id)
            .forEach(({ user }) => {
                if (!user.online) {
                    twilioClient.messages.create({
                        body: `You have a new message from ${message.user.fullName} - ${message.text}`,
                        messagingServiceSid: messagingServiceSid,
                        to: user.phoneNumber
                    })
                        .then(() => console.log('Message sent!'))
                        .catch((err) => console.log(err));
                }
            })

        return res.status(200).send('Message sent!');
    }

    return res.status(200).send('Not a new message request');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));