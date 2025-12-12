const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Handle sync errors (programming errors)
process.on('uncaughtException', err => {
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

// Database Connection
const DB = process.env.DATABASE; // password should already be replaced in config.env

mongoose.connect(DB)
    .then(() => {
        console.log('DB Connection successfully');
    })
    .catch(err => {
        console.log('DB CONNECTION ERROR:', err);
    });

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// Handle async errors (DB, promises)
process.on('unhandledRejection', err => {
    server.close(() => process.exit(1));
});
