const express = require('express');
const app = express();
const key = require('./config/key');
const mongoose = require('mongoose');
const cors = require('cors');

// const bodyParser = require('body-parser');
const corsOption = {
    // origin: ["http://localhost:5173/","http://localhost:5174/"],
    // origin:"http://localhost:5173/",
    origin:true,
    method: ['GET','POST'],
    credentials: true,
    optionSuccesStatus: 200,
}
app.use(express.json())
app.use(cors(corsOption))
// const multer = require('multer');
const path = require('path');

// const userModel = require('./model/user')


// load controller
const {user} = require('./controller/user');


const PORT = 5000;

// connect to MongoDB 
mongoose.connect(key.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to remote MongoDB ...'))
.catch((error) => console.log('DB Connection Error', error))

// routes
app.post('/user', user)
// app.put('./updateuser/:id', updateUser)
// app.deleter('./updateuser/:id', updateUser)

// app.get('/newUser', newUser)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

