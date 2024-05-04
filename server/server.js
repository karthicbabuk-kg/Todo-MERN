const express = require('express');
const main = require('./models/db');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const app = express();
const cors =require('cors')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/task', router);
main().then(() => console.log("Database connected")).catch(err => console.log(err));

app.listen(8000, err => {
    if (err) throw err;
    console.log('server is running on port : 8000');
})