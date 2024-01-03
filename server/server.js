require('dotenv').config();
const express = require('express');
const formData = require('express-form-data');
const cors = require('cors');

const userRoutes = require('./routes/users');

const PORT = process.env.PORT || 5405;
const app = express();
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));

app.use(express.json());
app.use(formData.parse());
app.use(cors(
    {
        origin: ["*", "http://localhost:5173"]
    }
))

app.use('/api', userRoutes);
