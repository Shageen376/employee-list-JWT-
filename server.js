// server.js
const express = require('express');
const cors= require("cors")
const mongoose = require('./db');
const authRoutes = require('./routes/auth');


const app = express();
app.use(cors())

app.use(express.json());
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
