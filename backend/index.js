require('dotenv').config();
const db            = require('./models');
const express       = require('express');
const app           = express();
const CORS          = require('cors');
const bodyParser    = require('body-parser');
const errorHandler  = require('./handlers/error');
const authRoutes    = require('./routes/auth');
const messagesRoutes = require('./routes/messages');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = process.env.PORT || 8081;

app.use(CORS());
app.use(bodyParser.json());

app.use('/api/routes/auth', authRoutes);
app.use('/api/user/:id/messages',
loginRequired,
ensureCorrectUser,
messagesRoutes);

app.get('/api/messages', loginRequired, async function(req, res, next){
    try {
        let messages = await db.Message.find()
        .sort({ createdAt: "desc" })
        .populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(messages);
    }
    catch(err){
        return next(err)
    }
});


app.use(function(req,res, next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);



app.listen(PORT, () => console.log(`APP IS NOW RUNNING ON PORT ${PORT}`));
