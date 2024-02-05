const express = require('express');
require('./service/connectdb')();
const studentRoutes = require('./routes/studentsRoute');
const usersRoutes = require('./routes/usersRoutes'); 


const app = express();
require('./startup/prod')(app);

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(usersRoutes);
app.use(studentRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log( PORT + ' port eshitilmoqda');
})