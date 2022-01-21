const express = require('express');
const app = express();
const shoes = require('./routes/shoes');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/shoes', shoes);
app.use(express.static('public'));

app.use(notFound);
app.use(errorHandler);

//routes
app.get('/', (req, res) => {
    res.send('Shoes API');
});

const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server listening on port ${PORT}....`));
    } catch(err) {
        console.log(err);
    }
};
start();