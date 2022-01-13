require('dotenv').config();
const jsonProducts = require('./data.json');
const connectDB = require('./db/connect');
const Product = require('./models/shoe');

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!!')
        process.exit(0)
    } catch (err) {
        console.log(err);
    }
}

populate();
//module.exports = populate;