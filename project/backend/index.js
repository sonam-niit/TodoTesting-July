const express = require('express');
const UserController= require('./routes/user.route');
const mongoose= require('mongoose');

const MONGO_URI='mongodb+srv://sonamgravity:QZRobSYZsmcbOMWZ@cluster0.e5c2s4d.mongodb.net/project'
mongoose.connect(MONGO_URI)
.then(()=>console.log('Connected'))
.catch((error)=>console.log(error))
//create server
const app = express();
//JSON Parser
app.use(express.json())
app.use('/api/user',UserController);

//start the server
app.listen(5000,()=>console.log('server started'))