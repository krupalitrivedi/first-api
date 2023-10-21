const express = require('express');
const connectDB = require('../config/db')
const user = require('./models/userModel')
const port = 5000;
connectDB();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
