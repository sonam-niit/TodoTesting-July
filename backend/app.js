const app = require('./server');
const mongoose= require('mongoose');
mongoose.connect
    ('mongodb+srv://sonamsoni:5bJqTeOHj6e4jwVH@cluster0.e5c2s4d.mongodb.net/todoapp')
    .then(resp => console.log('connected'))
    .catch(error => console.error('Error while connecting DB'))

app.listen(5000, () => console.log('server started successfully'))
