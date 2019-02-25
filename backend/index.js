require('dotenv').config();

const express       = require('express');
const app           = express();
const CORS          = require('cors');
const bodyParser    = require('body-parser');
const errorHandler  = require('./handlers/error');
const authRoutes    = require('./routes/auth');

const PORT      = 8081;

app.use(CORS());
app.use(bodyParser.json());

app.use('/api/routes/auth', authRoutes);

app.use(function(req,res, next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);



app.listen(PORT, () => console.log(`APP IS NOW RUNNING ON PORT ${PORT}`));
