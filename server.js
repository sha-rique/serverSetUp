// instance initiate krna... aur server ko listen krna...
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})


// defining routes

app.get('/', (req, res) => {
    res.send('Hello World');
});

// post request handle krne ke liye... body parser...
let bodyParser = require('body-parser');
app.use(bodyParser.json())

app.post('/cars', (req,res) => {
    let {make, model} = req.body;
    res.send(`Car make: ${make}, model: ${model}`);
})


// connecting express with database (mongodb) with he help of mongoose...
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB', err);
});

//  just want to check 