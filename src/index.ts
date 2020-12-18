import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import { router } from './routes';
import { errorHandler } from './middleware/errorHandler';
import mongoose from 'mongoose';
import { routeLogger } from './middleware/routeLogger';

config();

const app = express();
const PORT = 3001;

if (!process.env.DB_CONNECTION_URL)
    throw new Error('Invalid or missing database connection string');

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to DB'));
db.once('open', function () {
    console.log('Database connnection Successful :)!');
});

app.use(cors());
app.use(express.json());

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.jwks_url || '',
    }),
    audience: 'budget_app_backend',
    issuer: process.env.auth_url,
    algorithms: ['RS256'],
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use(routeLogger);
app.use(router);
app.use(errorHandler);
