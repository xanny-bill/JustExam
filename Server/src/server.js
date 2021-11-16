require('dotenv').config({ path: '../.env' });

const express = require('express');

//! assign to next time
// const https = require('https');
const cors = require('cors');
/// ///////////////////////////////////////////
//! google login Oauth2
const session = require('express-session');
const passport = require('passport');
const jwtChecker = require('./middlewares/jwt');

const app = express();

require('./configs/passport.config');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.EXPOSE_PORT;

const api = require('./apis/index.api');

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', api);

//! Database sync
const db = require('./models/db');

db.sequelize.sync({ alter: true });

app.get('/test', jwtChecker, (req, res) => {
  res.status(200).json(req?.user);
});

app.use((req, res) => {
  res.status(501).send('incorrect path');
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});