const express = require('express');
const app = express();
const router = require('./routers/router');
require('dotenv').config();

const PORT = process.env.PORT || 8001;

app.use(express.json());

app.use("/api", router);

const startApp = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        })
    } catch (e) {
        console.error(`Failed to launch app with error: ${e.message}`);
    }
};

startApp();